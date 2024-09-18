import { Col, Row } from 'react-bootstrap';
import { FaBitbucket, FaConfluence, FaJenkins } from 'react-icons/fa';
import { SiVisualstudiocode, SiVercel } from 'react-icons/si';

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaBitbucket />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaConfluence />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaJenkins />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col>
    </Row>
  );
};

export default Toolstack;
