import { ColorfulLoadingButton } from "../common/ColorfulLoadingButton";
import { Form } from "react-bootstrap";
import { Palette } from "../../config/palette";

interface LoginFormProps {
  loading?: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SignupForm({
  loading = false,
  onSubmit,
}: LoginFormProps) {
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
      <ColorfulLoadingButton
        color={Palette.primary}
        type="submit"
        loading={loading}
      >
        Prisijungti
      </ColorfulLoadingButton>
    </Form>
  );
}
