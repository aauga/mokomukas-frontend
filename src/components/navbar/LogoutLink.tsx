import { Nav } from "react-bootstrap";
import { useLogout } from "../../api/sessions/api";

export default function LogoutLink() {
  const logout = useLogout();

  return <Nav.Link onClick={onClick}>Atsijungti</Nav.Link>;

  function onClick() {
    logout.mutate();
  }
}
