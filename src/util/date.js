export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate() + 1).padStart(2, "0")}`;
};
