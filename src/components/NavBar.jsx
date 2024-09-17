import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

import logo from '../assets/logo.png';

const NavBar = () => {
  const [expand, setExpanded] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navbar ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand as={Link} to='/' className='d-flex'>
          <img src={logo} className='img-fluid logo' alt='logo' />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => {
            setExpanded((prev) => !prev);
          }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} />
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => setExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: '2px' }} />
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => setExpanded(false)}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/resume'
                onClick={() => setExpanded(false)}>
                <CgFileDocument style={{ marginBottom: '2px' }} />
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
