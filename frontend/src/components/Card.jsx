import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './Card.css';

export const ServiceCard = ({ service, onClick }) => {
  return (
    <Card className="service-card shadow-sm">
      <div className="card-image-wrapper">
        {service.sample_image ? (
          <Card.Img 
            variant="top" 
            src={service.sample_image} 
            alt={service.service_name}
            className="service-card-img"
          />
        ) : (
          <div className="service-card-placeholder">
            <span className="placeholder-icon">🔧</span>
          </div>
        )}
        <div className="rating-badge">
          <Badge bg="warning" text="dark" className="rating-display">
            ⭐ {service.rating}
          </Badge>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="service-title">
          {service.service_name}
        </Card.Title>
        
        <Card.Text className="service-description text-muted">
          {service.description}
        </Card.Text>
        
        <div className="mt-auto">
          {onClick && (
            <Button 
              variant="primary" 
              size="sm" 
              className="w-100 view-details-btn"
              onClick={onClick}
            >
              View Details →
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export const UserCard = ({ user }) => {
  const initials = `${user.first_name?.charAt(0) || 'U'}${user.last_name?.charAt(0) || 'S'}`.toUpperCase();
  
  return (
    <Card className="user-card shadow-sm">
      <Card.Body className="user-card-body">
        <div className="user-avatar">
          {initials}
        </div>
        
        <Card.Title className="user-name mt-3">
          {user.first_name} {user.last_name}
        </Card.Title>
        
        <div className="user-info">
          <div className="info-item">
            <label className="info-label">Email</label>
            <p className="info-value text-break">
              {user.email}
            </p>
          </div>
          
          {user.username && (
            <div className="info-item">
              <label className="info-label">Username</label>
              <p className="info-value">
                @{user.username}
              </p>
            </div>
          )}
        </div>
        
        <div className="user-badge">
          👨‍🔧 Expert
        </div>
      </Card.Body>
    </Card>
  );
};
