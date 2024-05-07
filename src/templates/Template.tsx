import { Palette } from "../config/palette";
import TestTemplate from "./TestTemplate";

type TemplateProps = {
  templateName: string;
};

const templates = new Map<string, JSX.Element>([
  ["test_template", <TestTemplate />],
  ["test_template_2", <h1>asdf</h1>],
]);

export default function Template(props: TemplateProps) {
  return (
    <div
      style={{
        borderColor: Palette.lightgray,
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
      {templates.get(props.templateName)}
    </div>
  );
}
