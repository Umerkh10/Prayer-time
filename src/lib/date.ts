import dayjs from "dayjs";

export const refactorDate = (dateTime: string) => {
  return dayjs(dateTime).format("MMMM DD, YYYY hh:mm a");
};