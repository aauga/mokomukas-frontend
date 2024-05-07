import { useMutation, useQuery } from "@tanstack/react-query";

import { UserLesson } from "../../types/user-lesson";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserLesson = (lessonId: number) => {
  return useQuery<UserLesson>({
    queryFn: async () =>
      (await axiosInstance.get(`/user_lessons?lesson_id=${lessonId}`)).data,
    queryKey: ["user_lessons"],
  });
};

export const useUserLessonSync = (lessonId: number) => {
  return useQuery<UserLesson>({
    queryFn: () => axiosInstance.get(`/user_lessons?lesson_id=${lessonId}`),
    queryKey: ["user_lessons"],
  });
};

export const useCreateUserLesson = (lessonId: number) => {
  const requestBody = { userLesson: { lessonId: lessonId } };

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.post("/user_lessons", requestBody)).data,
    mutationKey: ["user_lessons"],
  });
};
