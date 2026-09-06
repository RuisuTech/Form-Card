import React from 'react';

interface CustomizeProps {
  onImageChange: (imageUrl: string) => void;
  textColor: string;
  borderColor: string;
}

const Customize: React.FC<CustomizeProps> = ({ onImageChange, textColor, borderColor }) => {
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    onImageChange('');
  };

  return (
    <div className="w-full mb-4">
      <p className="mb-2 font-semibold" style={{ color: textColor }}>PERSONALIZA TU FONDO</p>

      {previewImage ? (
        <div className="relative mb-3">
          <img
            src={previewImage}
            alt="Vista previa"
            className="w-full h-24 object-cover rounded-xl border-2"
            style={{ borderColor }}
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-[#21092f] text-white rounded-full w-7 h-7 flex items-center justify-center text-xs"
          >
            X
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-center w-full h-24 border-2 border-dashed rounded-xl cursor-pointer transition-all" style={{ borderColor }}>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-8 h-8" style={{ color: textColor, opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: textColor, opacity: 0.5 }}>Subir imagen</span>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      )}
    </div>
  );
};

export default Customize;
