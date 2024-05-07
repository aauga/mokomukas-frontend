import { axiosInstance } from "../../config/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserLesson = (lesson_id: number) => {
  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.post(`/user_lessons/${lesson_id}`)).data,
    mutationKey: ["user_lessons"],
  });
};
