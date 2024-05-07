import { Col, Container, Row, Spinner } from "react-bootstrap";

import ErrorPage from "./ErrorPage";
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
    <Container style={{ marginTop: "20px" }}>
      <h1>Learning page</h1>

      <Row className="gap-5">
        <Col>
          <Template templateName="test_template" />
        </Col>
        <Col lg={4} style={{ backgroundColor: "cyan" }}>
          <div>2 of 2</div>
        </Col>
      </Row>
    </Container>
  );
}
