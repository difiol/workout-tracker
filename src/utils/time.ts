import { Time } from "@/types/time";

export function convertNumberToTime(valueInSeconds: number): Time {
  const hours = Math.floor(valueInSeconds / 3600);
  const minutes = Math.floor((valueInSeconds % 3600) / 60);
  const seconds = Math.floor(valueInSeconds % 60);

  return { hours, minutes, seconds };
}

export function convertTimeToNumber(time: Time): number {
  return time.hours * 3600 + time.minutes * 60 + time.seconds;
}

