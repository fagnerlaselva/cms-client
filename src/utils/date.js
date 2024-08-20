import { DateTime } from "luxon";

export const formatDate = (dateISO, format = DateTime.DATETIME_MED) => {
  const dt = DateTime.fromISO(dateISO)
  return dt.toLocaleString(format)
}