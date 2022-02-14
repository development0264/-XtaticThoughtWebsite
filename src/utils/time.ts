const months = [
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
  "Dec"
];

export function getFormattedDateFromUnixTimestamp(unix_timestamp) {
  const a = new Date(unix_timestamp * 1000);
  const year = a.getUTCFullYear();
  const month = months[a.getUTCMonth()];
  const date = a.getUTCDate();

  return `${date} ${month} ${year}`;
}
