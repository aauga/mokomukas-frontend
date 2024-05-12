import { Spinner, Stack } from "react-bootstrap";

import { User } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useLeaderboard } from "../../api/users/api";

export default function LeaderboardBox() {
  const { user } = useContext(UserContext) ?? {};
  const leaderboard = useLeaderboard();

  if (leaderboard.isLoading) {
    return <Spinner />;
  }

  if (leaderboard.isError) {
    return <div>Įvyko klaida</div>;
  }

  if (leaderboard.data?.leaderboard.length === 0) {
    return <div>Nėra lyderių</div>;
  }

  return (
    <div
      style={{
        borderRadius: "16px",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <h3>Lyderių lentelė</h3>

      {user && (
        <p>
          Jūs užimate {leaderboard.data?.personal_standing} vietą su{" "}
          {leaderboard.data?.streak} dienomis
        </p>
      )}

      <Stack direction="vertical" gap={1}>
        {leaderboard.data?.leaderboard.map((user, index) => (
          <PlacementRow key={index} user={user} index={index} />
        ))}
      </Stack>
    </div>
  );
}

function PlacementRow({ user, index }: { user: User; index: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {getPlacementText(index)} {user.username}
      </div>
      <div>{user.day_streak} dienos</div>
    </div>
  );
}

function getPlacementText(index: number) {
  switch (index) {
    case 0:
      return "🥇";
    case 1:
      return "🥈";
    case 2:
      return "🥉";
    default:
      return `${index + 1}.`;
  }
}
