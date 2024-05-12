import { ColorfulLoadingButton } from "../components/common/ColorfulLoadingButton";
import { Container } from "react-bootstrap";
import { Palette } from "../config/palette";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="my-4">
        <h2>Įvyko klaida</h2>
        <p>Šis puslapis neegzistuoja. Sugrįžkite į pagrindinį langą.</p>
        <ColorfulLoadingButton
          color={Palette.primary}
          onClick={() => navigate("/")}
        >
          Grįžti į pagrindinį langą
        </ColorfulLoadingButton>
      </div>
    </Container>
  );
}
