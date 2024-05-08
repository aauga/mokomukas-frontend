import { createContext } from "react";

export type TaskPageContextType = {
  userLessonId: number;
  taskId: number;
  isLastTask?: boolean;
};

export const TaskPageContext = createContext<TaskPageContextType | undefined>(
  undefined
);
