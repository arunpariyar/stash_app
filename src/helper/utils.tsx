function displayAsEuro(amount: number) {
  return Intl.NumberFormat("en", {
    currency: "EUR",
    style: "currency",
  }).format(amount);
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

const utils = { displayAsEuro, formatDate };

export default utils;
