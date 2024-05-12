import { Col, Row, Spinner, Stack } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import { TaskPageContext } from "../../contexts/TaskPageContext";
import { useUserTaskStatistics } from "../../api/user-tasks/api";

export default function StatisticsBox() {
  const { userTaskId } = useContext(TaskPageContext)!;
  const statistics = useUserTaskStatistics(userTaskId);

  if (statistics.isLoading) {
    return <Spinner />;
  }

  if (statistics.isError) {
    return <div>Įvyko klaida</div>;
  }

  return (
    <div
      style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "16px" }}
    >
      <h3 className="mb-3">
        📈 Klausimas {statistics.data!.current_task} iš{" "}
        {statistics.data!.total_tasks}
      </h3>

      <Row>
        <Col xs={6}>
          <TimeBox date={new Date(statistics.data!.start_date)} />
        </Col>

        <Col xs={6}>
          <CustomStack
            backgroundColor="#FBA759"
            headerText="Gauta pinigų"
            value={statistics.data!.earned_money}
          />
        </Col>
        <Col xs={6}>
          <CustomStack
            backgroundColor="#3B9CD3"
            headerText="Gauta patirties taškų"
            value={statistics.data!.earned_experience_points}
          />
        </Col>
        <Col xs={6}>
          <CustomStack
            backgroundColor="#3BD35C"
            headerText="Teisingai pažymėta"
            value={`${statistics.data!.correctly_clicked_elements} / ${
              statistics.data!.total_elements
            }`}
          />
        </Col>
      </Row>
    </div>
  );
}

function TimeBox({ date }: { date: Date }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = Math.floor(
        (new Date().getTime() - date.getTime()) / 1000
      );
      setCount(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  const formattedHours: string = (hours < 10 ? "0" : "") + hours;
  const formattedMinutes: string = (minutes < 10 ? "0" : "") + minutes;
  const formattedSeconds: string = (seconds < 10 ? "0" : "") + seconds;
  const currentTime: string =
    formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

  return (
    <CustomStack
      backgroundColor="#1DB0F6"
      headerText="Jūsų laikas"
      value={currentTime}
    />
  );
}

function CustomStack({
  headerText,
  value,
  backgroundColor,
}: {
  headerText: string;
  value: string | number | Date;
  backgroundColor: string;
}) {
  return (
    <Stack
      className="mb-2"
      direction="vertical"
      style={{
        color: "#ffffff",
        borderRadius: "16px",
        padding: "8px",
        textAlign: "center",
        backgroundColor,
      }}
    >
      <p style={{ fontWeight: 700, margin: 0 }}>{headerText}</p>
      <>{value}</>
    </Stack>
  );
}
