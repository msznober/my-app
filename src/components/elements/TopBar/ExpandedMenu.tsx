import { FC, useState, useContext } from 'react';
import './TopBar.css';
import useDropdown from 'react-dropdown-hook';
import { CurrentUserContext } from '../../../App';
import { Link } from 'react-router-dom';

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
          <Link to='/' className='link-menu-link'>
            Home</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/publications.svg" className="link-menu-icon"></img>
          <Link to='/testpage' className='link-menu-link'>
            Publications</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/people.svg" className="link-menu-icon"></img>
          <Link to='/testpage' className='link-menu-link'>
            People</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/entities.svg" className="link-menu-icon"></img>
          <Link to='/entitiespage' className='link-menu-link'>
            Entities</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/administration.svg" className="link-menu-icon"></img>
          <Link to='/testpage' className='link-menu-link'>
            Administration</Link>
        </div>
        <p className="menu-title">Workspaces</p>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <Link to='/workspacespage' className='link-menu-link'>
            Client contract</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <Link to='/workspacespage' className='link-menu-link'>
            Supplier contract</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/entities2.svg" className="link-menu-icon"></img>
          <Link to='/workspacespage' className='link-menu-link'>
            Corporate</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <Link to='/workspacespage' className='link-menu-link'>
            Group norms</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/cog.svg" className="link-menu-icon"></img>
          <Link to='/workspacespage' className='link-menu-link'>
            Real estate contracts</Link>
        </div>
        <p className="menu-title">Account</p>
        <div className="menu-profile">
          <div className="menu-profile-photo-wrap">
            <img src={currentUser['thumbnailUrl']} className="menu-profile-photo"></img>
          </div>
          <div className="menu-profile-content-wrap">
            <p className="profile-name"> {currentUser['name']}</p>
            <Link to='/profilepage' className='profile-see-link'>
              See Profile</Link>
          </div>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/privacy.svg" className="link-menu-icon"></img>
          <Link to='/testpage' className='link-menu-link'>
            Privacy</Link>
        </div>
        <div className="link-menu">
          <img src="../../../media/icons/settings.svg" className="link-menu-icon"></img>
          <Link to='/profilepage' className='link-menu-link'>
            Settings</Link>
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