export const MONEY_FORMAT = (value) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(value)) >= 1.0e9
    ? `$${(Math.abs(Number(value)) / 1.0e9).toFixed(2)}b`
    : // Six Zeroes for Millions
    Math.abs(Number(value)) >= 1.0e6
    ? `$${(Math.abs(Number(value)) / 1.0e6).toFixed(2)}m`
    : // Three Zeroes for Thousands
    Math.abs(Number(value)) >= 1.0e3
    ? `$${(Math.abs(Number(value)) / 1.0e3).toFixed(2)}k`
    : Math.abs(Number(value).toFixed(2));
};
