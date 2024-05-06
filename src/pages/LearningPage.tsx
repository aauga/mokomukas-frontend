import { Col, Container, Row } from "react-bootstrap";

import Template from "../templates/Template";

export default function LearningPage() {
  return (
    <Container style={{ marginTop: "20px" }}>
      <h1>Learning page</h1>

      <Row className="gap-5">
        <Col>
          <Template templateName="test_template" />
        </Col>
        <Col lg={4} style={{ backgroundColor: "cyan" }}>
          <div>2 of 2</div>
        </Col>
      </Row>
    </Container>
  );
}
