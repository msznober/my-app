import { FC } from 'react';
import './TopBar.css';
import useDropdown from 'react-dropdown-hook';

const ExpandedMenu: FC = () => {

  return (
    <div className="expanded-menu-wrapper">
      <div className="search-bar">
        <input type='text' placeholder='Filter...' className='searchInput' />
      </div>
      <span>Element 1</span>
      <span>Element 2</span>
      <span>Element 3</span>
      <span>Element 4</span>
    </div>
  );
};
export default ExpandedMenu;