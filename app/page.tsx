"use client";

import { useEffect, useState } from "react";
import { Timezone, Timeslot } from "@/types";
import { fetchTimezones, fetchTimeslots } from "@/services/backendApi";
import TimezoneDropdown from "@/components/timeZoneDropdown";
import TimeslotDropdown from "@/components/timeslotList";
import TimeslotDetails from "@/components/timeslotDetails";

export default function Home() {
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [timeslots, setTimeslots] = useState<Timeslot[]>([]);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone | null>(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null);
  const [showTimeSloteDetails, setshowTimeSloteDetails] = useState<boolean | null>(false);

  useEffect(() => {
    console.log("Fetching timezones and timeslots");
    fetchTimezones().then(setTimezones);
    fetchTimeslots().then(setTimeslots);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white w-full max-w-xl rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Timezone & Timeslot Management
        </h1>

        <TimezoneDropdown
          timezones={timezones}
          selected={selectedTimezone}
          onChange={(tz) => {
            setSelectedTimezone(tz);
            setSelectedTimeslot(null);
          }}
        />

        <TimeslotDropdown
          timeslots={timeslots}
          timezone={selectedTimezone}
          selected={selectedTimeslot}
          onChange={setSelectedTimeslot}
        />

        {selectedTimeslot && selectedTimezone && (
          <>
            <button onClick={() => setshowTimeSloteDetails(!showTimeSloteDetails)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Show Timeslot Details
            </button>

            {showTimeSloteDetails && <TimeslotDetails
              utcTime={selectedTimeslot}
              timezone={selectedTimezone}
            />}
          </>
        )}
      </div>
    </main>
  );
}
