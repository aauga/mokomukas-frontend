import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserLesson } from "../../types/user-lesson";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserLesson = (lessonId: number) => {
  return useQuery<UserLesson>({
    queryFn: async () =>
      (await axiosInstance.get(`/lessons/${lessonId}/users`)).data,
    queryKey: ["user-lessons"],
  });
};

export const useCreateUserLesson = (lessonId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.post(`/lessons/${lessonId}/users`)).data,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["user-lessons"],
      }),
  });
};
