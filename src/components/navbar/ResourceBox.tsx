import { Stack } from "react-bootstrap";

export type ResourceBoxProps = {
  children: React.ReactNode;
  backgroundColor: string;
};

export default function ResourceBox({
  children,
  backgroundColor,
}: ResourceBoxProps) {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      style={{
        backgroundColor,
        color: "white",
        padding: "8px",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: 700,
        width: "fit-content",
      }}
    >
      {children}
    </Stack>
  );
}
