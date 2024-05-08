export enum UserTaskStatus {
  Pending = "pending",
  Finished = "finished",
}

export type UserTask = {
  id: number;
  task_id: number;
  status: string;
};
