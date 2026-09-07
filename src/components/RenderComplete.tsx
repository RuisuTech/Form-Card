interface RenderCompleteProps {
  onContinue: () => void;
  textColor: string;
  borderColor: string;
  buttonColor: string;
}

function RenderComplete({ onContinue, textColor, borderColor, buttonColor }: RenderCompleteProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-8 w-[320px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="./icon-complete.svg" alt="Completo" />
        <h1 className="text-[36px]" style={{ color: textColor }}>Gracias!</h1>
        <p style={{ color: textColor, opacity: 0.7 }}>Datos agregados correctamente</p>
        <input
          className="text-white w-[320px] mt-8 p-4 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          type="button"
          value="Continuar"
          onClick={onContinue}
          style={{ backgroundColor: buttonColor }}
        />
      </div>
    </div>
  );
}

export default RenderComplete;
