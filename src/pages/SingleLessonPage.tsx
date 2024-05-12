import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { ColorfulLoadingButton } from "../components/common/ColorfulLoadingButton";
import { Palette } from "../config/palette";
import { useLesson } from "../api/lessons/api";

export default function SingleLessonPage() {
  const { lessonId } = useParams();
  const lesson = useLesson(parseInt(lessonId!));
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <Row>
        <Col lg={8}>
          <Stack
            gap={4}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h2>{lesson.data?.name}</h2>

            <div>
              <h6>Pamokos aprašymas</h6>
              <p>{lesson.data?.description || "Nėra aprašymo"}</p>
            </div>

            <div>
              <h6>Naudojimosi instrukcijos</h6>
              <p>
                Ar perskaitėte naudojimosi instrukcijas? Jei užduotis atliksite
                pirmą kartą, rekomenduojame perskaityti instrukcijas, kad geriau
                suprastumėte sistemos funkcionalumus.
              </p>
              <ColorfulLoadingButton
                color={Palette.money}
                onClick={() => navigate("/instructions")}
              >
                Ne, neperskaičiau. Skaityti instrukcijas
              </ColorfulLoadingButton>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <ColorfulLoadingButton
            color={Palette.primary}
            onClick={() => navigate(`/lessons/${lessonId}`)}
            className="w-100"
          >
            Pereiti prie užduočių
          </ColorfulLoadingButton>
        </Col>
      </Row>
    </Container>
  );
}
