import { AvailableLessons } from "./types";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export function useAvailableLessons() {
  return useQuery<AvailableLessons>({
    queryFn: async () => (await axiosInstance.get("/lessons")).data,
    queryKey: ["lessons"],
  });
}
