import { Task } from "../../types/task";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useTask = (taskId: number, enabled?: boolean) => {
  return useQuery<Task>({
    queryFn: async () => (await axiosInstance.get(`/tasks/${taskId}`)).data,
    queryKey: ["tasks", taskId],
    enabled: enabled,
  });
};
