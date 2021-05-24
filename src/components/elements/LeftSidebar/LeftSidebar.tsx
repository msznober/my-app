import { FC } from 'react';
import './LeftSidebar.css';

export const LeftSidebar: FC = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="profile">
        <div className="top-section">
          <img src="../../../media/logo.png" className="avatar"></img>
          <h1>Humberta Swift</h1>
          <h2>Job title - Company</h2>
        </div>
        <div className="bottom-section">
          <div className="bottom-wrapper">
            <div className="left">
              <img src="../../../media/icons/people.svg" className="left-icon"></img>
              <p>Your network</p></div>
            <div className="right">
              <img src="../../../media/icons/network.svg" className="right-icon"></img>
            </div>
          </div>
          <div className="bottom-wrapper">
            <div className="left">
              <img src="../../../media/icons/people.svg" className="left-icon"></img>
              <p>Your Publications</p></div>
            <div className="right">
              <img src="../../../media/icons/plus.svg" className="right-icon"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="links">
        <div className="link-wrapper">
          <img src="../../../media/icons/publications.svg" className="link-icon"></img>
          <p>Publications</p>
        </div>
        <div className="link-wrapper">
          <img src="../../../media/icons/ecosystem.svg" className="link-icon"></img>
          <p>Ecosystem</p>
        </div>
        <div className="link-wrapper">
          <img src="../../../media/icons/entities.svg" className="link-icon"></img>
          <p>Entities</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;