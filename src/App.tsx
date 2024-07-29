import { useState } from 'react';
import './App.css';

import RenderForm from './components/RenderForm';
import RenderComplete from './components/RenderComplete';
import RenderCards from './components/RenderCards';

function App() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleConfirmClick = () => {
    setIsComplete(true);
  };

  const handleContinueClick = () => {
    // Reset state
    setCardName('');
    setCardNumber('');
    setExpMonth('');
    setExpYear('');
    setCvc('');
    setIsComplete(false);
  };

  return (
    <div className="md:flex">
      <RenderCards 
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
      <div className="flex flex-col justify-center items-center p-8 mt-4 w-full text-[14px] font-medium">
        <div className="w-[320px]">
          {isComplete ? (
            <RenderComplete onContinue={handleContinueClick} />
          ) : (
            <RenderForm
              setCardName={setCardName}
              setCardNumber={setCardNumber}
              setExpMonth={setExpMonth}
              setExpYear={setExpYear}
              setCvc={setCvc}
              onConfirm={handleConfirmClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
