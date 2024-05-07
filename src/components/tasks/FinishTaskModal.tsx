import { Button, Modal } from "react-bootstrap";

import { LoadingButton } from "../common/LoadingButton";
import { TaskPageContext } from "../../contexts/TaskPageContext";
import { useContext } from "react";
import { useFinishTask } from "../../api/user-tasks/api";

export function FinishTaskModal(props: any) {
  const { taskId } = useContext(TaskPageContext) || {};
  const finishTask = useFinishTask(taskId!);

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Ar norite pereiti į kitą užduotį?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Jei esate nepažymėję visų kenksmingų vietų, prarasite gyvybę už
        kiekvieną nepažymėtą vietą.
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.onHide}
          disabled={finishTask.isPending}
        >
          Grįžti
        </Button>
        <LoadingButton loading={finishTask.isPending} onClick={onClick}>
          Pereiti
        </LoadingButton>
      </Modal.Footer>
    </Modal>
  );

  function onClick() {
    finishTask.mutate(undefined, { onSuccess: props.onHide });
  }
}
