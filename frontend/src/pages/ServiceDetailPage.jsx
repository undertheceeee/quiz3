import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { fetchServiceById, clearError, clearSelectedService } from '../store/serviceSlice';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import './Pages.css';

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedService, isLoading, error } = useSelector((state) => state.services);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && id) {
      dispatch(fetchServiceById(id));
    }
    return () => {
      dispatch(clearSelectedService());
    };
  }, [dispatch, id, token]);

  if (!token) {
    navigate('/login');
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner message="Loading service details..." />;
  }

  if (!selectedService) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">Service not found</p>
        <Button onClick={() => navigate('/')}>Back to Services</Button>
      </Container>
    );
  }

  return (
    <div className="page-container">
      <Container className="py-5">
        <Button 
          variant="outline-secondary" 
          className="mb-4"
          onClick={() => navigate('/')}
        >
          ← Back to Services
        </Button>

        {error && (
          <ErrorMessage 
            error={error} 
            onDismiss={() => dispatch(clearError())}
          />
        )}

        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            {selectedService.sample_image && (
              <img 
                src={selectedService.sample_image} 
                alt={selectedService.service_name}
                className="img-fluid rounded"
                style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
              />
            )}
          </Col>
          <Col lg={6}>
            <h1 className="mb-3">{selectedService.service_name}</h1>
            
            <div className="mb-4">
              <Badge bg="info" className="me-2">
                {selectedService.category?.toUpperCase()}
              </Badge>
              <Badge bg="warning" text="dark">
                ⭐ {selectedService.rating}
              </Badge>
            </div>

            <Card className="mb-4 border-0 bg-light">
              <Card.Body>
                <Row className="mb-3">
                  <Col md={6}>
                    <h6 className="text-muted">Price</h6>
                    <h3 className="text-primary">${selectedService.price}</h3>
                  </Col>
                  <Col md={6}>
                    <h6 className="text-muted">Duration</h6>
                    <p className="mb-0">{selectedService.duration_of_service}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div className="mb-4">
              <h5>Description</h5>
              <p className="text-justify">{selectedService.description}</p>
            </div>

            <Card className="border-primary">
              <Card.Body>
                <h6 className="text-primary mb-2">Expert Technician</h6>
                <h5>{selectedService.name_of_the_expert}</h5>
              </Card.Body>
            </Card>

            <Button 
              variant="primary" 
              size="lg" 
              className="w-100 mt-4"
              onClick={() => alert('Booking feature coming soon!')}
            >
              Book Service
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
