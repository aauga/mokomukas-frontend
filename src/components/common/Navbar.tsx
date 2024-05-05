import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

type NavbarProps = {
  userLoggedIn: boolean;
};

export function Navbar(props: NavbarProps) {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          Mokomukas
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              Pamokos
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/instructions"}>
              Naudojimosi instrukcijos
            </Nav.Link>
            {props.userLoggedIn && <Nav.Link>Atsijungti</Nav.Link>}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
