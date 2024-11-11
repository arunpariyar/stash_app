function displayAsEuro(amount: number) {
  return Intl.NumberFormat("en", {
    currency: "EUR",
    style: "currency",
  }).format(amount);
}

const utils = { displayAsEuro };

export default utils;
