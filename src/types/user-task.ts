export enum UserTaskStatus {
  Pending = "pending",
  Finished = "finished",
}

export type UserTask = {
  id: number;
  task_id: number;
  status: string;
};

export type UserTaskStatistics = {
  current_task: number;
  total_tasks: number;
  start_date: string;
  total_correct_elements: number;
  correctly_clicked_elements: number;
  earned_money: number;
  earned_experience_points: number;
};
