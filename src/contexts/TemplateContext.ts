import { TaskElement } from "../types/task-element";
import { UserTaskElement } from "../types/user-task-element";
import { createContext } from "react";

export type TemplateContextType = {
  taskElements: TaskElement[];
  userTaskElements: UserTaskElement[];
  selectedUserTaskElementId?: number;
  setSelectedUserTaskElementId: (id: number | undefined) => void;
};

export const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);
