import { FC } from 'react';
import './TopBar.css';

const IconsPanel: FC = () => {
  return (
    <div className='icons-container'>
      <img src="../../../media//icons/house.svg"></img>
      <div className="icon-background">
        <img src="../../../media//icons/comments.svg"></img>
      </div>
      <div className="icon-background">
        <img src="../../../media//icons/bell.svg"></img>
      </div>
    </div>
  );
};
export default IconsPanel;