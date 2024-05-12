import { Alert, Container, Stack } from "react-bootstrap";

import LoginForm from "../components/login/LoginForm";
import getErrorMessage from "../utils/getErrorMessage";
import { useLogin } from "../api/sessions/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useLogin();
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
        <h2>Prisijungimas prie sistemos</h2>

        {login.isError && (
          <Alert variant="danger">{getErrorMessage(login.error)}</Alert>
        )}

        <LoginForm onSubmit={onSubmit} />
      </Stack>
    </Container>
  );

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    login.mutate({ username, password }, { onSuccess: () => navigate("/") });
  }
}
