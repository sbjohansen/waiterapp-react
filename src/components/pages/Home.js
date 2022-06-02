import { Container, Row, Col, Stack } from "react-bootstrap";
import  Tables  from "../../components/features/Tables/Tables";

function Home() {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Row>
            <Col className="d-flex justify-content-start">
              <h1>All Tables</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tables />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;
