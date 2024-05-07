import { Button, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const TITLE = "Jūs pabaigėte pamoką!";
const DESCRIPTION = "Dabar galite grįžti į pagrindinį langą.";
const BUTTON_TEXT = "Grįžti";

export function FinishedLessonModal(props: any) {
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
