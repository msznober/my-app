import { FC } from 'react';
import './HomeMain.css';

export const Publications: FC = () => {
  return (

    <div className="publications">
      <div className="featured-publication">
        <div className="featured-publication-box">
          <p className="box-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="meta-box">
            <p className="meta-date">7 jan. 2020</p>
            <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
            <p className="meta-name">John Doe</p>
          </div>
        </div>
      </div>

      <div className="latest-publications">
        <h1 className="latest-title">Latest publications</h1>
        <div className="latest-publications-list">
          <div className="publication">
            <div className="publication-avatar"></div>
            <div className="publications-wrap">
              <p className="publication-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">John Doe</p>
              </div>
            </div>
          </div>
          <div className="publication">
            <div className="publication-avatar"></div>
            <div className="publications-wrap">
              <p className="publication-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">John Doe</p>
              </div>
            </div>
          </div>
          <div className="publication">
            <div className="publication-avatar"></div>
            <div className="publications-wrap">
              <p className="publication-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="publication-meta-box">
                <p className="meta-date">7 jan. 2020</p>
                <img src="../../../media/icons/people.svg" className="meta-avatar"></img>
                <p className="meta-name">John Doe</p>
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