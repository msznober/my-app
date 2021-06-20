import React, { FC } from "react";
import './WorkspacesPage.css';
import ResumeWork from '../HomeMain/ResumeWork';

const WorkspacesPage: FC = () => {
  return (
    <div className="workspaces-main-wrapper">
      <div className="hero-image">
        <div className="hero-description">
          <div className="hero-icon-wrapper"><img src="../../../media/icons/entities2.svg" className="single-icon"></img></div>
          <div className="hero-text-wrapper">
            <h1>Coroporate holdings</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices magna ullamcorper sem tempus consectetur.</p>
          </div>
        </div>
      </div>
      <div className="workspace-blocks">
        <div className="single-block">
          <div className="single-icon-wrap"><img src="../../../media/icons/entities.svg" className="single-icon"></img></div>
          <h2 className="single-name">Explore your <b>entities</b></h2>
          <p className="single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices magna ullamcorper sem tempus consectetur.</p>
        </div>
        <div className="single-block">
          <div className="single-icon-wrap"><img src="../../../media/icons/ecosystem.svg" className="single-icon"></img></div>
          <h2 className="single-name">Structure the <b>ownership</b></h2>
          <p className="single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices magna ullamcorper sem tempus consectetur.</p>
        </div>
        <div className="single-block">
          <div className="single-icon-wrap"><img src="../../../media/icons/settings.svg" className="single-icon"></img></div>
          <h2 className="single-name">Define the <b>calendar</b></h2>
          <p className="single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices magna ullamcorper sem tempus consectetur.</p>
        </div>

      </div>
      <ResumeWork />
    </div>
  );
};

export default WorkspacesPage;