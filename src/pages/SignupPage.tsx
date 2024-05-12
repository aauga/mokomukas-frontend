import { Alert, Container, Stack } from "react-bootstrap";

import SignupForm from "../components/signup/SignupForm";
import getErrorMessage from "../utils/getErrorMessage";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../api/sessions/api";

export default function SignupPage() {
  const signup = useSignup();
  const navigate = useNavigate();

  return (
    <Container>
      <Stack
        gap={3}
        className="my-4"
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        <h2>Registracija</h2>

        {signup.isError && (
          <Alert variant="danger">{getErrorMessage(signup.error)}</Alert>
        )}

        <SignupForm onSubmit={onSubmit} />
      </Stack>
    </Container>
  );

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    signup.mutate({ username, password }, { onSuccess: () => navigate("/") });
  }
}
