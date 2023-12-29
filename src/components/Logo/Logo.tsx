import React from 'react';
import './Logo.scss';
import LogoImage from '../../asserts/zevi_logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={LogoImage} alt="zevi_logo" />
    </div>
  );
};

export default Logo;
