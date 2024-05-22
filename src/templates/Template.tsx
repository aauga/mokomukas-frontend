import "./templates.css";

import {
  TemplateContext,
  TemplateContextType,
} from "../contexts/TemplateContext";

import DpdTemplate from "./DpdTemplate";
import FacebookTemplate from "./FacebookTemplate";
import LuminorTemplate from "./LuminorTemplate";
import { Palette } from "../config/palette";
import { Spinner } from "react-bootstrap";
import { TaskPageContext } from "../contexts/TaskPageContext";
import { UserTaskStatus } from "../types/user-task";
import { useContext } from "react";
import { useTaskElements } from "../api/task-elements/api";
import { useUserTaskElements } from "../api/user-task-elements/api";
import { useUserTasks } from "../api/user-tasks/api";

type TemplateProps = {
  templateName: string;
};

const templates = new Map<string, JSX.Element>([
  ["luminor_template", <LuminorTemplate />],
  ["dpd_template", <DpdTemplate />],
  ["facebook_template", <FacebookTemplate />],
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
  };

  return (
    <TemplateContext.Provider value={contextValues}>
      <div
        style={{
          borderColor: Palette.gray,
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        {templates.get(props.templateName)}
      </div>
    </TemplateContext.Provider>
  );
}
