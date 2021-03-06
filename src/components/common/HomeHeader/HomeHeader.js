import React from 'react';
import './HomeHeader.scss';
import logo from '../../../assets/logo.png';
import excelLogo from '../../../assets/excel19_logo.png';

const HomeHeader = props => {
  const { userPic } = props;

  return (
    <div className="big-header-bg">
      <div className="excel-logo-container">
        <a href="http://excelmec.org/#/">
          <img className="excel-logo" src={excelLogo} alt="excel logo" />
        </a>
      </div>
      <div className="logo-container-bg" />
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {userPic ? (
        <div className="userDetails">
          <img className="propic" alt="profile pic" src={userPic} />
          <button
            type="button"
            className="btn"
            onClick={() => {
              window.location = '/Logout';
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="userDetails" />
      )}
    </div>
  );
};

export default HomeHeader;
