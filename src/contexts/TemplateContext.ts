import { TaskElement } from "../types/task-element";
import { UserTaskElement } from "../types/user-task-element";
import { createContext } from "react";

export type TemplateContextType = {
  taskElements: TaskElement[];
  userTaskElements: UserTaskElement[];
};

export const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);
