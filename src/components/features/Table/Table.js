import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesReducer";
import { Card, Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getTableById } from "../../../redux/tablesReducer";
import { getStatus } from "../../../redux/statusReducer";
import { useState } from "react";

const Table = () => {
  const { tableId } = useParams();


  const tableData = useSelector((state) => getTableById(state, tableId));
  const id = tableData.id;

  const statusData = useSelector(getStatus);

  const [people, setPeople] = useState(tableData.people || "");
  const [status, setStatus] = useState(tableData.state || "");
  const [maxPeople, setMaxPeople] = useState(tableData.maxPeople || "");
  const [bill, setBill] = useState(tableData.bill || "");

  const handleSubmit = (post) => {};

  console.log(tableData);
  return (
    <div>
      <h1>Table {id} </h1>

      <Row className="justify-content-md-center">
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Row>
                <Col sm="1">
                  <Form.Label column sm="1">
                    <b>People:</b>
                  </Form.Label>
                </Col>
                <Col sm="1">
                  <Form.Control
                    type="text"
                    onChange={(e) => setPeople(e.target.value)}
                    value={people}
                  />
                </Col>
                /
                <Col sm="1">
                  <Form.Control
                    type="text"
                    onChange={(e) => setMaxPeople(e.target.value)}
                    value={maxPeople}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <b>Status:</b>
                </Col>
                <Col sm="3">
                  <Form.Select
                    as="select"
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    aria-label="Select category"
                  >
                    <option>Select category</option>
                    {statusData.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <Form.Label><b>Bill:</b></Form.Label>
                </Col>
                <Col sm="2">
                  <Form.Control
                    type="text"
                    placeholder="current bill"
                    onChange={(e) => setBill(e.target.value)}
                    value={bill}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Button as="input" type="submit" value={bill} style={{ marginTop: "10px" }} />
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Table;
