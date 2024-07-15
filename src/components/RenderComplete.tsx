function RenderComplete() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 mt-8 w-full">
        <div className="flex flex-col justify-center items-center w-[90vw] gap-4">
        <img src="./icon-complete.svg" alt="Complete" />
        <h1 className="text-[36px]" >Thank you!</h1>
        <p className="text-[#8e8593]">We've added your card details Continue</p>
        <input className="bg-[#21092f] text-[white] w-full mt-8 p-4 rounded-xl" type="button" value="Continue" />
        </div>
        
      </div>
    </>
  );
}

export default RenderComplete;