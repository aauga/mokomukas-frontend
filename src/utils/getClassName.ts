import { UserTaskElement } from "../types/user-task-element";

const CLASS_CORRECT = "correct";
const CLASS_INCORRECT = "incorrect";
const CLASS_CLICKABLE = "clickable";

export default function getClassName(
  taskElementId: number,
  userTaskElements: UserTaskElement[]
) {
  const userTaskElement = userTaskElements.find(
    (element) => element.task_element_id === taskElementId
  );

  if (userTaskElement?.clicked && userTaskElement?.clicked_correctly) {
    return CLASS_CORRECT;
  }

  if (userTaskElement?.clicked && !userTaskElement?.clicked_correctly) {
    return CLASS_INCORRECT;
  }

  return CLASS_CLICKABLE;
}
