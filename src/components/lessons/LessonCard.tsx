import { Card } from "react-bootstrap";
import { Lesson } from "../../types/lesson";
import { LoadingButton } from "../common/LoadingButton";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useCreateUserLesson } from "../../api/user-lessons/api";
import { useNavigate } from "react-router-dom";

export enum LessonStatus {
  AVAILABLE = "available",
  STARTED = "started",
  FINISHED = "finished",
}

export interface LessonCardProps {
  lesson: Lesson;
  status: LessonStatus;
}

const BUTTON_TEXT_START = "Pradėti pamoką";
const BUTTON_TEXT_CONTINUE = "Tęsti pamoką";
const BUTTON_TEST_FINISHED = "Pamoka užbaigta";

export default function LessonCard({ lesson, status }: LessonCardProps) {
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
          disabled={!user || status === LessonStatus.FINISHED}
        >
          {getButtonText()}
        </LoadingButton>
      </Card.Body>
    </Card>
  );

  function getButtonText() {
    switch (status) {
      case LessonStatus.AVAILABLE:
        return BUTTON_TEXT_START;
      case LessonStatus.STARTED:
        return BUTTON_TEXT_CONTINUE;
      case LessonStatus.FINISHED:
        return BUTTON_TEST_FINISHED;
    }
  }

  function onClick() {
    const path = `/lessons/${lesson.id}`;

    if (status === LessonStatus.STARTED) {
      return navigate(path);
    }

    createUserLesson.mutate(undefined, {
      onSuccess: () => navigate(path),
    });
  }
}
