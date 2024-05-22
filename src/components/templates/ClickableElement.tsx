import { TemplateContext } from "../../contexts/TemplateContext";
import getClassName from "../../utils/getClassName";
import { useContext } from "react";
import { useMarkUserTaskElement } from "../../api/user-task-elements/api";

export interface ClickableElementProps {
  taskElementId: number;
  children: React.ReactNode;
}

export default function ClickableElement({
  taskElementId,
  children,
}: ClickableElementProps) {
  const { userTaskElements } = useContext(TemplateContext)!;
  const userTaskElement = userTaskElements.find(
    (ute) => ute.task_element_id === taskElementId
  );
  const markElement = useMarkUserTaskElement(userTaskElement!.id);

  return (
    <div
      className={getClassName(taskElementId, userTaskElements)}
      onClick={onClick}
      style={{ width: "fit-content" }}
    >
      {children}
    </div>
  );

  function onClick() {
    if (userTaskElement?.clicked) {
      return;
    }

    markElement.mutate();
  }
}
