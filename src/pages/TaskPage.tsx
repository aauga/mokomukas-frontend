import { Col, Container, Row, Spinner } from "react-bootstrap";

import ErrorPage from "./ErrorPage";
import { FinishedLessonModal } from "../components/lessons/FinishedLessonModal";
import TaskChangeButton from "../components/tasks/TaskChangeButton";
import { TaskPageContext } from "../contexts/TaskPageContext";
import Template from "../templates/Template";
import { UserLessonStatus } from "../types/user-lesson";
import { useParams } from "react-router-dom";
import { useTask } from "../api/tasks/api";
import { useUserLesson } from "../api/user-lessons/api";

export default function TaskPage() {
  const { lessonId } = useParams();

  const lessonIdInt = parseInt(lessonId!);
  const userLesson = useUserLesson(lessonIdInt);

  const pendingTasks = userLesson.data?.pending_user_tasks ?? [];
  const isLastTask = pendingTasks.length === 1;

  const taskId = pendingTasks[0]?.task_id ?? 0;
  const task = useTask(taskId, userLesson.isSuccess);

  if (userLesson.isLoading || task.isLoading) {
    return <Spinner />;
  }

  if (userLesson.data?.status === UserLessonStatus.FINISHED) {
    return <FinishedLessonModal show={true} />;
  }

  if (userLesson.isError || task.isError) {
    return <ErrorPage />;
  }

  return (
    <TaskPageContext.Provider value={{ taskId, isLastTask }}>
      <Container style={{ marginTop: "20px" }}>
        <h1>Learning page</h1>

        <Row className="gap-3">
          <Col>
            <Template templateName={task.data?.template_id!} />
          </Col>
          <Col lg={4}>
            <TaskChangeButton className="w-100" />
          </Col>
        </Row>
      </Container>
    </TaskPageContext.Provider>
  );
}
