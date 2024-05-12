import { BsFillHeartFill, BsPiggyBankFill } from "react-icons/bs";

import BootstrapNavbar from "react-bootstrap/Navbar";
import { BsLightningFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import LogoutLink from "./LogoutLink";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Palette } from "../../config/palette";
import ResourceBox from "./ResourceBox";
import { Stack } from "react-bootstrap";
import { useAuthenticatedUser } from "../../api/sessions/api";

export function Navbar() {
  const { data: user, isSuccess } = useAuthenticatedUser();
  const loggedIn = user && isSuccess;

  return (
    <BootstrapNavbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#1DB0F6" }}
    >
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

          {loggedIn ? (
            <Nav className="ms-auto">
              <Stack direction="horizontal" gap={2}>
                <ResourceBox backgroundColor={Palette.health}>
                  <BsFillHeartFill size={13} />
                  {user.health ?? 0}
                </ResourceBox>
                <ResourceBox backgroundColor={Palette.level}>
                  <BsLightningFill size={13} />
                  {user.level ?? 0}
                </ResourceBox>
                <ResourceBox backgroundColor={Palette.money}>
                  <BsPiggyBankFill size={13} />
                  {user.money ?? 0}
                </ResourceBox>
              </Stack>
            </Nav>
          ) : (
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
