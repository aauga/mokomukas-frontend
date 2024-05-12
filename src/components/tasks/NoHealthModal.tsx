import { ColorfulLoadingButton } from "../common/ColorfulLoadingButton";
import { Palette } from "../../config/palette";
import { StyledModal } from "../common/StyledModal";
import { useNavigate } from "react-router-dom";

const TITLE = "Neturite pakankamai gyvybių";
const DESCRIPTION =
  "Jūs neturite pakankamai gyvybių, kad pradėti arba pratęsti šią pamoką";
const BUTTON_TEXT = "Grįžti";

export function NoHealthModal(props: any) {
  const navigate = useNavigate();

  return (
    <StyledModal {...props} centered>
      <StyledModal.Header>
        <StyledModal.Title>{TITLE}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>{DESCRIPTION}</StyledModal.Body>
      <StyledModal.Footer>
        <ColorfulLoadingButton
          color={Palette.primary}
          onClick={onClick}
          className="w-100"
        >
          {BUTTON_TEXT}
        </ColorfulLoadingButton>
      </StyledModal.Footer>
    </StyledModal>
  );

  function onClick() {
    navigate("/");
  }
}
