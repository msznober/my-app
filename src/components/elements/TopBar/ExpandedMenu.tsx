import { FC, useState, useContext } from 'react';
import './TopBar.css';
import useDropdown from 'react-dropdown-hook';
import { CurrentUserContext } from '../../../App';

const ExpandedMenu: FC = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="expanded-menu-wrapper">
      <div className="search-bar">
        <input type='text' placeholder='Filter...' className='searchInput' />
      </div>
      <div className="wrapper-menu">
        <p className="menu-title">Platform</p>
        <div className="link-menu">
          <img src="../../../media/icons/house2.svg" className="link-menu-icon"></img>
          <p>Home</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/publications.svg" className="link-menu-icon"></img>
          <p>Publications</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/people.svg" className="link-menu-icon"></img>
          <p>People</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/entities.svg" className="link-menu-icon"></img>
          <p>Entities</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/administration.svg" className="link-menu-icon"></img>
          <p>Administration</p>
        </div>
        <p className="menu-title">Workspaces</p>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <p>Client contract</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <p>Supplier contract</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/entities2.svg" className="link-menu-icon"></img>
          <p>Corporate</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <p>Group Norms</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <p>Real estate contracts</p>
        </div>
        <p className="menu-title">Account</p>
        <div className="menu-profile">
          <div className="menu-profile-photo-wrap">
            <img src={currentUser['thumbnailUrl']} className="menu-profile-photo"></img>
          </div>
          <div className="menu-profile-content-wrap">
            <p className="profile-name"> {currentUser['name']}</p>
            <p className="profile-see-link">See profile</p>
          </div>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/privacy.svg" className="link-menu-icon"></img>
          <p>Privacy</p>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/settings.svg" className="link-menu-icon"></img>
          <p>Settings</p>
        </div>
        <div className="logout link-menu">
          <img src="../../../media/icons/logout.svg" className="link-menu-icon"></img>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};
export default ExpandedMenu;