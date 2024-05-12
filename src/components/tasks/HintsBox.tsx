import {
  useBoughtHintDescriptions,
  useBoughtHints,
  useBuyHint,
} from "../../api/user-hints/api";

import { LoadingButton } from "../common/LoadingButton";
import { Spinner } from "react-bootstrap";
import { TaskPageContext } from "../../contexts/TaskPageContext";
import { useContext } from "react";

export default function HintsBox() {
  const { userTaskId } = useContext(TaskPageContext)!;

  const hints = useBoughtHints(userTaskId);
  const hintDescriptions = useBoughtHintDescriptions(userTaskId);

  const nextBuyableHintId = hints.data?.find((hint) => !hint.bought)?.id;
  const buyHint = useBuyHint(nextBuyableHintId ?? -1);

  if (hints.isLoading || hintDescriptions.isLoading) {
    return <Spinner />;
  }

  if (hints.data?.length === 0) {
    return (
      <div>
        <h2>Užuominos</h2>
        <p>Užuominų nėra</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Užuominos</h2>

      {hintDescriptions.data?.map((description, index) => (
        <div key={index}>
          {index + 1}. {description}
        </div>
      ))}

      {nextBuyableHintId && (
        <LoadingButton
          loading={buyHint.isPending}
          onClick={() => buyHint.mutate()}
          className="w-100"
        >
          Pirkti užuominą
        </LoadingButton>
      )}
    </div>
  );
}
