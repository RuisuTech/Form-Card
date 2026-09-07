import { useState } from 'react';
import './App.css';

import RenderForm from './components/RenderForm';
import RenderComplete from './components/RenderComplete';
import RenderCards from './components/RenderCards';
import Customize from './components/Customize';
import { useDominantColor } from './hooks/useDominantColor';

function App() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [cardImage, setCardImage] = useState('/default-bg.jpg');

  const dominantColor = useDominantColor(cardImage);

  const handleConfirmClick = () => {
    setIsComplete(true);
  };

  const handleContinueClick = () => {
    setCardName('');
    setCardNumber('');
    setExpMonth('');
    setExpYear('');
    setCvc('');
    setIsComplete(false);
    setCardImage('/default-bg.jpg');
  };

  const handleImageChange = (imageUrl: string) => {
    setCardImage(imageUrl);
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen min-h-screen">
      <RenderCards 
        cardName={cardName}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
        cardImage={cardImage}
        textColor={dominantColor.textColor}
        overlayGradient={dominantColor.overlayGradient}
      />
      <div
        className="flex flex-col justify-center items-center p-8 w-full flex-1 text-[14px] font-medium transition-all duration-500 md:min-h-0 md:h-screen md:max-w-[calc(100vw-600px)] overflow-auto"
        style={{ backgroundImage: dominantColor.gradient, backgroundColor: '#ffffff' }}
      >
        <div className="w-[320px]">
          <Customize onImageChange={handleImageChange} textColor={dominantColor.textColor} borderColor={dominantColor.borderColor} />
          {isComplete ? (
            <RenderComplete onContinue={handleContinueClick} textColor={dominantColor.textColor} borderColor={dominantColor.borderColor} buttonColor={dominantColor.buttonColor} />
          ) : (
            <RenderForm
              setCardName={setCardName}
              setCardNumber={setCardNumber}
              setExpMonth={setExpMonth}
              setExpYear={setExpYear}
              setCvc={setCvc}
              onConfirm={handleConfirmClick}
              textColor={dominantColor.textColor}
              borderColor={dominantColor.borderColor}
              inputBg={dominantColor.inputBg}
              inputText={dominantColor.inputText}
              buttonColor={dominantColor.buttonColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
