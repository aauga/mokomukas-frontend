import { useContext, useState } from "react";

import { ColorfulLoadingButton } from "../common/ColorfulLoadingButton";
import { FinishTaskModal } from "./FinishTaskModal";
import { Palette } from "../../config/palette";
import { TaskPageContext } from "../../contexts/TaskPageContext";

interface TaskChangeButtonProps {
  className: string;
}

const BUTTON_NEXT = "Pereiti į kitą užduotį";
const BUTTON_LAST = "Baigti pamoką";

export default function TaskChangeButton({ className }: TaskChangeButtonProps) {
  const { taskId, isLastTask } = useContext(TaskPageContext) || {};
  const [showModal, setModal] = useState(false);

  return (
    <>
      <FinishTaskModal show={showModal} onHide={() => setModal(false)} />

      <ColorfulLoadingButton
        color={Palette.primary}
        loading={!taskId}
        className={className}
        onClick={() => setModal(true)}
      >
        {isLastTask ? BUTTON_LAST : BUTTON_NEXT}
      </ColorfulLoadingButton>
    </>
  );
}
