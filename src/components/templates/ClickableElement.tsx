import { TemplateContext } from "../../contexts/TemplateContext";
import getClassName from "../../utils/getClassName";
import { useContext } from "react";

export interface ClickableElementProps {
  taskElementId: number;
  children: React.ReactNode;
}

export default function ClickableElement({
  taskElementId,
  children,
}: ClickableElementProps) {
  const { userTaskElements, setSelectedUserTaskElementId } =
    useContext(TemplateContext)!;
  const userTaskElement = userTaskElements.find(
    (ute) => ute.task_element_id === taskElementId
  );

  return (
    <div
      className={getClassName(taskElementId, userTaskElements)}
      onClick={onClick}
    >
      {children}
    </div>
  );

  function onClick() {
    if (userTaskElement?.clicked) {
      return;
    }

    setSelectedUserTaskElementId(userTaskElement!.id);
  }
}
