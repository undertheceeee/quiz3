import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile, clearError } from '../store/userSlice';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import './Pages.css';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, isLoading, error } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token]);

  if (!token) {
    navigate('/login');
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner message="Loading your profile..." />;
  }

  if (!profile) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">Profile not found</p>
      </Container>
    );
  }

  return (
    <div className="page-container">
      <Container className="py-5">
        <div className="page-header mb-5">
          <h1 className="mb-2">👤 My Profile</h1>
          <p className="text-muted">Your account information</p>
        </div>

        {error && (
          <ErrorMessage 
            error={error} 
            onDismiss={() => dispatch(clearError())}
          />
        )}

        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="avatar-placeholder mb-3">
                    👤
                  </div>
                </div>

                <div className="profile-section mb-4">
                  <label className="text-muted mb-2 d-block">First Name</label>
                  <h5>{profile.first_name || 'N/A'}</h5>
                </div>

                <div className="profile-section mb-4">
                  <label className="text-muted mb-2 d-block">Last Name</label>
                  <h5>{profile.last_name || 'N/A'}</h5>
                </div>

                <div className="profile-section mb-4">
                  <label className="text-muted mb-2 d-block">Username</label>
                  <h5>{profile.username}</h5>
                </div>

                <div className="profile-section mb-4">
                  <label className="text-muted mb-2 d-block">Email</label>
                  <h5 className="text-break">{profile.email}</h5>
                </div>

                <Button 
                  variant="primary" 
                  className="w-100 mt-4"
                  onClick={() => navigate('/')}
                >
                  Back to Services
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
