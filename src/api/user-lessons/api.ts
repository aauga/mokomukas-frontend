import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserLesson } from "../../types/user-lesson";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserLesson = (lessonId: number) => {
  return useQuery<UserLesson>({
    queryFn: async () =>
      (await axiosInstance.get(`/user_lessons?lesson_id=${lessonId}`)).data,
    queryKey: ["user-lessons", lessonId],
  });
};

export const useCreateUserLesson = (lessonId: number) => {
  const queryClient = useQueryClient();
  const requestBody = { user_lesson: { lesson_id: lessonId } };

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.post("/user_lessons", requestBody)).data,
    mutationKey: ["user-lessons", lessonId],
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["user-lessons"] }),
  });
};
