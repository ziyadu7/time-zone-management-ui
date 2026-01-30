import { Timezone } from "@/types";
import { convertUtcToTimezone } from "@/utils/timeConvert";

interface Props {
  utcTime: string;
  timezone: Timezone;
}

export default function TimeslotDetails({ utcTime, timezone }: Props) {
  return (
    <div className="mt-6 border rounded p-4 bg-gray-50">
      <h2 className="font-semibold mb-2">Timeslot Details</h2>
      <p><strong>Original (UTC):</strong> {utcTime}</p>
      <p>
        <strong>Converted ({timezone.id}):</strong>{" "}
        {convertUtcToTimezone(utcTime, timezone.offset)} {timezone.id}
      </p>
    </div>
  );
}
