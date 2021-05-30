import { FC } from 'react';
import './HomeMain.css';

export const Workspaces: FC = () => {
  return (
    <div className="workspaces">
      <h1 className="workspace-title">Workspaces</h1>
      <div className="workspaces-wrapper">
        <div className="workspace-box">
          <div className="workspace-top"></div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
        </div>
      </div>
    </div>

  );
};

export default Workspaces;