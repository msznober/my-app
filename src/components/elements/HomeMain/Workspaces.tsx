import { FC } from 'react';
import './HomeMain.css';

export const Workspaces: FC = () => {
  return (
    <div className="workspaces">
      <h1 className="workspace-title">Workspaces</h1>
      <div className="workspaces-wrapper">
        <div className="workspace-box">
          <div className="workspace-top"></div>
          <div className="workspace-bottom">
            <div className="workspace-title">
              <div className="workspace-icon-box"><img src="../../../media/icons/entities2.svg" className="workspace-icon"></img></div>
              <h3>Client contract</h3>
            </div>
            <div className="workspace-meta">
              <img src="../../../media/icons/entities.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">Contract</p>
              <img src="../../../media/icons/people.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">150 users</p>
            </div>
            <div className="workspace-update">
              <p>Last update 2 days ago</p>
            </div>
          </div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
          <div className="workspace-bottom">
            <div className="workspace-title">
              <div className="workspace-icon-box"><img src="../../../media/icons/entities2.svg" className="workspace-icon"></img></div>
              <h3>Suppiler contract</h3>
            </div>
            <div className="workspace-meta">
              <img src="../../../media/icons/entities.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">Contract</p>
              <img src="../../../media/icons/people.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">25 users</p>
            </div>
            <div className="workspace-update">
              <p>Last update 2 days ago</p>
            </div>
          </div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
          <div className="workspace-bottom">
            <div className="workspace-title">
              <div className="workspace-icon-box"><img src="../../../media/icons/entities2.svg" className="workspace-icon"></img></div>
              <h3>Corporate</h3>
            </div>
            <div className="workspace-meta">
              <img src="../../../media/icons/entities.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">Corporate</p>
              <img src="../../../media/icons/people.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">25 users</p>
            </div>
            <div className="workspace-update">
              <p>Last update 2 days ago</p>
            </div>
          </div>
        </div>
        <div className="workspace-box">
          <div className="workspace-top"></div>
          <div className="workspace-bottom">
            <div className="workspace-title">
              <div className="workspace-icon-box"><img src="../../../media/icons/entities2.svg" className="workspace-icon"></img></div>
              <h3>Group norms</h3>
            </div>
            <div className="workspace-meta">
              <img src="../../../media/icons/entities.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">Norms</p>
              <img src="../../../media/icons/people.svg" className="workspace-meta-icon"></img>
              <p className="workspace-category">25 users</p>
            </div>
            <div className="workspace-update">
              <p>Last update 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Workspaces;