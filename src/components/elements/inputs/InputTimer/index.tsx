import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { InputTime } from "./InputTime";
import { convertTimeToNumber } from "@/utils/time";
import { Time } from "@/types/time";
import { useClickOutside } from "@/hooks/useClickOutside";

type Props = {
  initialValue?: Time;
  onChange?: (value: number) => void;
  classes?: {
    container?: string;
    input?: string;
  };
};

export function InputTimer({ initialValue, onChange, classes }: Props) {
  const [time, setTime] = useState<Time>(
    initialValue ?? {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  );
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsFocused(false));

  useEffect(() => {
    onChange?.(convertTimeToNumber(time));
  }, [time]);

  const handleChange = (key: string, value: number) => {
    let newTime = { ...time };
    if (key === "seconds") {
      if (value >= 60) {
        const minutesToAdd = Math.floor(value / 60);
        newTime.minutes += minutesToAdd;
        newTime.seconds = value % 60;
        if (newTime.minutes >= 60) {
          const hoursToAdd = Math.floor(newTime.minutes / 60);
          newTime.hours += hoursToAdd;
          newTime.minutes = newTime.minutes % 60;
        }
      } else if (value < 0) {
        newTime.seconds = 59;
        if (newTime.minutes > 0) {
          newTime.minutes -= 1;
        } else if (newTime.hours > 0) {
          newTime.hours -= 1;
          newTime.minutes = 59;
        }
      } else {
        newTime.seconds = value;
      }
    }

    if (key === "minutes") {
      if (value >= 60) {
        const hoursToAdd = Math.floor(value / 60);
        newTime.hours += hoursToAdd;
        newTime.minutes = value % 60;
      } else if (value < 0) {
        newTime.minutes = 59;
        newTime.hours = newTime.hours > 0 ? newTime.hours - 1 : 0;
      } else {
        newTime.minutes = value;
      }
    }

    if (key === "hours") {
      if (value < 0) {
        newTime.hours = 0;
      } else {
        newTime.hours = value;
      }
    }

    setTime(newTime);
  };

  return (
    <div
      className={cn("w-full flex items-center gap-[1px]", classes?.container)}
      onFocus={() => setIsFocused(true)}
      ref={ref}
    >
      <InputTime
        classes={{ input: cn("w-full", classes?.input) }}
        value={time.hours}
        onChange={(value) => handleChange("hours", value)}
        active={isFocused}
        max={99}
        min={0}
        leadingZeros={2}
      />
      <span>:</span>
      <InputTime
        classes={{ input: cn("w-full", classes?.input) }}
        value={time.minutes}
        onChange={(value) => handleChange("minutes", value)}
        active={isFocused}
        leadingZeros={2}
      />
      <span>:</span>
      <InputTime
        classes={{ input: cn("w-full", classes?.input) }}
        value={time.seconds}
        onChange={(value) => handleChange("seconds", value)}
        active={isFocused}
        leadingZeros={2}
      />
    </div>
  );
}
