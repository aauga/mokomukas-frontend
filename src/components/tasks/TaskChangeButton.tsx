import { useContext, useState } from "react";

import { FinishTaskModal } from "./FinishTaskModal";
import { LoadingButton } from "../common/LoadingButton";
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

      <LoadingButton
        loading={!taskId}
        className={className}
        onClick={() => setModal(true)}
      >
        {isLastTask ? BUTTON_LAST : BUTTON_NEXT}
      </LoadingButton>
    </>
  );
}
