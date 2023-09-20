// SuccessMessage.js
import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({ onClose }) => {
  return (
    <div className="success-message">
      <div className="success-content">
        <h2>Success!</h2>
        <p>Your query has been successfully processed.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessMessage;
