import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";

import ClickableElement from "../components/templates/ClickableElement";

const Palette = { primary: "#FF6600", white: "#FFFFFF" };

export default function TestTemplate() {
  return (
    <>
      <Navbar />
      <Container>
        <h2 className="my-3">Dėmesio!</h2>
        <ClickableElement taskElementId={1}>
          Jūsų siunta pateko į siuntų skyrių.
        </ClickableElement>
      </Container>
    </>
  );
}

function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      style={{ backgroundColor: Palette.primary, color: Palette.white }}
    >
      <Container>
        <BootstrapNavbar.Brand>Omniva</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  );
}
