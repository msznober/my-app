import { FC, useState, useContext } from 'react';
import './LeftSidebar.css';
import { CurrentUserContext } from '../../../App';

export const LeftSidebar: FC = () => {
  const currentUser = useContext(CurrentUserContext);


  return (
    <div className="sidebar-wrapper">
      <div className="profile">
        <div className="top-section">
          <img src={currentUser['thumbnailUrl']} className="avatar"></img>
          <h1 className="profile-name"> {currentUser['name']}</h1>
          <h2> {currentUser['company'] ? currentUser['company']['name'] : 'company name'}</h2>
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
      </div >
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
    </div >
  );
};

export default LeftSidebar;