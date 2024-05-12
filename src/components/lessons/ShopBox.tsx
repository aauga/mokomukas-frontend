import { LoadingButton } from "../common/LoadingButton";
import { ResourceType } from "../../api/users/types";
import { Stack } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import { useBuyResources } from "../../api/users/api";
import { useContext } from "react";

export default function ShopBox() {
  const { user } = useContext(UserContext) ?? {};
  const buyResources = useBuyResources(user!.id);

  return (
    <Stack
      direction="vertical"
      gap={2}
      style={{
        borderRadius: "16px",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <h3>Parduotuvė</h3>

      <Stack direction="vertical" gap={2}>
        <LoadingButton
          disabled={user!.money < 100 || user!.health === 5}
          loading={buyResources.isPending}
          style={{ backgroundColor: "" }}
          onClick={() => buyResources.mutate(ResourceType.HEALTH)}
        >
          Pirkti 1 gyvybę už 100 pinigų
        </LoadingButton>

        <LoadingButton
          disabled={user!.money < 100}
          loading={buyResources.isPending}
          style={{ backgroundColor: "" }}
          onClick={() => buyResources.mutate(ResourceType.EXPERIENCE_POINTS)}
        >
          Pirkti 100 patirties taškų už 100 pinigų
        </LoadingButton>
      </Stack>
    </Stack>
  );
}
