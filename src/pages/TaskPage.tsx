import { Col, Container, Row, Spinner } from "react-bootstrap";

import ErrorPage from "./ErrorPage";
import NextTaskButton from "../components/tasks/NextTaskButton";
import { TaskPageContext } from "../contexts/TaskPageContext";
import Template from "../templates/Template";
import { useParams } from "react-router-dom";
import { useTask } from "../api/tasks/api";
import { useUserLesson } from "../api/user-lessons/api";

export default function TaskPage() {
  const { lessonId } = useParams();

  const lessonIdInt = parseInt(lessonId!);
  const userLesson = useUserLesson(lessonIdInt);

  const taskId = userLesson.data?.pending_user_tasks[0].task_id!;
  const task = useTask(taskId, !!taskId);

  if (userLesson.isLoading || task.isLoading) {
    return <Spinner />;
  }

  if (userLesson.isError || task.isError) {
    return <ErrorPage />;
  }

  return (
    <TaskPageContext.Provider value={{ taskId }}>
      <Container style={{ marginTop: "20px" }}>
        <h1>Learning page</h1>

        <Row className="gap-3">
          <Col>
            <Template templateName={task.data?.template_id!} />
          </Col>
          <Col lg={4}>
            <NextTaskButton className="w-100" />
          </Col>
        </Row>
      </Container>
    </TaskPageContext.Provider>
  );
}
