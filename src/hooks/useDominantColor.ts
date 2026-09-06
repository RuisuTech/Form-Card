import { useState, useEffect } from 'react';

interface DominantColorResult {
  color: string | null;
  textColor: string;
  borderColor: string;
  inputBg: string;
  inputText: string;
}

const getLuminance = (r: number, g: number, b: number): number => {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
};

export const useDominantColor = (imageUrl: string): DominantColorResult => {
  const [result, setResult] = useState<DominantColorResult>({
    color: null,
    textColor: '#21092f',
    borderColor: '#dedddf',
    inputBg: '#ffffff',
    inputText: '#000000',
  });

  useEffect(() => {
    if (!imageUrl) {
      setResult({
        color: null,
        textColor: '#21092f',
        borderColor: '#dedddf',
        inputBg: '#ffffff',
        inputText: '#000000',
      });
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0, g = 0, b = 0;
      const total = imageData.length / 4;

      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }

      r = Math.round(r / total);
      g = Math.round(g / total);
      b = Math.round(b / total);

      const luminance = getLuminance(r, g, b);
      const isLight = luminance > 0.4;

      setResult({
        color: `rgb(${r}, ${g}, ${b})`,
        textColor: isLight ? '#21092f' : '#ffffff',
        borderColor: isLight ? '#dedddf' : 'rgba(255,255,255,0.3)',
        inputBg: isLight ? '#ffffff' : 'rgba(255,255,255,0.15)',
        inputText: isLight ? '#000000' : '#ffffff',
      });
    };
  }, [imageUrl]);

  return result;
};
