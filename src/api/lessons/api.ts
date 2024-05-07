import { Lesson } from "../../types/lesson";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export function useLessons() {
  return useQuery<Lesson[]>({
    queryFn: async () => (await axiosInstance.get("/lessons")).data,
    queryKey: ["lessons"],
  });
}
