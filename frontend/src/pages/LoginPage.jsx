import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/authSlice';
import { LoadingSpinner } from '../components/LoadingSpinner';
import './Auth.css';

export const LoginPage = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [localError, setLocalError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!username.trim() || !password.trim()) {
      setLocalError('Username and password are required');
      return;
    }

    const result = await dispatch(loginUser({ username, password }));
    if (result.payload && result.type === 'auth/loginUser/fulfilled') {
      navigate('/');
    }
  };

  if (isLoading) return <LoadingSpinner message="Logging in..." />;

  return (
    <div className="auth-container">
      <Container className="auth-form-wrapper">
        <div className="auth-form">
          <h1 className="text-center mb-4">🔧 AutoRepair Hub</h1>
          <h2 className="text-center mb-4 text-muted">Login</h2>

          {(error || localError) && (
            <Alert variant="danger" onDismiss={() => {
              setLocalError(null);
            }} dismissible>
              {error || localError}
            </Alert>
          )}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 mb-3"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>

          <div className="alert alert-info mt-4 text-center">
            <small>
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: admin
            </small>
          </div>
        </div>
      </Container>
    </div>
  );
};
