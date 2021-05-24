import { FC } from 'react';
import './TopBar.css';
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from './ExpandedMenu';

const DropdownMenu: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };


  return (
    <div ref={wrapperRef}>
      <button className="dropdown-wrapper" onClick={() => menuHandler()}>
        <div className="dropdown-left">
          <img className="dropdown-home" src="../../../media/icons/house.svg" />
          <span>Home</span>
        </div>
        <img className="dropdown-arrow" src="../../../media/icons/arrow-down.svg" />
      </button>
      {dropdownOpen && (
        <ExpandedMenu />
      )}
    </div >
  );
};
export default DropdownMenu;