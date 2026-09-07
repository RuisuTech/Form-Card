import { useState, useEffect } from 'react';

interface DominantColorResult {
  color: string | null;
  gradient: string;
  overlayGradient: string;
  buttonColor: string;
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

const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }

  return [h * 360, s * 100, l * 100];
};

const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
  h /= 360; s /= 100; l /= 100;
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const getDarkerColor = (r: number, g: number, b: number): string => {
  const [h, s, l] = rgbToHsl(r, g, b);
  const darkerL = Math.max(10, l - 20);
  const [dr, dg, db] = hslToRgb(h, s, darkerL);
  return `rgb(${dr}, ${dg}, ${db})`;
};

const getEdgeColors = (imageData: Uint8ClampedArray, width: number, height: number) => {
  const sampleEdge = (getPixel: (x: number, y: number) => number) => {
    const colorMap = new Map<string, { r: number; g: number; b: number; count: number }>();
    const step = 16;
    const samples = 40;

    for (let i = 0; i < samples; i++) {
      const idx = getPixel(i, samples) * 4;
      const qr = Math.round(imageData[idx] / step) * step;
      const qg = Math.round(imageData[idx + 1] / step) * step;
      const qb = Math.round(imageData[idx + 2] / step) * step;
      const key = `${qr},${qg},${qb}`;
      if (colorMap.has(key)) {
        colorMap.get(key)!.count++;
      } else {
        colorMap.set(key, { r: qr, g: qg, b: qb, count: 1 });
      }
    }

    let best = { r: 0, g: 0, b: 0, count: 0 };
    colorMap.forEach(({ r, g, b, count }) => {
      if (count > best.count) best = { r, g, b, count };
    });
    return best;
  };

  const right = sampleEdge((i, total) => {
    const y = Math.floor((i / total) * height);
    return (y * width + (width - 1));
  });

  const top = sampleEdge((i, total) => {
    const x = Math.floor((i / total) * width);
    return x;
  });

  const bottom = sampleEdge((i, total) => {
    const x = Math.floor((i / total) * width);
    return ((height - 1) * width + x);
  });

  return { right, top, bottom };
};

export const useDominantColor = (imageUrl: string): DominantColorResult => {
  const [result, setResult] = useState<DominantColorResult>({
    color: null,
    gradient: 'linear-gradient(to right, #ffffff, #f0f0f0)',
    overlayGradient: '',
    buttonColor: '#21092f',
    textColor: '#21092f',
    borderColor: '#dedddf',
    inputBg: '#ffffff',
    inputText: '#000000',
  });

  useEffect(() => {
    if (!imageUrl) {
      setResult({
        color: null,
        gradient: 'linear-gradient(to right, #ffffff, #f0f0f0)',
        overlayGradient: '',
        buttonColor: '#21092f',
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
      const colorMap = new Map<string, { r: number; g: number; b: number; count: number }>();
      const step = 32;

      for (let i = 0; i < imageData.length; i += 4) {
        const qr = Math.round(imageData[i] / step) * step;
        const qg = Math.round(imageData[i + 1] / step) * step;
        const qb = Math.round(imageData[i + 2] / step) * step;
        const key = `${qr},${qg},${qb}`;

        if (colorMap.has(key)) {
          colorMap.get(key)!.count++;
        } else {
          colorMap.set(key, { r: qr, g: qg, b: qb, count: 1 });
        }
      }

      let best = { r: 0, g: 0, b: 0, score: -1 };

      colorMap.forEach(({ r, g, b, count }) => {
        const lum = getLuminance(r, g, b);
        if (lum < 0.05 || lum > 0.95) return;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;
        const score = count * (0.3 + saturation * 0.7);
        if (score > best.score) {
          best = { r, g, b, score };
        }
      });

      const luminance = getLuminance(best.r, best.g, best.b);
      const isLight = luminance > 0.4;

      const edges = getEdgeColors(imageData, canvas.width, canvas.height);

      const overlayR = Math.round(edges.right.r * 0.2);
      const overlayG = Math.round(edges.right.g * 0.2);
      const overlayB = Math.round(edges.right.b * 0.2);
      const overlayGradient = `linear-gradient(to left, rgba(${overlayR}, ${overlayG}, ${overlayB}, 1) 0%, rgba(${overlayR}, ${overlayG}, ${overlayB}, 0.6) 40%, transparent 85%)`;

      const formStart = `rgb(${overlayR}, ${overlayG}, ${overlayB})`;
      const formEnd = getDarkerColor(edges.right.r, edges.right.g, edges.bottom.b);
      const gradient = `linear-gradient(to right, ${formStart} 0%, ${formEnd} 100%)`;

      setResult({
        color: `rgb(${best.r}, ${best.g}, ${best.b})`,
        gradient,
        overlayGradient,
        buttonColor: getDarkerColor(best.r, best.g, best.b),
        textColor: isLight ? '#21092f' : '#ffffff',
        borderColor: isLight ? '#dedddf' : 'rgba(255,255,255,0.3)',
        inputBg: isLight ? '#ffffff' : 'rgba(255,255,255,0.15)',
        inputText: isLight ? '#000000' : '#ffffff',
      });
    };
  }, [imageUrl]);

  return result;
};
