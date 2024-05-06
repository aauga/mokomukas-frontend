import TestTemplate from "./TestTemplate";

type TemplateProps = {
  templateName: string;
};

const templates = new Map<string, JSX.Element>([
  ["test_template", <TestTemplate />],
]);

export default function Template(props: TemplateProps) {
  return <>{templates.get(props.templateName)}</>;
}
