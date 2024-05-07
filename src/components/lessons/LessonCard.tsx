import { Button, Card } from "react-bootstrap";

import { Lesson } from "../../types/lesson";

export default function LessonCard(lesson: Lesson) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{lesson.name}</Card.Title>
        <Card.Text>{lesson.description || "Nėra aprašymo"}</Card.Text>
        <Button variant="primary" className="w-100">
          Pradėti
        </Button>
      </Card.Body>
    </Card>
  );
}
