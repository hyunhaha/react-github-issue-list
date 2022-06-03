export const dateForm = input => {
  const [date, timeTemp] = input.split("T");
  const [time, _] = timeTemp.split("Z");

  return `${date} ${time}`;
};
