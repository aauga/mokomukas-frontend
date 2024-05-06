import { Container, Spinner } from "react-bootstrap";

import WelcomeText from "../components/lessons/WelcomeText";
import { useAuthenticatedUser } from "../api/sessions/api";

export default function LessonsPage() {
  const { data: user, isLoading: userLoading } = useAuthenticatedUser();

  if (userLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      {user && (
        <WelcomeText style={{ marginTop: 30 }} username={user?.username} />
      )}
    </Container>
  );
}
