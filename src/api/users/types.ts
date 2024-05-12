import { User } from "../../types/user";

export type Leaderboard = {
  personal_standing?: number;
  streak?: number;
  leaderboard: User[];
};
