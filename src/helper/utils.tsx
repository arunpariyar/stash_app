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

function calcPercentage(total: number, target: number) {
  const percentage = (total / target) * 100;
  return percentage.toFixed(1);
}

const colors = [
  { name: "green", value: "#50C878", used: true },
  { name: "blue", value: "#4682B4", used: false },
  { name: "red", value: "#FF6347", used: true },
  { name: "orange", value: "#FFA500", used: false },
  { name: "purple", value: "#9370DB", used: false },
  { name: "teal", value: "#008080", used: false },
  { name: "yellow", value: "#FFD700", used: false },
  { name: "pink", value: "#FF69B4", used: true },
  { name: "cyan", value: "#00FFFF", used: false },
  { name: "magenta", value: "#FF00FF", used: false },
  { name: "lime", value: "#32CD32", used: false },
  { name: "indigo", value: "#4B0082", used: false },
  { name: "gold", value: "#FFD700", used: true },
  { name: "coral", value: "#FF7F50", used: false },
  { name: "navy", value: "#000080", used: false },
];

const utils = { displayAsEuro, formatDate, colors, calcPercentage };

export default utils;
