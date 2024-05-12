import { Leaderboard } from "./types";
import { axiosInstance } from "../../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useLeaderboard = () => {
  return useQuery<Leaderboard>({
    queryFn: async () => (await axiosInstance.get("/users/leaderboard")).data,
    queryKey: ["users", "leaderboard"],
  });
};
