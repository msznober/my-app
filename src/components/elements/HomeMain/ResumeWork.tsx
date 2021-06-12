import { FC, useState, useContext } from 'react';
import './HomeMain.css';
import { UsersDataContext, ResumeWorkContext } from '../../../App';

export const ResumeWork: FC = () => {
  const resumeWork = useContext(ResumeWorkContext);
  const usersData = useContext(UsersDataContext);

  return (
    <div className="resume-work">
      <div className="resume-header">
        <h1 className="resume-title">Resume your work</h1>
        <div className="resume-search">
          <input type='text' placeholder='Filter by title...' className='searchInput'
          />
        </div>
      </div>
      <div className="resume-publications">
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][0].name}</h3>
          <p className="resume-content">{resumeWork['comments'][0].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][0].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][0].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][0].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][1].name}</h3>
          <p className="resume-content">{resumeWork['comments'][1].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][1].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][1].name}.</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][1].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][2].name}</h3>
          <p className="resume-content">{resumeWork['comments'][2].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][2].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][2].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][2].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][3].name}</h3>
          <p className="resume-content">{resumeWork['comments'][3].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][3].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][3].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][3].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][4].name}</h3>
          <p className="resume-content">{resumeWork['comments'][4].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][4].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][4].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][4].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][5].name}</h3>
          <p className="resume-content">{resumeWork['comments'][5].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][5].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][5].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][5].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][6].name}</h3>
          <p className="resume-content">{resumeWork['comments'][6].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][6].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][6].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][6].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][7].name}</h3>
          <p className="resume-content">{resumeWork['comments'][7].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][7].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][7].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][7].name}</p>
          </div>
        </div>
        <div className="resume-publication">
          <h3 className="resume-title">{resumeWork['comments'][8].name}</h3>
          <p className="resume-content">{resumeWork['comments'][8].body}</p>
          <div className="resume-meta-wrapper">
            <div className="company-image"><img src={usersData['photos'][8].url} className="company-logo"></img></div>
            <p className="resume-company">{usersData['users'][8].name}</p>
            <img src="../../../media/icons/entities.svg" className="resume-icon"></img>
            <p className="resume-category">Corporate</p>
            <p className="resume-last-update">Updated 3 days ago by {usersData['users'][8].name}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ResumeWork;