export function extractTime(dateString) {
  if (!dateString) return "Unknown time";

  const date = new Date(dateString);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  if (isToday) {
    return `Today ${hours}:${minutes}`;
  } else if (isYesterday) {
    return `Yesterday ${hours}:${minutes}`;
  } else {
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
