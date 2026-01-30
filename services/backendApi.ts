import { Timezone, Timeslot } from "@/types";
import axios from "axios";

let api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})
export const fetchTimezones = async (): Promise<Timezone[]> => {
  try {
    const response = await api.get<Timezone[]>("/timezones");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Could not load timezones.");
    }
    throw new Error("An unexpected error occurred while fetching timezones.");
  }
};

export const fetchTimeslots = async (): Promise<Timeslot[]> => {
  try {
    const response = await api.get<Timeslot[]>("/timeslots");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Could not load timeslots.");
    }
    throw new Error("An unexpected error occurred while fetching timeslots.");
  }
};