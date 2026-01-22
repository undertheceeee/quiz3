import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Badge, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchServices, clearError } from '../store/serviceSlice';
import { ServiceCard } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import './Pages.css';
import './HomePage.css';

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { services, isLoading, error } = useSelector((state) => state.services);
  const { token } = useSelector((state) => state.auth);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (token) {
      dispatch(fetchServices());
    }
  }, [dispatch, token]);

  if (!token) {
    navigate('/login');
    return null;
  }

  // Filter services based on category and search
  const filteredServices = services.filter((service) => {
    const matchCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchSearch = 
      service.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Extract unique categories
  const categories = ['all', ...new Set(services.map(s => s.category))];
  const categoryLabels = {
    all: '🔧 All Services',
    maintenance: '🛠️ Maintenance',
    repair: '🔩 Repair',
    diagnostic: '📊 Diagnostic'
  };

  const getAverageRating = () => {
    if (services.length === 0) return 0;
    const avg = services.reduce((sum, s) => sum + parseFloat(s.rating || 0), 0) / services.length;
    return avg.toFixed(1);
  };

  const getStatsColor = (value) => {
    if (value >= 4.5) return '#27ae60';
    if (value >= 4) return '#f39c12';
    return '#e74c3c';
  };

  if (isLoading) {
    return <LoadingSpinner message="Loading services..." />;
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div className="hero-badge mb-4">
                <Badge bg="light" text="dark" className="px-3 py-2">
                  ✨ Premium Auto Services
                </Badge>
              </div>
              <h1 className="hero-title mb-4">
                Professional Auto Repair & Diagnostic Services
              </h1>
              <p className="hero-subtitle mb-5">
                Connect with qualified technicians for tire maintenance, brake repair, battery services, and more. Fast, reliable, and affordable solutions for your vehicle.
              </p>
              <div className="hero-cta">
                <Button 
                  className="btn-hero-primary me-3"
                  size="lg"
                  onClick={() => document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse Services
                </Button>
                <Button 
                  className="btn-hero-secondary"
                  size="lg"
                  onClick={() => navigate('/users')}
                >
                  View Experts →
                </Button>
              </div>
              <div className="hero-stats mt-5">
                <div className="stat-item">
                  <div className="stat-number">{services.length}</div>
                  <div className="stat-label">Services</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" style={{ color: getStatsColor(getAverageRating()) }}>
                    ⭐ {getAverageRating()}
                  </div>
                  <div className="stat-label">Avg Rating</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <div className="hero-graphic">
                <div className="graphic-icon">🚗</div>
                <div className="graphic-circle circle-1"></div>
                <div className="graphic-circle circle-2"></div>
                <div className="graphic-circle circle-3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title mb-4">Why Choose Us?</h2>
              <p className="section-subtitle">Professional services you can trust</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h5>Fast Service</h5>
                <p>Quick turnaround times without compromising quality</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h5>Affordable Pricing</h5>
                <p>Competitive rates with transparent cost estimates</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon">👨‍🔧</div>
                <h5>Expert Technicians</h5>
                <p>Certified professionals with years of experience</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h5>Quality Guaranteed</h5>
                <p>All work backed by our satisfaction guarantee</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Error Message */}
      {error && (
        <Container>
          <ErrorMessage 
            error={error} 
            onDismiss={() => dispatch(clearError())}
          />
        </Container>
      )}

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <div className="section-header mb-5">
            <h2 className="section-title mb-3">Our Services</h2>
            <p className="section-subtitle">Explore our wide range of professional automotive services</p>
          </div>

          {/* Search Bar */}
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <div className="search-wrapper">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="🔍 Search services by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>

          {/* Category Filter */}
          <Row className="mb-5">
            <Col className="text-center">
              <div className="category-filters">
                {categories.map((category) => (
                  <Button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categoryLabels[category] || category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <Row>
              <Col className="text-center py-5">
                <div className="empty-state">
                  <div className="empty-icon">🔍</div>
                  <h4>No services found</h4>
                  <p className="text-muted">
                    {searchTerm ? 'Try adjusting your search terms' : 'No services in this category'}
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <Row xs={1} sm={2} lg={3} className="g-4 mb-5">
              {filteredServices.map((service) => (
                <Col key={service.id}>
                  <ServiceCard 
                    service={service}
                    onClick={() => navigate(`/service/${service.id}`)}
                  />
                </Col>
              ))}
            </Row>
          )}

          {/* Results Count */}
          {filteredServices.length > 0 && (
            <Row className="mb-3">
              <Col className="text-center">
                <p className="text-muted results-count">
                  Showing {filteredServices.length} of {services.length} services
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      {services.length > 0 && (
        <section className="cta-section">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <h2 className="mb-4">Ready to Get Started?</h2>
                <p className="mb-4 lead">Browse our services or schedule an appointment with one of our expert technicians today.</p>
                <div className="cta-buttons">
                  <Button 
                    className="btn-cta-primary me-3"
                    size="lg"
                    onClick={() => navigate('/users')}
                  >
                    Meet Our Team
                  </Button>
                  <Button 
                    className="btn-cta-secondary"
                    size="lg"
                    onClick={() => navigate('/profile')}
                  >
                    View My Profile
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};
