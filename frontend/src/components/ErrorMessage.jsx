import React from 'react';
import { Alert } from 'react-bootstrap';

export const ErrorMessage = ({ error, onDismiss }) => {
  if (!error) return null;

  const errorMessage = typeof error === 'string' ? error : error.message || 'An error occurred';

  return (
    <Alert 
      variant="danger" 
      onClose={onDismiss} 
      dismissible
      className="mb-3"
    >
      <Alert.Heading>Error!</Alert.Heading>
      <p>{errorMessage}</p>
    </Alert>
  );
};
