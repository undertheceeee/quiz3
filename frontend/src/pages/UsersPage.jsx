import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchUsers, clearError } from '../store/userSlice';
import { UserCard } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import './Pages.css';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, isLoading, error } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchUsers());
    }
  }, [dispatch, token]);

  if (!token) {
    navigate('/login');
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner message="Loading experts..." />;
  }

  return (
    <div className="page-container">
      <Container className="py-5">
        <div className="page-header mb-5">
          <h1 className="mb-2">👨‍🔧 Our Experts</h1>
          <p className="text-muted">Meet our professional automotive technicians</p>
        </div>

        {error && (
          <ErrorMessage 
            error={error} 
            onDismiss={() => dispatch(clearError())}
          />
        )}

        {users.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">No experts available at the moment.</p>
          </div>
        ) : (
          <Row xs={1} sm={2} lg={3} className="g-4">
            {users.map((user) => (
              <Col key={user.id}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};
