import React, { FC, useState, useContext } from "react";
import './EntitiesPageList.css';
import { UsersDataContext } from '../../../App';
import { Link } from 'react-router-dom';

const EntitiesPage: FC = () => {
  const usersData = useContext(UsersDataContext);

  return (
    <div className="entities-main-wrapper">
      <div className="hero-wrapper">
        <h1 className="entities-title">Entities</h1>
        <div className="change-view">
          <Link to='/entitiespage'>
            <button> <img src="../../../media/icons/grid.svg" className="button-icon"></img> </button></Link>
          <button> <img src="../../../media/icons/list.svg" className="button-icon"></img></button>
        </div>
      </div>
      <div className="entities-blocks-wrapper">
        <div className="single-entity-list">
          <img src={usersData['photos'][0].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][0].company.name}</h3>
            <p className="entity-adress">{usersData['users'][0].address.street}, {usersData['users'][0].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][1].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][1].company.name}</h3>
            <p className="entity-adress">{usersData['users'][1].address.street}, {usersData['users'][1].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][2].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][2].company.name}</h3>
            <p className="entity-adress">{usersData['users'][2].address.street}, {usersData['users'][2].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][3].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][3].company.name}</h3>
            <p className="entity-adress">{usersData['users'][3].address.street}, {usersData['users'][3].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][4].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][4].company.name}</h3>
            <p className="entity-adress">{usersData['users'][4].address.street}, {usersData['users'][4].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][5].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][5].company.name}</h3>
            <p className="entity-adress">{usersData['users'][5].address.street}, {usersData['users'][5].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][6].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][6].company.name}</h3>
            <p className="entity-adress">{usersData['users'][6].address.street}, {usersData['users'][6].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][7].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][7].company.name}</h3>
            <p className="entity-adress">{usersData['users'][7].address.street}, {usersData['users'][7].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][8].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][8].company.name}</h3>
            <p className="entity-adress">{usersData['users'][8].address.street}, {usersData['users'][8].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][9].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][9].company.name}</h3>
            <p className="entity-adress">{usersData['users'][9].address.street}, {usersData['users'][9].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][0].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][0].company.name}</h3>
            <p className="entity-adress">{usersData['users'][0].address.street}, {usersData['users'][0].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][1].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][1].company.name}</h3>
            <p className="entity-adress">{usersData['users'][1].address.street}, {usersData['users'][1].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][2].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][2].company.name}</h3>
            <p className="entity-adress">{usersData['users'][2].address.street}, {usersData['users'][2].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][3].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][3].company.name}</h3>
            <p className="entity-adress">{usersData['users'][3].address.street}, {usersData['users'][3].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][4].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][4].company.name}</h3>
            <p className="entity-adress">{usersData['users'][4].address.street}, {usersData['users'][4].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][5].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][5].company.name}</h3>
            <p className="entity-adress">{usersData['users'][5].address.street}, {usersData['users'][5].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][6].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][6].company.name}</h3>
            <p className="entity-adress">{usersData['users'][6].address.street}, {usersData['users'][6].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][7].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][7].company.name}</h3>
            <p className="entity-adress">{usersData['users'][7].address.street}, {usersData['users'][7].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][8].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][8].company.name}</h3>
            <p className="entity-adress">{usersData['users'][8].address.street}, {usersData['users'][8].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][9].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][9].company.name}</h3>
            <p className="entity-adress">{usersData['users'][9].address.street}, {usersData['users'][9].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][0].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][0].company.name}</h3>
            <p className="entity-adress">{usersData['users'][0].address.street}, {usersData['users'][0].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][1].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][1].company.name}</h3>
            <p className="entity-adress">{usersData['users'][1].address.street}, {usersData['users'][1].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][2].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][2].company.name}</h3>
            <p className="entity-adress">{usersData['users'][2].address.street}, {usersData['users'][2].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][3].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][3].company.name}</h3>
            <p className="entity-adress">{usersData['users'][3].address.street}, {usersData['users'][3].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][4].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][4].company.name}</h3>
            <p className="entity-adress">{usersData['users'][4].address.street}, {usersData['users'][4].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][5].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][5].company.name}</h3>
            <p className="entity-adress">{usersData['users'][5].address.street}, {usersData['users'][5].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][6].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][6].company.name}</h3>
            <p className="entity-adress">{usersData['users'][6].address.street}, {usersData['users'][6].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][7].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][7].company.name}</h3>
            <p className="entity-adress">{usersData['users'][7].address.street}, {usersData['users'][7].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][8].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][8].company.name}</h3>
            <p className="entity-adress">{usersData['users'][8].address.street}, {usersData['users'][8].address.city}</p>
          </div>
        </div>
        <div className="single-entity-list">
          <img src={usersData['photos'][9].url} className="entity-logo"></img>
          <div className="entity-content">
            <h3 className="entity-title">{usersData['users'][9].company.name}</h3>
            <p className="entity-adress">{usersData['users'][9].address.street}, {usersData['users'][9].address.city}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default EntitiesPage;