import { Button, Form } from "react-bootstrap";

interface SignupFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SignupForm({ onSubmit }: SignupFormProps) {
  return (
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
  );
}
