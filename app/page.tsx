"use client";

import { useEffect, useState } from "react";
import { Timezone, Timeslot } from "@/types";
import { fetchTimezones, fetchTimeslots } from "@/services/backendApi";
import TimezoneDropdown from "@/components/timeZoneDropdown";
import TimeslotDropdown from "@/components/timeslotList";
import TimeslotDetails from "@/components/timeslotDetails";
import PageLoading from "@/components/pageLoading";

export default function Home() {
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [timeslots, setTimeslots] = useState<Timeslot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone | null>(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null);
  const [showTimeSloteDetails, setshowTimeSloteDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching timezones and timeslots");
      let fetchedTimezones = await fetchTimezones()
      let fetchedTimeslots = await fetchTimeslots()
      setTimezones(fetchedTimezones);
      setTimeslots(fetchedTimeslots);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white w-full max-w-xl rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Timezone & Timeslot Management
        </h1>

        {loading ?
          <PageLoading /> : <TimezoneDropdown
            timezones={timezones}
            selected={selectedTimezone}
            onChange={(tz) => {
              setSelectedTimezone(tz);
              setSelectedTimeslot(null);
            }}
          />
        }

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
