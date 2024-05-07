import { Card } from "react-bootstrap";
import { Lesson } from "../../types/lesson";
import { LoadingButton } from "../common/LoadingButton";
import { useCreateUserLesson } from "../../api/user-lessons/api";

export default function LessonCard(lesson: Lesson) {
  const createUserLesson = useCreateUserLesson(lesson.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{lesson.name}</Card.Title>
        <Card.Text>{lesson.description || "Nėra aprašymo"}</Card.Text>
        <LoadingButton
          variant="primary"
          className="w-100"
          loading={createUserLesson.isPending}
          onClick={() => createUserLesson.mutate()}
        >
          Pradėti
        </LoadingButton>
      </Card.Body>
    </Card>
  );
}
