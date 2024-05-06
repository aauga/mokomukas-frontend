import { Alert, Button, Container, Form } from "react-bootstrap";

import getErrorMessage from "../utils/getErrorMessage";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../api/signup/api";

export default function SignupPage() {
  const signup = useSignup();
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="my-4">Registracija</h1>

      {signup.isError && (
        <Alert variant="danger">{getErrorMessage(signup.error)}</Alert>
      )}

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Slapyvardis:</Form.Label>
          <Form.Control type="text" name="username" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Slaptažodis:</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registruotis
        </Button>
      </Form>
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
