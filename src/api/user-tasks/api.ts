import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserTask } from "../../types/user-task";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserTasks = (userLessonId: number) => {
  return useQuery<UserTask[]>({
    queryKey: ["user-lessons", userLessonId],
    queryFn: async () =>
      (await axiosInstance.get(`/user_lessons/${userLessonId}/tasks`)).data,
  });
};

export const useFinishTask = (userTaskId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.put(`/user_tasks/${userTaskId}/finish`)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-lessons"],
      });
    },
  });
};
