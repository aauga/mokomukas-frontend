import { Col, Container, Row, Spinner } from "react-bootstrap";

import { Lesson } from "../types/lesson";
import LessonCard from "../components/lessons/LessonCard";
import WelcomeText from "../components/lessons/WelcomeText";
import { useAuthenticatedUser } from "../api/sessions/api";
import { useLessons } from "../api/lessons/api";

export default function LessonsPage() {
  const { data: user, isLoading: userLoading } = useAuthenticatedUser();
  const { data: lessons, isLoading: lessonsLoading } = useLessons();

  if (userLoading || lessonsLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      {user && <WelcomeText className="mt-4" username={user?.username} />}

      <div className="mt-4">
        <h2>Pamokų sąrašas</h2>

        <LessonsRow lessons={lessons ?? []} />
      </div>
    </Container>
  );

  function LessonsRow({ lessons }: { lessons: Lesson[] }) {
    if (lessons.length === 0) {
      return <p>Nėra pamokų</p>;
    }

    return (
      <Row className="mt-3">
        {lessons.map((lesson) => (
          <Col key={lesson.id} lg={6} xl={4} className="mb-3">
            <LessonCard {...lesson} />
          </Col>
        ))}
      </Row>
    );
  }
}
