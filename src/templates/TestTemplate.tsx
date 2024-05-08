import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";

import { TemplateContext } from "../contexts/TemplateContext";
import getClassName from "../utils/getClassName";
import { useContext } from "react";

const Palette = { primary: "#FF6600", white: "#FFFFFF" };

export default function TestTemplate() {
  const { userTaskElements } = useContext(TemplateContext)!;

  return (
    <>
      <Navbar />
      <Container>
        <h2 className="my-3">Dėmesio!</h2>
        <p className={getClassName(1, userTaskElements)}>
          Jūsų siunta pateko į siuntų skyrių.
        </p>
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
