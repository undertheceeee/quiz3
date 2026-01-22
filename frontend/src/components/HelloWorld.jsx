import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { helloService } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';

export const HelloWorld = () => {
  const [publicMessage, setPublicMessage] = useState(null);
  const [protectedMessage, setProtectedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await helloService.getHello();
      setPublicMessage(response.data.message);
    } catch (err) {
      setError('Failed to fetch public message');
    }

    if (token) {
      try {
        const response = await helloService.getProtectedHello();
        setProtectedMessage(response.data.message);
      } catch (err) {
        setError('Failed to fetch protected message');
      }
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Welcome to React + Django</h1>
        {token && (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mb-4">
        <h3>Public Message:</h3>
        <Alert variant="info">{publicMessage}</Alert>
      </div>

      {token && protectedMessage && (
        <div className="mb-4">
          <h3>Protected Message:</h3>
          <Alert variant="success">{protectedMessage}</Alert>
        </div>
      )}

      <Button variant="primary" onClick={fetchMessages}>
        Refresh Messages
      </Button>
    </Container>
  );
};
