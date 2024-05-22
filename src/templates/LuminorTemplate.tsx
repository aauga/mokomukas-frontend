import { Button, Container, Image, Navbar } from "react-bootstrap";

import ClickableElement from "../components/templates/ClickableElement";

const PRIMARY_COLOR = "#481335";

export default function LuminorTemplate() {
  return (
    <div>
      <SenderInfo />
      <CustomNavbar />
      <LetterContent />
    </div>
  );
}

function SenderInfo() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3"
      style={{ backgroundColor: "#333333", color: "#ffffff" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#777777",
            borderRadius: "36px",
            fontWeight: 700,
          }}
        >
          A
        </div>
        <div style={{ marginLeft: "16px" }}>
          <ClickableElement taskElementId={1}>
            <p className="m-0">
              Siuntėjas:{" "}
              <span style={{ fontWeight: 700 }}>ashjar@lumin.or.xyz</span>
            </p>
          </ClickableElement>

          <ClickableElement taskElementId={2}>
            <p className="m-0" style={{ fontSize: "20px" }}>
              Luminor: Jūsų paskyrai įvesti apribojimai
            </p>
          </ClickableElement>
        </div>
      </div>

      <p style={{ fontSize: "14px", color: "#999" }}>2024-01-02 22:58</p>
    </div>
  );
}

function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: PRIMARY_COLOR }}>
      <Container>
        <Navbar.Brand>
          <Image
            src="/images/luminor_template/luminor_logo.png"
            alt="Luminor logotipas"
            height="36px"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function LetterContent() {
  return (
    <div style={{ padding: "36px", backgroundColor: "#D9D9D9" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "50px" }}>
        <ClickableElement taskElementId={7}>
          <p>Sveiki, Vardeni Pavardeni,</p>
        </ClickableElement>

        <ClickableElement taskElementId={3}>
          <p>
            Norime pranešti, kad Jūsų paskyra buvo apribota, todėl reikia
            skubaus Jūsų atsakymo.
          </p>
        </ClickableElement>

        <ClickableElement taskElementId={4}>
          <p>
            Pastebejome, kad dalis jusu paskyros informacijos yra netiksli arba
            nepatvirtinta. Noredami tinkamai naudotis musu paslauga, turite
            patikrinti savo informacija. Patikrinkite paskyros informacija
            spusteledami toliau esanti mygtuka.
          </p>
        </ClickableElement>

        <ClickableElement taskElementId={5}>
          <Button
            className="m-2"
            href="http://lumin.or.bankas.xyz/page?id=12345"
            onClick={(event) => event.preventDefault()}
          >
            Paspauskite čia
          </Button>
        </ClickableElement>

        <ClickableElement taskElementId={3}>
          <p>
            Norint išvengti apribojimų, turite užpildyti formą per ateinančias 2
            valandas.
          </p>
        </ClickableElement>

        <ClickableElement taskElementId={6}>
          <p>
            Su pagarba,
            <br />
            Apsaugos komanda
          </p>
        </ClickableElement>
      </div>
    </div>
  );
}
