import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import './Header.css';

export const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Navbar bg="primary" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} className="cursor-pointer fw-bold">
          🔧 AutoRepair Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {token ? (
              <>
                <Nav.Link onClick={() => navigate('/')}>Services</Nav.Link>
                <Nav.Link onClick={() => navigate('/users')}>Experts</Nav.Link>
                <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={handleLogout}
                  className="ms-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="light" 
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
