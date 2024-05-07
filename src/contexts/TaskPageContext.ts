import { createContext } from "react";

export type TaskPageContextType = {
  taskId: number;
};

export const TaskPageContext = createContext<TaskPageContextType | undefined>(
  undefined
);
