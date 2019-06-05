export const timestampToHumanReadableTime = (timestamp: string) => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${addZeroIfMinutesLessThenTen(date.getMinutes())}`;
};

const addZeroIfMinutesLessThenTen = (minutes: number) => {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};
