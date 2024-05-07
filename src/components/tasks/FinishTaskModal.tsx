import { Button, Modal } from "react-bootstrap";

import { LoadingButton } from "../common/LoadingButton";
import { TaskPageContext } from "../../contexts/TaskPageContext";
import { useContext } from "react";
import { useFinishTask } from "../../api/user-tasks/api";

const TITLE_NEXT = "Ar norite pereiti į kitą užduotį?";
const TITLE_LAST = "Ar norite baigti pamoką?";

const DESCRIPTION =
  "Jei esate nepažymėję visų kenksmingų vietų, prarasite gyvybę už kiekvieną nepažymėtą vietą.";

const BUTTON_NEXT = "Pereiti";
const BUTTON_LAST = "Baigti pamoką";

export function FinishTaskModal(props: any) {
  const { taskId, isLastTask } = useContext(TaskPageContext) || {};
  const finishTask = useFinishTask(taskId!);

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLastTask ? TITLE_LAST : TITLE_NEXT}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{DESCRIPTION}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.onHide}
          disabled={finishTask.isPending}
        >
          Grįžti
        </Button>
        <LoadingButton loading={finishTask.isPending} onClick={onClick}>
          {isLastTask ? BUTTON_LAST : BUTTON_NEXT}
        </LoadingButton>
      </Modal.Footer>
    </Modal>
  );

  function onClick() {
    finishTask.mutate(undefined, { onSuccess: props.onHide });
  }
}
