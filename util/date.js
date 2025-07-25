export function getFormattedDate(date) {
  if (!(date instanceof Date)) return null;
  return date.toISOString().slice(0, 10);
}


export function getDateMinusDays(date,days) {
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}