import { UserTask } from "./user-task";

export type UserLesson = {
  id: number;
  status: string;
  created_at: Date;
  pending_user_tasks: UserTask[];
};
