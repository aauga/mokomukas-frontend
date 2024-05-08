import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserTaskElement } from "../../types/user-task-element";
import { axiosInstance } from "../../config/axiosInstance";

export const useUserTaskElements = (userTaskId: number, enabled?: boolean) => {
  return useQuery<UserTaskElement[]>({
    queryKey: ["user-tasks", userTaskId],
    queryFn: async () =>
      (await axiosInstance.get(`/user_tasks/${userTaskId}/elements`)).data,
    enabled,
  });
};

export const useMarkUserTaskElement = (userTaskElementId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (
        await axiosInstance.put(
          `/user_task_elements/${userTaskElementId}/click`
        )
      ).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-tasks"],
      });
    },
  });
};
