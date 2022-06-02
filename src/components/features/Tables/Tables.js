import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesReducer';
import { Card } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tables = () => {
  const tablesData = useSelector(getAllTables);
  
  return (
    <section>
      <Row>
        {tablesData.map((table) => (
          <Col key={table.id} md={12} className='mb-5 '>
            <Card className='rounded'>
              <Card.Body>
                <Row>
                  <Col md={1}>
                    <Card.Title>Table {table.id}</Card.Title>
                  </Col>
                  <Col md={9}>
                    <b>Status:</b> {table.state}
                  </Col>
                  <Col md={2}>
                    <Link className='justify-content-md-end' to={'/table/' + table.id}>
                      <Button variant='primary'>Read more</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Tables;
