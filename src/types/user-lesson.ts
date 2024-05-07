import { UserTask } from "./user-task";

export enum UserLessonStatus {
  PENDING = "pending",
  FINISHED = "finished",
}

export type UserLesson = {
  id: number;
  status: UserLessonStatus;
  created_at: Date;
  pending_user_tasks: UserTask[];
};
