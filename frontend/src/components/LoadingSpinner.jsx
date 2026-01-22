import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

export const LoadingSpinner = ({ message = 'Loading...' }) => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
    <div className="text-center">
      <Spinner animation="border" role="status" className="mb-3">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-muted">{message}</p>
    </div>
  </Container>
);
