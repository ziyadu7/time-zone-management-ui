import { Timeslot, Timezone } from "@/types";
import { convertUtcToTimezone } from "@/utils/timeConvert";

interface Props {
  timeslots: Timeslot[];
  timezone: Timezone | null;
  selected: string | null;
  onChange: (utc: string) => void;
}

export default function TimeslotDropdown({
  timeslots,
  timezone,
  selected,
  onChange,
}: Props) {
  if (!timezone) return null;

  return (
    <select
      className="w-full border rounded px-3 py-2 mt-4"
      value={selected || ""}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select Timeslot</option>

      {timeslots.map(slot => {
        const converted = convertUtcToTimezone(
          slot.utc_time,
          timezone.offset
        );

        return (
          <option key={slot.utc_time} value={slot.utc_time}>
            {converted} {timezone.id}
          </option>
        );
      })}
    </select>
  );
}
