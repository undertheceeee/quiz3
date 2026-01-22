import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-5 pt-5 pb-3 bg-light">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>🔧 AutoRepair Hub</h5>
            <p className="text-muted">Your trusted platform for professional auto repair and diagnostic services.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#/">Services</a></li>
              <li><a href="#/users">Experts</a></li>
              <li><a href="#/profile">My Profile</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p className="text-muted">
              Email: support@autorepairhub.com<br />
              Phone: 1-800-AUTO-HUB
            </p>
          </Col>
        </Row>
        <Row className="border-top pt-3">
          <Col className="text-center text-muted">
            <small>&copy; {currentYear} AutoRepair Hub. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
