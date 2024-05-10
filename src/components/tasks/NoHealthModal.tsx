import { Button, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const TITLE = "Neturite pakankamai gyvybių";
const DESCRIPTION =
  "Jūs neturite pakankamai gyvybių, kad pradėti arba pratęsti šią pamoką";
const BUTTON_TEXT = "Grįžti";

export function NoHealthModal(props: any) {
  const navigate = useNavigate();

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{TITLE}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{DESCRIPTION}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>{BUTTON_TEXT}</Button>
      </Modal.Footer>
    </Modal>
  );

  function onClick() {
    navigate("/");
  }
}
