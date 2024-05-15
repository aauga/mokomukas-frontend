import {
  Button,
  Container,
  Form,
  Image,
  Modal,
  Nav,
  Navbar,
  Stack,
  Table,
} from "react-bootstrap";

import { BsLockFill } from "react-icons/bs";
import ClickableElement from "../components/templates/ClickableElement";
import styled from "styled-components";
import { useState } from "react";

const PRIMARY_COLOR = "#DC0132";

const StyledFormControl = styled(Form.Control)`
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

export default function DpdTemplate() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal && (
        <ScammyModal show={showModal} handleClose={() => setShowModal(false)} />
      )}
      <Header />
      <CustomNavbar />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <Stack
      style={{
        backgroundColor: "#F6F6F6",
        padding: "16px",
      }}
    >
      <Stack
        className="mx-auto"
        direction="horizontal"
        gap={2}
        style={{
          backgroundColor: "#E2E2E2",
          borderRadius: "16px",
          padding: "8px",
          width: "fit-content",
        }}
      >
        <ClickableElement taskElementId={8}>
          <div style={{ position: "relative" }}>
            <BsLockFill size={18} />
            <div
              style={{
                position: "absolute",
                top: "75%",
                left: "35%",
                transform: "translate(-50%, -50%)",
                rotate: "45deg",
                width: "100%",
                height: "2px",
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </ClickableElement>
        <ClickableElement taskElementId={9}>
          <span>esiunta-dpdlt.it/page?id=1234</span>
        </ClickableElement>
      </Stack>
    </Stack>
  );
}

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <Container>
        <Navbar.Brand>
          <Image
            src="/images/dpd_template/dpd_logo.png"
            alt="DPD logotipas"
            height="36px"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Pagrindinis</Nav.Link>
          <Nav.Link>Gauti lėšų</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Content() {
  return (
    <Container style={{ backgroundColor: "#EBEBEB", padding: "16px" }}>
      <ClickableElement taskElementId={10}>
        <p style={{ fontSize: "20px", margin: 0 }}>
          Išvykimo numeris: 12339784
        </p>
      </ClickableElement>
      <ClickableElement taskElementId={11}>
        <p style={{ fontSize: "20px", margin: 0 }}>
          Pristatymo būsena: laukia apmokėjimo
        </p>
      </ClickableElement>
      <hr />
      <ClickableElement taskElementId={12}>
        <p>
          Norint apmokėti siuntą, suveskite mokėjimo kortelės duomenis žemiau
        </p>
        <CreditCardForm />
      </ClickableElement>
      <hr />
      <ClickableElement taskElementId={13}>
        <h4>Pirkėjo duomenys</h4>
      </ClickableElement>
      <SellerDetailsTable />
    </Container>
  );
}

function CreditCardForm() {
  return (
    <Form style={{ maxWidth: "500px" }}>
      <StyledFormControl type="text" placeholder="Jusu vardas, pavarde" />
      <StyledFormControl type="text" placeholder="Kortelės numeris" />
      <StyledFormControl type="text" placeholder="Galiojimo data MM/YY" />
      <StyledFormControl type="text" placeholder="CVV" />

      <Button variant="danger" className="w-100">
        Moketi
      </Button>
    </Form>
  );
}

function SellerDetailsTable() {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>
            <span style={{ fontWeight: 700 }}>Siuntėjas</span>
          </td>
          <td>Tomas Kaulevičius</td>
        </tr>
        <tr>
          <td>
            <span style={{ fontWeight: 700 }}>Produktas</span>
          </td>
          <td>Parduodu du naudotus fotelius, sofą ir stalą</td>
        </tr>
        <tr>
          <td>
            <span style={{ fontWeight: 700 }}>Kaina</span>
          </td>
          <td>180 EUR</td>
        </tr>
        <tr>
          <td>
            <span style={{ fontWeight: 700 }}>Išvykimo numeris</span>
          </td>
          <td>12339784</td>
        </tr>
      </tbody>
    </Table>
  );
}

function ScammyModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "absolute",
        top: "25%",
        left: "-12%",
      }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sveikiname!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Jus laimejote 1000 EUR priza. Atsiimkite dabar!</p>
        </Modal.Body>

        <Modal.Footer>
          <ClickableElement taskElementId={14}>
            <Button variant="primary" onClick={handleClose}>
              Atsiimti
            </Button>
          </ClickableElement>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
