import React from 'react';

const QueryProcessing = ({ query, onResolve, onBack }) => {
  return (
    <div className="query-processing">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Query Processing</h2>
          {query && (
            <div>
              <p><strong>Name:</strong> {query.name}</p>
              <p><strong>Email:</strong> {query.email}</p>
              <p><strong>Description:</strong> {query.description}</p>
            </div>
          )}
          <div className="d-flex justify-content-between mt-3">
            <button onClick={onBack} className="btn btn-secondary">Back</button>
            <button onClick={onResolve} className="btn btn-success">Resolve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryProcessing;
