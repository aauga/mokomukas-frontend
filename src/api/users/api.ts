import { Leaderboard, ResourceType } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { axiosInstance } from "../../config/axiosInstance";

export const useLeaderboard = () => {
  return useQuery<Leaderboard>({
    queryFn: async () => (await axiosInstance.get("/users/leaderboard")).data,
    queryKey: ["users", "leaderboard"],
  });
};

export const useBuyResources = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (resourceType: ResourceType) =>
      (
        await axiosInstance.post(`/users/${userId}/buy_resources`, {
          resource_type: resourceType,
        })
      ).data,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
