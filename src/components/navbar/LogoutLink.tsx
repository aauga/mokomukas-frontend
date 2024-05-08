import { Nav } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useLogout } from "../../api/sessions/api";

export default function LogoutLink() {
  const { user } = useContext(UserContext)!;
  const logout = useLogout(user!.id);

  return <Nav.Link onClick={onClick}>Atsijungti</Nav.Link>;

  function onClick() {
    logout.mutate();
  }
}
