import { TaskElement } from "../../types/task-element";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useTaskElements = (taskId: number, enabled?: boolean) => {
  return useQuery<TaskElement[]>({
    queryKey: ["task-elements", taskId],
    queryFn: async () =>
      (await axiosInstance.get(`/tasks/${taskId}/task_elements`)).data,
    enabled,
  });
};
