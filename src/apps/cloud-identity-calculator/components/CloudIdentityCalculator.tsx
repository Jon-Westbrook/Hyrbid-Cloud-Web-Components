import React from 'react';
import CalcDisplay from './CalcDisplay';

const CloudIdentityCalculator: React.FC = () => {
  return (
    <div className="cloud-identity-calculator">
      <div className="cloud-identity-calculator__inner">
        <div>
          <CalcDisplay />
        </div>
      </div>
    </div>
  );
};

export default CloudIdentityCalculator;
