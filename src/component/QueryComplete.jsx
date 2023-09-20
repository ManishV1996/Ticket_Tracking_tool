import React from 'react';

const QueryComplete = ({ query, onDone, onBack }) => {
  return (
    <div className="query-complete">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Query Complete</h2>
          {query && (
            <div>
              <p><strong>Name:</strong> {query.name}</p>
              <p><strong>Email:</strong> {query.email}</p>
              <p><strong>Description:</strong> {query.description}</p>
            </div>
          )}
          <div className="d-flex justify-content-between mt-3">
            <button onClick={onBack} className="btn btn-secondary">Back</button>
            <button onClick={onDone} className="btn btn-success">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryComplete;
