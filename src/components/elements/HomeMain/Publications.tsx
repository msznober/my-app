import { FC, useContext, useState } from 'react';
import { PostsContext } from '../../../App';
import './HomeMain.css';

export const Publications: FC = () => {
  const postsData = useContext(PostsContext);

  return (

    <div className="publications">
      <div className="featured-publication">
        <img src={postsData['photos'][0].url} className="featured-image"></img>
        <div className="featured-publication-box">
          <p className="box-content">{postsData['posts'][0].title}</p>
          <div className="meta-box">
            <p className="meta-date">7 jan. 2020</p>
            <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
            <p className="meta-name">{postsData['users'][0].name}</p>
          </div>
        </div>
      </div>

      <div className="latest-publications">
        <h1 className="latest-title">Latest publications</h1>
        <div className="latest-publications-list">
          <div className="publication">
            <div className="publication-avatar">
              <img src={postsData['photos'][1].url} className="featured-single-image"></img>
            </div>
            <div className="publications-wrap">
              <p className="publication-content">{postsData['posts'][1].title}.</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">{postsData['users'][1].name}</p>
              </div>
            </div>
          </div>
          <div className="publication">
            <div className="publication-avatar">
              <img src={postsData['photos'][2].url} className="featured-single-image"></img>
            </div>
            <div className="publications-wrap">
              <p className="publication-content">{postsData['posts'][2].title}</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">{postsData['users'][2].name}</p>
              </div>
            </div>
          </div>
          <div className="publication">
            <div className="publication-avatar">
              <img src={postsData['photos'][3].url} className="featured-single-image"></img>
            </div>
            <div className="publications-wrap">
              <p className="publication-content">{postsData['posts'][3].title}</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">{postsData['users'][3].name}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="more-publications">See more publications</p>
      </div>
    </div>
  );
};

export default Publications;