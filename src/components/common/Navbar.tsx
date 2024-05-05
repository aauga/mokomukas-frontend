import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

type NavbarProps = {
  userLoggedIn: boolean;
};

export function Navbar(props: NavbarProps) {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand href="#home">Mokomukas</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Pamokos</Nav.Link>
            <Nav.Link href="#link">Naudojimosi instrukcijos</Nav.Link>
            {props.userLoggedIn && <Nav.Link href="#link">Atsijungti</Nav.Link>}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
