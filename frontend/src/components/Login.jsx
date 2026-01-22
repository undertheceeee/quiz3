import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { setTokens, setUser, setLoading } from '../store/authSlice';
import { authService } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';

export const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(username, password);
      dispatch(setTokens(response.data));
      onLoginSuccess();
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <div className="mt-3 text-center">
        <p>Demo credentials: admin / admin</p>
      </div>
    </Container>
  );
};
