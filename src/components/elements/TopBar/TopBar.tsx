import { FC } from 'react';
import './TopBar.css';
import IconsPanel from './IconsPanel';
import SearchBar from './SearchBar';
import DropdownMenu from './DropdownMenu';

export const TopBar: FC = () => {

  return (
    <div className='topbar-wrapper'>
      <img src="../../../media/logo.png" className="logo"></img>
      <DropdownMenu />
      <SearchBar />
      <IconsPanel />
    </div>
  );
};

export default TopBar;