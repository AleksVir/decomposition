import React from 'react';

interface CurrencyBlockProps {
  currencies: Array<{
    id: number;
    code: string;
    rate: number;
    change: number;
    symbol: string;
  }>;
}

const CurrencyBlock: React.FC<CurrencyBlockProps> = ({ currencies }) => {
  return (
    <div className="currency-block">
      {currencies.map((currency) => (
        <div key={currency.id} className="currency-item">
          <span className={`currency-symbol ${currency.change >= 0 ? 'positive' : 'negative'}`}>
            {currency.symbol} {currency.rate.toFixed(2)}
          </span>
          <span className={`currency-change ${currency.change >= 0 ? 'positive' : 'negative'}`}>
            {currency.change.toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default CurrencyBlock;
