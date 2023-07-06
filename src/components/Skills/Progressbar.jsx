import React from 'react';

const PortfolioProgressBar = ({ title, progress }) => {
  return (
    <div className="progress-bar">
      <h3>{title}</h3>
      <div className="progress">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioProgressBar;
