import { Card } from "react-bootstrap";
import { Lesson } from "../../types/lesson";
import { LoadingButton } from "../common/LoadingButton";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useCreateUserLesson } from "../../api/user-lessons/api";
import { useNavigate } from "react-router-dom";

export default function LessonCard(lesson: Lesson) {
  const { user } = useContext(UserContext) || {};
  const navigate = useNavigate();
  const createUserLesson = useCreateUserLesson(lesson.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{lesson.name}</Card.Title>
        <Card.Text>{lesson.description || "Nėra aprašymo"}</Card.Text>
        <LoadingButton
          className="w-100"
          loading={createUserLesson.isPending}
          onClick={onClick}
          disabled={!user}
        >
          Pradėti pamoką
        </LoadingButton>
      </Card.Body>
    </Card>
  );

  function onClick() {
    createUserLesson.mutate(undefined, {
      onSuccess: () => navigate(`/lessons/${lesson.id}`),
    });
  }
}
