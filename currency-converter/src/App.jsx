import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const BG_IMAGE =
  "https://img.freepik.com/free-vector/buy-sell-trend-forex-trading-background_1017-31712.jpg?semt=ais_hybrid&w=740&q=80";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="w-full max-w-md mx-4">
        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-3 shadow-2xl border border-white/30">
          {/* From box */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectedCurrency={from}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
          />

          {/* Swap button */}
          <div className="flex justify-center -my-1 relative z-10">
            <button
              onClick={swap}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors duration-200 text-sm"
            >
              swap
            </button>
          </div>

          {/* To box */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectedCurrency={to}
            onAmountChange={setConvertedAmount}
            onCurrencyChange={setTo}
            amountDisabled
          />

          {/* Convert button */}
          <button
            onClick={convert}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-colors duration-200 text-base tracking-wide uppercase"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
