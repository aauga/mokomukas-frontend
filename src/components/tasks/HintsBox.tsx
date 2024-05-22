import {
  useBoughtHintDescriptions,
  useBoughtHints,
  useBuyHint,
} from "../../api/user-hints/api";

import { ColorfulLoadingButton } from "../common/ColorfulLoadingButton";
import { Palette } from "../../config/palette";
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
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        <h2>🤔 Užuominos</h2>
        <p>Užuominų nėra</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <h2>🤔 Užuominos</h2>

      {hintDescriptions.data?.map((description, index) => (
        <div key={index}>
          {index + 1}. {description}
        </div>
      ))}

      {nextBuyableHintId && (
        <ColorfulLoadingButton
          color={Palette.primary}
          loading={buyHint.isPending}
          onClick={() => buyHint.mutate()}
          className="w-100 mt-2"
        >
          Pirkti užuominą
        </ColorfulLoadingButton>
      )}
    </div>
  );
}
