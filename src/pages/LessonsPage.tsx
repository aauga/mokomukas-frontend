import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import LessonCard, { LessonStatus } from "../components/lessons/LessonCard";

import { AvailableLessons } from "../api/lessons/types";
import LeaderboardBox from "../components/lessons/LeaderboardBox";
import { Lesson } from "../types/lesson";
import ShopBox from "../components/lessons/ShopBox";
import WelcomeText from "../components/lessons/WelcomeText";
import { useAuthenticatedUser } from "../api/sessions/api";
import { useAvailableLessons } from "../api/lessons/api";

export default function LessonsPage() {
  const { data: user, isLoading: userLoading } = useAuthenticatedUser();
  const { data: lessons, isLoading: lessonsLoading } = useAvailableLessons();

  if (userLoading || lessonsLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      {user && <WelcomeText className="mt-4" username={user?.username} />}

      <Row className="mt-4">
        <Col lg={8}>
          <div
            className="mb-4"
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h3>📚 Pamokų sąrašas</h3>

            <LessonsRow lessons={lessons ?? {}} />
          </div>
        </Col>
        <Col lg={4}>
          <Stack direction="vertical" gap={4}>
            {user && <ShopBox />}
            <LeaderboardBox />
          </Stack>
        </Col>
      </Row>
    </Container>
  );

  function LessonsRow({ lessons }: { lessons: AvailableLessons }) {
    if (lessonCount(lessons) === 0) {
      return <p>Nėra pamokų</p>;
    }

    const available = lessons.available ?? [];
    const started = lessons.started ?? [];
    const finished = lessons.finished ?? [];

    return (
      <Row className="mt-3">
        {mapLessons(available, LessonStatus.AVAILABLE)}
        {mapLessons(started, LessonStatus.STARTED)}
        {mapLessons(finished, LessonStatus.FINISHED)}
      </Row>
    );
  }

  function lessonCount(lessons: AvailableLessons) {
    return (
      (lessons.available?.length ?? 0) +
      (lessons.started?.length ?? 0) +
      (lessons.finished?.length ?? 0)
    );
  }

  function mapLessons(lessons: Lesson[], status: LessonStatus) {
    return lessons.map((lesson) => (
      <Col key={lesson.id} lg={6} className="mb-3">
        <LessonCard lesson={lesson} status={status} />
      </Col>
    ));
  }
}
