export const timestampToHumanReadableTime = timestamp => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${addZeroIfMinutesLessThenTen(date.getMinutes())}`;
};

const addZeroIfMinutesLessThenTen = minutes => {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};
