import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { UserHint } from "../../types/user-hint";
import { axiosInstance } from "../../config/axiosInstance";

export const useBoughtHints = (userTaskId: number) => {
  return useQuery<UserHint[]>({
    queryKey: ["user-hints"],
    queryFn: async () =>
      (await axiosInstance.get(`/user_tasks/${userTaskId}/hints`)).data,
  });
};

export const useBoughtHintDescriptions = (userTaskId: number) => {
  return useQuery<string[]>({
    queryKey: ["user-hints", "descriptions"],
    queryFn: async () =>
      (await axiosInstance.get(`/user_tasks/${userTaskId}/hints/descriptions`))
        .data,
  });
};

export const useBuyHint = (userHintId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      (await axiosInstance.post(`/user_hints/${userHintId}/buy`)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-hints"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
