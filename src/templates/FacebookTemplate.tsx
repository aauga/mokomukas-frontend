import { BsBriefcaseFill, BsCakeFill, BsHouseFill } from "react-icons/bs";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

import ClickableElement from "../components/templates/ClickableElement";

export default function FacebookTemplate() {
  return (
    <Container style={{ backgroundColor: "#EAEAEA" }}>
      <Stack direction="vertical" gap={4}>
        <Image
          src="/images/facebook_template/facebook_logo.png"
          alt="Facebook logotipas"
          height="36px"
          width="36px"
          className="mt-3"
        />

        <UserInfo />

        <Row>
          <Col>
            <Stack direction="vertical" gap={4}>
              <PersonalInfo />
              <FriendsList />
            </Stack>
          </Col>
          <Col>
            <Posts />
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

function UserInfo() {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ borderRadius: "16px", backgroundColor: "#fff", padding: "16px" }}
    >
      <Stack direction="horizontal" gap={4}>
        <ClickableElement taskElementId={15}>
          <Image
            src="/images/facebook_template/profile_picture.png"
            alt="Profilio nuotrauka"
          />
        </ClickableElement>
        <Stack direction="vertical" className="justify-content-center">
          <p style={{ fontWeight: 700, fontSize: "20px", margin: 0 }}>
            Kasparas Markučionis
          </p>
          <p>1012 draugai</p>
        </Stack>
      </Stack>

      <ClickableElement taskElementId={20}>
        <Button>Pridėti į draugus</Button>
      </ClickableElement>
    </div>
  );
}

function PersonalInfo() {
  return (
    <Stack
      direction="vertical"
      gap={2}
      style={{ borderRadius: "16px", backgroundColor: "#fff", padding: "16px" }}
    >
      <h4>Asmeninė informacija</h4>

      <ClickableElement taskElementId={17}>
        <Stack gap={2} style={{ color: "#999999" }}>
          <Stack direction="horizontal" gap={2}>
            <BsHouseFill size={18} />
            <span>Gyvenamoji vieta: nenurodyta</span>
          </Stack>

          <Stack direction="horizontal" gap={2}>
            <BsCakeFill size={18} />
            <span>Gimimo data: nenurodyta</span>
          </Stack>

          <Stack direction="horizontal" gap={2}>
            <BsBriefcaseFill size={18} />
            <span>Darbovietė: nenurodyta</span>
          </Stack>
        </Stack>
      </ClickableElement>
    </Stack>
  );
}

function FriendsList() {
  return (
    <div
      style={{ borderRadius: "16px", backgroundColor: "#fff", padding: "16px" }}
    >
      <ClickableElement taskElementId={16}>
        <h4>Draugai (1012)</h4>
        <p style={{ color: "#777" }}>0 bendrų draugų</p>
      </ClickableElement>

      <Row xs={2} sm={3} lg={4}>
        <Col>
          <Friend name="Ahmed B." />
        </Col>
        <Col>
          <Friend name="Michael J." />
        </Col>
        <Col>
          <Friend name="Adomas P." />
        </Col>
        <Col>
          <Friend name="John B." />
        </Col>
        <Col>
          <Friend name="Jin Jao" />
        </Col>
        <Col>
          <Friend name="Park P." />
        </Col>
        <Col>
          <Friend name="Marko B." />
        </Col>
        <Col>
          <Friend name="Tom P." />
        </Col>
      </Row>
    </div>
  );
}

function Friend({ name }: { name: string }) {
  return (
    <Stack gap={2}>
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "#D9D9D9",
          borderRadius: "8px",
        }}
      />
      <p style={{ color: "#777" }}>{name}</p>
    </Stack>
  );
}

function Posts() {
  return (
    <div
      style={{ borderRadius: "16px", backgroundColor: "#fff", padding: "16px" }}
    >
      <h4>Įrašai</h4>

      <Post />
    </div>
  );
}

function Post() {
  return (
    <Stack direction="vertical" gap={1}>
      <Stack direction="horizontal" gap={3}>
        <Image
          src="/images/facebook_template/profile_picture.png"
          alt="Profilio nuotrauka"
          height={36}
        />
        <Stack direction="vertical">
          <p style={{ fontWeight: 700, fontSize: "14px", margin: 0 }}>
            Kasparas Markučionis
          </p>
          <p style={{ fontSize: "12px" }}>2024-04-01</p>
        </Stack>
      </Stack>

      <ClickableElement taskElementId={18}>
        <p style={{ color: "#777" }}>
          Vakar susitikau su turtingiausiu pasaulio žmogumi, ,,Tesla’’ įkūrėju
          Elonu Musku. Kartu pakalbėjome apie tai, kaip padėti žmonėms tapti
          turtingais. Todėl sukūrėme naują startuolį - ,,ElonCoin’’. Paspausk
          šią nuorodą, kad gauti tūkstantį ,,ElonCoin’’, vertų 10 000 eurų:
          http://elon.coin.tk/a5Gh7k
        </p>
      </ClickableElement>

      <ClickableElement taskElementId={19}>
        <p style={{ color: "#777" }}>2 patiktukai, 0 komentarų</p>
      </ClickableElement>
    </Stack>
  );
}
