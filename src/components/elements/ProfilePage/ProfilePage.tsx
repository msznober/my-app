import React, { FC, useState, useContext, useEffect } from "react";
import './ProfilePage.css';
import { CurrentUserContext } from '../../../App';

const ProfilePage: FC = () => {
  const currentUser = useContext(CurrentUserContext);
  const [editSection, setEditSection] = useState<boolean>(false);
  const [editTables, setEditTables] = useState<boolean>(false);

  useEffect(() => {
    const inputs = document.querySelectorAll('.features-input');
    const tablesData = document.querySelectorAll('.table-input');
    if (editSection === true) {
      inputs.forEach((input) => input.removeAttribute('disabled'));
    }

    if (editSection === false) {
      inputs.forEach((input) => input.setAttribute('disabled', 'true'));
    }

    if (editTables === true) {
      tablesData.forEach((tableData) => tableData.removeAttribute('disabled'));
    }

    if (editTables === false) {
      tablesData.forEach((tableData) => tableData.setAttribute('disabled', 'true'));
    }

  }, [editSection, editTables]);

  return (
    <div className="profile-main-wrapper">
      <div className="user-info">
        <div className="user-info-image">
          <img src={currentUser['thumbnailUrl']} className="avatar"></img></div>
        <div className="user-info-data">
          <h1 className="user-info-data-name"> {currentUser['name']}</h1>
          <h2> {currentUser['company'] ? currentUser['company']['name'] : 'company name'}</h2>
          <h2> {currentUser['address'].city}</h2>
        </div>
        <div className="user-info-contact">
          <h2> {currentUser['email']}</h2>
          <h2> {currentUser['phone']}</h2>
        </div>
        <div className="user-action">
          <div className="action-single-wrap">
            <img src="../../../media/icons/publications.svg" className="action-icon"></img><h3>Message</h3></div>
          <div className="action-single-wrap">
            <img src="../../../media/icons/ecosystem.svg" className="action-icon"></img><h3>Create a request</h3></div>
          <div className="action-single-wrap">
            <img src="../../../media/icons/people.svg" className="action-icon"></img><h3>Add to a cluster</h3></div>
        </div>
      </div>
      <hr></hr>
      <div className="features-info">
        <div className="features-content">
          <h4>Expertise</h4>
          <input type='text' className='features-input' placeholder="Mergers and acquisition" disabled />
          <h4>Specialities</h4>
          <input type='text' className='features-input' placeholder="Cross border operation" disabled />
          <input type='text' className='features-input' placeholder="Transaction over 500M $" disabled />
          <h4>Admission to practite law</h4>
          <input type='text' className='features-input' placeholder="Paris bar associacion" disabled />
          <input type='text' className='features-input' placeholder="Tunisian bar associacion" disabled />
          <h4>Countries</h4>
          <input type='text' className='features-input' placeholder="Tunisia" disabled />
        </div>
        <div className="edit"><button className="edit-button" onClick={() => setEditSection(!editSection)}><img src="../../../media/icons/pen.svg" className="button-icon"></img></button></div>
      </div>
      <hr></hr>
      <div className="panel-content">
        <div className="panel-content-wrap">
          <h4>Panel informations</h4>
          <h5>Hourly fee</h5>
          <h6>610$/hour (Negociated)</h6>
          <h5>Terms & conditions</h5>
          <h6>Monthly 10k$ retainer - see with Jeanny Smith</h6>
          <div className="icon-wrap"><img src="../../../media/icons/file.svg" className="button-icon"></img><p>attachment.jpg</p></div>
          <h5>Services & projects</h5>
          <h6>Corporate M&A and international acquisitions</h6>
          <h4>Internal correspondants</h4>
          <h4>Proposals</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
                <th>Firm</th>
              </tr>
            </thead>
            <tr>
              <td><input type='text' className='table-input' placeholder="Operation" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault Company" disabled /></td>
              <td><input type='text' className='table-input' placeholder="France" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#TAX" disabled /></td>
              <td><input type='text' className='table-input' placeholder="20/01/2018" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Racine" disabled /></td>
            </tr>
            <tr>
              <td>Op Promentech</td>
              <td>Renault HQ</td>
              <td>USA</td>
              <td>#M&A</td>
              <td>20/02/2019</td>
              <td>Clifford Chance</td>
            </tr>
            <tr>
              <td>Op Latande</td>
              <td>Renault R</td>
              <td>Italia</td>
              <td>#Social</td>
              <td>18/02/2019</td>
              <td>SVZ</td>
            </tr>
          </table>
          <h4>Internal reviews</h4>
          <h4>Amount of fees</h4>
        </div>
        <div className="edit"><button className="edit-button" onClick={() => setEditTables(!editTables)}><img src="../../../media/icons/pen.svg" className="button-icon"></img></button></div>
      </div>

    </div>

  );
};

export default ProfilePage;