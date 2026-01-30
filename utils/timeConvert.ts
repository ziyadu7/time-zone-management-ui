import { DateTime } from 'luxon';

export const convertUtcToTimezone = (
  utcTime: string,
  offset: number
): string => {
  return DateTime
    .fromISO(utcTime, { zone: 'utc' })
    .plus({ hours: offset })
    .toFormat('yyyy-LL-dd HH:mm');
};
