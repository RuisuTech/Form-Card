interface RenderCompleteProps {
  onContinue: () => void; // Propiedad para manejar el clic en "Continue"
}

function RenderComplete({ onContinue }: RenderCompleteProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-8 w-[320px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="./icon-complete.svg" alt="Complete" />
        <h1 className="text-[36px]">Thank you!</h1>
        <p className="text-[#8e8593]">We've added your card details</p>
        <input
          className="bg-[#21092f] text-[white] w-[320px] mt-8 p-4 rounded-xl cursor-pointer"
          type="button"
          value="Continue"
          onClick={onContinue} // Llamar a la función de reinicio
        />
      </div>
    </div>
  );
}

export default RenderComplete;
