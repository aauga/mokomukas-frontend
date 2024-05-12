import { ColorfulLoadingButton } from "../common/ColorfulLoadingButton";
import { Palette } from "../../config/palette";
import { StyledModal } from "../common/StyledModal";
import { TaskPageContext } from "../../contexts/TaskPageContext";
import { useContext } from "react";
import { useFinishTask } from "../../api/user-tasks/api";

const TITLE_NEXT = "🤔 Ar norite pereiti į kitą užduotį?";
const TITLE_LAST = "🏁 Ar norite baigti pamoką?";

const DESCRIPTION =
  "Jei esate nepažymėję visų kenksmingų vietų, prarasite gyvybę už kiekvieną nepažymėtą vietą.";

const BUTTON_NEXT = "Pereiti";
const BUTTON_LAST = "Baigti pamoką";

export function FinishTaskModal(props: any) {
  const { userTaskId, isLastTask } = useContext(TaskPageContext) || {};
  const finishTask = useFinishTask(userTaskId!);

  return (
    <StyledModal {...props} size="lg" centered>
      <StyledModal.Header closeButton>
        <StyledModal.Title>
          {isLastTask ? TITLE_LAST : TITLE_NEXT}
        </StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>{DESCRIPTION}</StyledModal.Body>
      <StyledModal.Footer>
        <ColorfulLoadingButton
          color={Palette.health}
          onClick={props.onHide}
          disabled={finishTask.isPending}
        >
          Grįžti
        </ColorfulLoadingButton>
        <ColorfulLoadingButton
          color={Palette.primary}
          loading={finishTask.isPending}
          onClick={onClick}
        >
          {isLastTask ? BUTTON_LAST : BUTTON_NEXT}
        </ColorfulLoadingButton>
      </StyledModal.Footer>
    </StyledModal>
  );

  function onClick() {
    finishTask.mutate(undefined, { onSuccess: props.onHide });
  }
}
