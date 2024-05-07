import { createContext } from "react";

export type TaskPageContextType = {
  taskId: number;
  isLastTask?: boolean;
};

export const TaskPageContext = createContext<TaskPageContextType | undefined>(
  undefined
);
