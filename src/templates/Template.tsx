import "./templates.css";

import {
  TemplateContext,
  TemplateContextType,
} from "../contexts/TemplateContext";
import { useContext, useState } from "react";

import ConfirmClickModal from "../components/templates/ConfirmClickModal";
import { Palette } from "../config/palette";
import { Spinner } from "react-bootstrap";
import { TaskPageContext } from "../contexts/TaskPageContext";
import TestTemplate from "./TestTemplate";
import { UserTaskStatus } from "../types/user-task";
import { useTaskElements } from "../api/task-elements/api";
import { useUserTaskElements } from "../api/user-task-elements/api";
import { useUserTasks } from "../api/user-tasks/api";

type TemplateProps = {
  templateName: string;
};

const templates = new Map<string, JSX.Element>([
  ["test_template", <TestTemplate />],
  ["test_template_2", <h1>asdf</h1>],
]);

export default function Template(props: TemplateProps) {
  const { userLessonId, taskId } = useContext(TaskPageContext) || {};

  const userTasks = useUserTasks(userLessonId!);
  const currentUserTask = userTasks.data?.find(
    (ut) => ut.status === UserTaskStatus.Pending
  );

  const taskElements = useTaskElements(taskId ?? -1);
  const userTaskElements = useUserTaskElements(
    currentUserTask?.id ?? -1,
    userTasks.isSuccess
  );

  const [selectedUserTaskElementId, setSelectedUserTaskElementId] =
    useState<number>();

  if (
    userTasks.isLoading ||
    userTaskElements.isLoading ||
    taskElements.isLoading
  ) {
    return <Spinner />;
  }

  const contextValues: TemplateContextType = {
    taskElements: taskElements.data!,
    userTaskElements: userTaskElements.data!,
    selectedUserTaskElementId,
    setSelectedUserTaskElementId,
  };

  return (
    <TemplateContext.Provider value={contextValues}>
      <ConfirmClickModal />
      <div
        style={{
          borderColor: Palette.lightgray,
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        {templates.get(props.templateName)}
      </div>
    </TemplateContext.Provider>
  );
}
