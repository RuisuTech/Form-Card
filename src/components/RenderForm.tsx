import React from 'react';

interface RenderFormProps {
  setCardName: (value: string) => void;
  setCardNumber: (value: string) => void;
  setExpMonth: (value: string) => void;
  setExpYear: (value: string) => void;
  setCvc: (value: string) => void;
  onConfirm: () => void; // Propiedad obligatoria para manejar el clic en Confirm
}

const formatCardNumber = (number: string): string => {
  const cleaned = number.replace(/\D/g, '');
  const grouped = cleaned.match(/.{1,4}/g);
  return grouped ? grouped.join(' ') : '';
};

const RenderForm: React.FC<RenderFormProps> = ({
  setCardName,
  setCardNumber,
  setExpMonth,
  setExpYear,
  setCvc,
  onConfirm
}) => {
  const [cardNumber, setCardNumberState] = React.useState('');
  const [expMonth, setExpMonthState] = React.useState('');
  const [expYear, setExpYearState] = React.useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatCardNumber(rawValue);
    setCardNumberState(formattedValue);
    setCardNumber(formattedValue);
  };

  const handleExpMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const month = e.target.value.replace(/\D/g, '');
    setExpMonthState(month);
    setExpMonth(month);
  };

  const handleExpYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = e.target.value.replace(/\D/g, '');
    setExpYearState(year);
    setExpYear(year);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 w-full text-[14px] font-medium">
      <div className="w-[320px]">
        <p className="text-[#21092f] mt-4">CARDHOLDER NAME</p>
        <input
          className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
          type="text"
          name="CardName"
          id="CardName"
          placeholder="Su nombre"
          onChange={(e) => setCardName(e.target.value)}
        />
        <p className="text-[#21092f] mt-4">CARD NUMBER</p>
        <input
          className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
          type="text"
          name="CardNumber"
          id="CardNumber"
          placeholder="1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19} // 16 digits + 3 spaces
        />
        <div className="flex gap-2 w-full mt-4">
          <div className="w-1/4">
            <p className="text-[#21092f]">EXP. DATE</p>
            <input
              className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
              type="text"
              name="CardTimeMonth"
              id="CardTimeMonth"
              placeholder="MM"
              maxLength={2}
              value={expMonth}
              onChange={handleExpMonthChange}
            />
          </div>
          <div className="w-1/4">
            <p className="text-[#21092f]">(MM/YY)</p>
            <input
              className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
              type="text"
              name="CardTimeYear"
              id="CardTimeYear"
              placeholder="YY"
              maxLength={2}
              value={expYear}
              onChange={handleExpYearChange}
            />
          </div>
          <div className="w-1/2">
            <p className="text-[#21092f]">CVC</p>
            <input
              className="text-black rounded border-2 border-[#dedddf] py-1 px-2 w-full mt-1"
              type="text"
              name="CardCvc"
              id="CardCvc"
              placeholder="123"
              maxLength={3}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <input
          className="bg-[#21092f] text-[white] w-full my-8 p-4 rounded-xl"
          type="button"
          value="Confirmar"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
}

export default RenderForm;
