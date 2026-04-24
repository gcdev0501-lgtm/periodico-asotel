import { useEffect, useState } from "react";
import "../styles/currencyticker.css";

const BASE_CURRENCIES = ["USD", "COP", "EUR", "MXN", "BRL"];
const FIXED_CURRENCIES = ["EUR", "CAD"]; // monedas a mostrar en COP

export default function CurrencyTicker() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(err => console.error(err));
  }, []);

  if (!rates) return null;

  // Valor correcto en COP: 1 moneda = (COP/USD) / (MONEDA/USD)
  const getInCOP = (currency) => {
    if (currency === "USD") return rates["COP"];
    return rates["COP"] / rates[currency];
  };

  return (
    <div className="ticker-container">
      <div className="ticker-track">

        {/* Divisas base en USD */}
        {BASE_CURRENCIES.map(code => (
          <span key={code} className="ticker-item">
            {code}: {rates[code]?.toFixed(2)}
          </span>
        ))}
            {/* Separador visual */}
  <span className="ticker-separator">/</span>

  
        {/* Divisas fijas en COP */}
        {FIXED_CURRENCIES.map(code => (
          <span key={code + "-cop"} className="ticker-item">
            1 {code} = {getInCOP(code).toFixed(2)} COP
          </span>
        ))}

      </div>
    </div>
  );
}