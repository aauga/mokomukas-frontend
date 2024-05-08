import { UserTaskElement } from "../../types/user-task-element";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useUserTaskElements = (userTaskId: number, enabled?: boolean) => {
  return useQuery<UserTaskElement[]>({
    queryKey: ["user-task-elements", userTaskId],
    queryFn: async () =>
      (
        await axiosInstance.get(
          `/user_task_elements?user_task_id=${userTaskId}`
        )
      ).data,
    enabled,
  });
};
