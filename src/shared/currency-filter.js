export default (amount, symbol) => {
  return `${symbol}${amount.toFixed(2)}`
}