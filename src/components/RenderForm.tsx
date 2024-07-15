function RenderForm() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 mt-4 w-full text-[14px] font-medium">
        <div className="w-full">
          <p className="text-[#21092f] mt-4">CARDHOLDER NAME</p>
          <input
            className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
            type="text"
            name="CardName"
            id="CardName"
            placeholder="e.g Jane Appleseed"
          />
          <p className="text-[#21092f] mt-4">CARD NUMBER</p>
          <input
            className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
            type="number"
            name="CardNumber"
            id="CardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <div className="flex gap-2 w-full mt-4">
            <div className="w-1/4">
              <p className="text-[#21092f]">EXP. DATE</p>
              <input
                className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
                type="number"
                name="CardTime"
                id="CardTime"
                placeholder="MM"
              />
            </div>
            <div className="w-1/4">
              <p className="text-[#21092f]">(MM/YY)</p>
              <input
                className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
                type="number"
                name="CardTime"
                id="CardTime"
                placeholder="YY"
              />
            </div>
            <div className="w-1/2">
              <p className="text-[hsl(#21092f]">CVC</p>
              <input
                className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
                type="number"
                name="CardTime"
                id="CardTime"
                placeholder="e.g. 123"
              />
            </div>
          </div>

          <input
            className="bg-[#21092f] text-[white] w-full my-8 p-4 rounded-xl"
            type="button"
            value="Confirm"
          />
        </div>
      </div>
    </>
  );
}

export default RenderForm;
