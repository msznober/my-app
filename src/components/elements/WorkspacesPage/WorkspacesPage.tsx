import React, { FC } from "react";
import './WorkspacesPage.css';
import ResumeWork from '../HomeMain/ResumeWork';

const WorkspacesPage: FC = () => {
  return (
    <div className="workspaces-main-wrapper">
      <div className="hero-image"></div>
      <div className="workspace-blocks">
        <div className="single-block"></div>
        <div className="single-block"></div>
        <div className="single-block"></div>
      </div>
      <ResumeWork />
    </div>
  );
};

export default WorkspacesPage;