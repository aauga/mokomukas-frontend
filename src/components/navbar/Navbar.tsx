import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LogoutLink from "./LogoutLink";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useAuthenticatedUser } from "../../api/sessions/api";

export function Navbar() {
  const user = useAuthenticatedUser();

  const loggedIn = user.isSuccess;

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          Mokomukas
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              Pamokos
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/instructions"}>
              Naudojimosi instrukcijos
            </Nav.Link>
            {loggedIn && <LogoutLink />}
          </Nav>

          {!loggedIn && (
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to={"/login"}>
                Prisijungti
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/signup"}>
                Registruotis
              </Nav.Link>
            </Nav>
          )}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
