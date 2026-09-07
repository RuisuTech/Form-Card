import React from 'react';

interface RenderCardProps {
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  cardImage?: string;
  textColor?: string;
  overlayGradient?: string;
}

const formatCardNumber = (number: string): string => {
  const cleaned = number.replace(/\D/g, '');
  const grouped = cleaned.match(/.{1,4}/g);
  return grouped ? grouped.join(' ') : '';
};

const formatExpDate = (month: string, year: string): string => {
  return `${month.padStart(2, '0')}/${year.padStart(2, '0')}`;
};

const RenderCards: React.FC<RenderCardProps> = ({
  cardName,
  cardNumber,
  expMonth,
  expYear,
  cvc,
  cardImage,
  textColor = '#dedddf',
  overlayGradient,
}) => {
  return (
    <div className={`relative h-[225px] w-screen md:h-screen md:w-[600px]`}>
      <div
        className={`absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat blur-sm ${!cardImage ? "bg-[url('/bg-main-mobile.png')] md:bg-[url('/bg-main-desktop.png')]" : ""}`}
        style={cardImage ? { backgroundImage: `url(${cardImage})` } : undefined}
      />
      <div className="absolute inset-0 z-[-1] bg-black/50" />
      {overlayGradient && (
        <div
          className="absolute inset-0 z-[-1]"
          style={{ backgroundImage: overlayGradient }}
        />
      )}
      <div className="flex items-center justify-center h-[300px] w-screen">
        <div className="md:w-[420px] md:h-[232px] md:bottom-[250px] md:left-[400px] md:top-auto flex z-30 bg-[url('/bg-card-back.png')] bg-contain bg-no-repeat w-[280px] h-[155px] absolute top-6 right-6 rounded-2xl overflow-hidden">
          <p className="md:top-[98px] md:right-12 md:text-xl absolute top-[62px] right-8" style={{ color: textColor }}>{cvc || '000'}</p>
        </div>
        <div
          className={`md:w-[420px] md:h-[232px] md:bottom-[500px] md:left-[300px] md:top-auto flex z-50 bg-cover bg-center bg-no-repeat w-[280px] h-[155px] absolute top-[110px] left-6 rounded-2xl overflow-hidden ${!cardImage ? "bg-[url('/bg-card-front.png')]" : ""}`}
          style={cardImage ? { backgroundImage: `url(${cardImage})` } : undefined}
        >
          <div className="w-full p-4 relative z-10" style={{ color: textColor }}>
            <img
              className="w-auto h-[30px]"
              src="/card-logo.svg"
              alt="logo"
            />
            <p className="md:mt-[80px] md:text-3xl mt-8 text-xl tracking-wider">{formatCardNumber(cardNumber) || '0000 0000 0000 0000'}</p>
            <div className="mt-3 flex justify-between text-xs md:text-sm">
              <p>{cardName || 'Su nombre'}</p>
              <p>{formatExpDate(expMonth, expYear) || '00/00'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCards;
