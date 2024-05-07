import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosInstance } from "../../config/axiosInstance";

export const useFinishTask = (taskId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.put(`/user_tasks/${taskId}/finish`)).data,
    mutationKey: ["user-tasks", taskId],
    onSuccess: () => queryClient.refetchQueries(),
  });
};
