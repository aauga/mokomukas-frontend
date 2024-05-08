import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserTask } from "../../types/user-task";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserTasks = (userLessonId: number) => {
  return useQuery<UserTask[]>({
    queryKey: ["user-tasks", userLessonId],
    queryFn: async () =>
      (await axiosInstance.get(`/user_tasks?user_lesson_id=${userLessonId}`))
        .data,
  });
};

export const useFinishTask = (taskId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.put(`/user_tasks/${taskId}/finish`)).data,
    mutationKey: ["user-tasks", taskId],
    onSuccess: () => queryClient.refetchQueries(),
  });
};
