function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white rounded-2xl p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400 text-sm font-medium">{label}</span>
        <span className="text-gray-400 text-sm font-medium">Currency Type</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <input
          type="number"
          className="w-full text-2xl font-semibold text-gray-800 outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="bg-gray-100 text-gray-700 font-medium px-3 py-2 rounded-lg outline-none cursor-pointer min-w-[90px] text-sm border border-gray-200"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
