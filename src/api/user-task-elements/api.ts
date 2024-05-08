import { UserTaskElement } from "../../types/user-task-element";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useUserTaskElements = (userTaskId: number, enabled?: boolean) => {
  return useQuery<UserTaskElement[]>({
    queryKey: ["user-tasks", userTaskId, "user-task-elements"],
    queryFn: async () =>
      (await axiosInstance.get(`/user_tasks/${userTaskId}/elements`)).data,
    enabled,
  });
};
