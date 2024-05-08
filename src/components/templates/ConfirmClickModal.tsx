import { Button, Modal } from "react-bootstrap";

import { LoadingButton } from "../common/LoadingButton";
import { TemplateContext } from "../../contexts/TemplateContext";
import { useContext } from "react";
import { useMarkUserTaskElement } from "../../api/user-task-elements/api";

const TITLE = "Pažymėti vietą kenksminga?";
const DESCRIPTION = "Klaidos atveju prarasite vieną gyvybę.";

const BUTTON_CANCEL = "Atšaukti";
const BUTTON_MARK = "Pažymėti";

export default function ConfirmClickModal() {
  const { selectedUserTaskElementId, setSelectedUserTaskElementId } =
    useContext(TemplateContext)!;
  const markElement = useMarkUserTaskElement(selectedUserTaskElementId!);

  return (
    <Modal show={!!selectedUserTaskElementId} centered>
      <Modal.Header closeButton>
        <Modal.Title>{TITLE}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{DESCRIPTION}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setSelectedUserTaskElementId(undefined)}
        >
          {BUTTON_CANCEL}
        </Button>
        <LoadingButton
          variant="primary"
          onClick={onClick}
          loading={markElement.isPending}
        >
          {BUTTON_MARK}
        </LoadingButton>
      </Modal.Footer>
    </Modal>
  );

  function onClick() {
    markElement.mutate(undefined, {
      onSuccess: () => setSelectedUserTaskElementId(undefined),
    });
  }
}
