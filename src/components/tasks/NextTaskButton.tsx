import { useContext, useState } from "react";

import { FinishTaskModal } from "./FinishTaskModal";
import { LoadingButton } from "../common/LoadingButton";
import { TaskPageContext } from "../../contexts/TaskPageContext";

interface NextTaskButtonProps {
  className: string;
}

export default function NextTaskButton({ className }: NextTaskButtonProps) {
  const { taskId } = useContext(TaskPageContext) || {};
  const [showModal, setModal] = useState(false);

  return (
    <>
      <FinishTaskModal show={showModal} onHide={() => setModal(false)} />

      <LoadingButton
        loading={!taskId}
        className={className}
        onClick={() => setModal(true)}
      >
        Kita užduotis
      </LoadingButton>
    </>
  );
}
