import { Container, Row, Col } from 'react-bootstrap';

import ProjectCard from './ProjectCard';
import filmFlix from '../../assets/filmflix.png';
import answerHub from '../../assets/answerhub.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Work </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              title='Answer Hub'
              imgPath={answerHub}
              description='A Stack Overflow Clone using NextJS, MongoDB and ShadCN UI.'
              ghLink='https://github.com/PrathamGupta21/answer-hub'
              demoLink='https://answerhub.vercel.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              title='Film Flix'
              imgPath={filmFlix}
              description='A TMDB Clone using ReactJS, Redux and Material UI.'
              ghLink='https://github.com/PrathamGupta21/filmflix'
              demoLink='https://filmflix-pratham.netlify.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
