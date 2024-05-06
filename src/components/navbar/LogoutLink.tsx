import { Nav } from "react-bootstrap";
import { useLogout } from "../../api/sessions/api";
import { useNavigate } from "react-router-dom";

export default function LogoutLink() {
  const logout = useLogout();
  const navigate = useNavigate();

  return <Nav.Link onClick={onClick}>Atsijungti</Nav.Link>;

  async function onClick() {
    await logout.mutateAsync();
    navigate("/");
  }
}
