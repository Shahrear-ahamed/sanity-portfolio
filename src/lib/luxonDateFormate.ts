import { DateTime } from "luxon";

export const parseIsoDate = (date: string) => {
  const parsedDate = DateTime.fromISO(date, { zone: "utc" });
  return parsedDate.toFormat("yyyy-MM-dd");
};
