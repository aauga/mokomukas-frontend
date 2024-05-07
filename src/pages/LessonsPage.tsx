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
      {user && <WelcomeText className="mt-4" username={user?.username} />}

      <div className="mt-4">
        <h2>Pamokų sąrašas</h2>
      </div>
    </Container>
  );
}
