import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import Type from '../Type';
import myImg from '../../assets/avatar.svg';
import homeLogo from '../../Assets/home-main.svg';

const Home = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I’M
                <strong className='main-name'> PRATHAM GUPTA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='home-about-section' id='about'>
        <Container>
          <Row>
            <Col md={8} className='home-about-description'>
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className='purple'> INTRODUCE </span> MYSELF
              </h1>
              <p className='home-about-body'>
                With three years of experience in front-end development, I’ve
                fallen in love with creating dynamic and responsive user
                interfaces. 🚀
                <br />
                <br />I specialize in modern technologies such as{' '}
                <i>
                  <b className='purple'>
                    HTML, CSS, JavaScript, React, TypeScript , and Redux.{' '}
                  </b>
                </i>
                <br />
                <br />I enjoy building seamless web experiences, I’m
                particularly interested in crafting high-performance web
                applications and exploring the latest trends in web development.
                I often work with frameworks like{' '}
                <b className='purple'>Next.js</b> to bring innovative ideas to
                life.
              </p>
            </Col>
            <Col md={4} className='myAvtar'>
              <Tilt>
                <img src={myImg} className='img-fluid' alt='avatar' />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className='home-about-social'>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className='purple'>connect </span>with me
              </p>
              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='https://github.com/prathamgupta21'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'>
                    <AiFillGithub />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.linkedin.com/in/pratham-gupta-b6bb07220/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'>
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
