const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const normalizeDate = (date) => {
  const DATE = new Date(date);

  const year = DATE.getFullYear();
  const month = MONTHS[DATE.getMonth()];
  const day = DATE.getDate().toString().padStart(2, "0");

  return DATE == "Invalid Date" ? "Not found" : `${month} ${day}, ${year}`;
};
