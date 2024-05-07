import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";

const Palette = { primary: "#FF6600", white: "#FFFFFF" };

export default function TestTemplate() {
  return (
    <>
      <Navbar />
      <Container>
        <h2 className="my-3">Dėmesio!</h2>
        <p className="clickable">Jūsų siunta pateko į siuntų skyrių.</p>
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
