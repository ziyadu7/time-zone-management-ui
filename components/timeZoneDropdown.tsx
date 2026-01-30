import { Timezone } from "@/types";

interface Props {
  timezones: Timezone[];
  selected: Timezone | null;
  onChange: (tz: Timezone) => void;
}

export default function TimezoneDropdown({
  timezones,
  selected,
  onChange,
}: Props) {
  return (
    <select
      className="w-full border rounded px-3 py-2"
      value={selected?.id || ""}
      onChange={(e) => {
        const tz = timezones?.find(t => t.id === e.target.value);
        if (tz) onChange(tz);
      }}
    >
      <option value="">Select Timezone</option>
      {timezones?.map(tz => (
        <option key={tz.id} value={tz.id}>
          {tz.name}
        </option>
      ))}
    </select>
  );
}
