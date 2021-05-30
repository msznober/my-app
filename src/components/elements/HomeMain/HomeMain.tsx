import { FC } from 'react';
import './HomeMain.css';
import Publications from './Publications';
import Workspaces from './Workspaces';
import ResumeWork from './ResumeWork';

export const HomeMain: FC = () => {
  return (
    <div className="home-main-wrapper">
      <>
        <Publications />
        <Workspaces />
        <ResumeWork />
      </>
    </div>
  );
};

export default HomeMain;