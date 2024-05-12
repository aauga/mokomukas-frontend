import { AvailableLessons } from "./types";
import { Lesson } from "../../types/lesson";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export function useAvailableLessons() {
  return useQuery<AvailableLessons>({
    queryFn: async () => (await axiosInstance.get("/lessons/available")).data,
    queryKey: ["lessons"],
  });
}

export function useLesson(lessonId: number) {
  return useQuery<Lesson>({
    queryFn: async () => (await axiosInstance.get(`/lessons/${lessonId}`)).data,
    queryKey: ["lessons", lessonId],
  });
}
