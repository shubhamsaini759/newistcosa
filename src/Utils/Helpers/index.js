export const DateFormatter = (date) => {
  if (!!date) {
    const d = new Date(date);
    const formattedDate = `${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
      .getDate()
      .toString()
      .padStart(2, "0")}-${d.getFullYear()}`;
    return formattedDate;
  }
  return null;
};
