import React, { FC, useState, useContext, useEffect } from "react";
import './ProfilePage.css';
import { CurrentUserContext, UsersDataContext } from '../../../App';

const ProfilePage: FC = () => {
  const currentUser = useContext(CurrentUserContext);
  const usersData = useContext(UsersDataContext);
  const [editSection, setEditSection] = useState<boolean>(false);
  const [editTables, setEditTables] = useState<boolean>(false);

  useEffect(() => {
    const inputs = document.querySelectorAll('.features-input');
    const tablesData = document.querySelectorAll('.table-input');
    if (editSection === true) {
      inputs.forEach((input) => input.removeAttribute('disabled'));
      inputs.forEach((input) => input.classList.add('edit-active'));
    }

    if (editSection === false) {
      inputs.forEach((input) => input.setAttribute('disabled', 'true'));
      inputs.forEach((input) => input.classList.remove('edit-active'));
    }

    if (editTables === true) {
      tablesData.forEach((tableData) => tableData.removeAttribute('disabled'));
      tablesData.forEach((tableData) => tableData.classList.add('table-edit-active'));
    }

    if (editTables === false) {
      tablesData.forEach((tableData) => tableData.setAttribute('disabled', 'true'));
      tablesData.forEach((tableData) => tableData.classList.remove('table-edit-active'));
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
            <img src="../../../media/icons/comment.svg" className="action-icon"></img><h3>Message</h3></div>
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
          <h5>Internal correspondants</h5>
          <div className="people-list">
            <div className="people-single">
              <img src={usersData['photos'][1].url} className="people-single-img"></img>
              <h6>{usersData['users'][1].name}</h6>
              <img src="../../../media/icons/comment.svg" className="people-single-svg"></img>
              <h6>Message</h6>
              <img src="../../../media/icons/people.svg" className="people-single-svg"></img>
              <h6>Profile</h6>
            </div>
            <div className="people-single">
              <img src={usersData['photos'][2].url} className="people-single-img"></img>
              <h6>{usersData['users'][2].name}</h6>
              <img src="../../../media/icons/comment.svg" className="people-single-svg"></img>
              <h6>Message</h6>
              <img src="../../../media/icons/people.svg" className="people-single-svg"></img>
              <h6>Profile</h6>
            </div>
          </div>
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
              <td><input type='text' className='table-input' placeholder="Op Promentech" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault HQ" disabled /></td>
              <td><input type='text' className='table-input' placeholder="USA" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#M&A" disabled /></td>
              <td><input type='text' className='table-input' placeholder="20/02/2019" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Clifford Chance" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="Op Latande" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault R" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Italia" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#Social" disabled /></td>
              <td><input type='text' className='table-input' placeholder="18/02/2019" disabled /></td>
              <td><input type='text' className='table-input' placeholder="SVZ" disabled /></td>
            </tr>
          </table>
          <h4>Internal reviews</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
              </tr>
            </thead>
            <tr>
              <td><input type='text' className='table-input' placeholder="Operation" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault Company" disabled /></td>
              <td><input type='text' className='table-input' placeholder="France" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#TAX" disabled /></td>
              <td><input type='text' className='table-input' placeholder="20/01/2018" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="Op Promentech" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault HQ" disabled /></td>
              <td><input type='text' className='table-input' placeholder="USA" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#M&A" disabled /></td>
              <td><input type='text' className='table-input' placeholder="20/02/2019" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="Op Latande" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Renault R" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Italia" disabled /></td>
              <td><input type='text' className='table-input' placeholder="#Social" disabled /></td>
              <td><input type='text' className='table-input' placeholder="18/02/2019" disabled /></td>
            </tr>
          </table>
          <h4>Amount of fees</h4>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Cost center</th>
                <th>Total amount</th>
                <th>Law firm</th>
              </tr>
            </thead>
            <tr>
              <td><input type='text' className='table-input' placeholder="2019" disabled /></td>
              <td><input type='text' className='table-input' placeholder="CS 153" disabled /></td>
              <td><input type='text' className='table-input' placeholder="3500$" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Clifford chance" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="2018" disabled /></td>
              <td><input type='text' className='table-input' placeholder="CS 153" disabled /></td>
              <td><input type='text' className='table-input' placeholder="9500$" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Linklaters" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="2017" disabled /></td>
              <td><input type='text' className='table-input' placeholder="CS 47" disabled /></td>
              <td><input type='text' className='table-input' placeholder="10500$" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Linklaters" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="" disabled /></td>
              <td><input type='text' className='table-input' placeholder="CS 153" disabled /></td>
              <td><input type='text' className='table-input' placeholder="18500$" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Linklaters" disabled /></td>
            </tr>
            <tr>
              <td><input type='text' className='table-input' placeholder="" disabled /></td>
              <td><input type='text' className='table-input' placeholder="CS 32" disabled /></td>
              <td><input type='text' className='table-input' placeholder="15500$" disabled /></td>
              <td><input type='text' className='table-input' placeholder="Linklaters" disabled /></td>
            </tr>
          </table>
        </div>
        <div className="edit"><button className="edit-button" onClick={() => setEditTables(!editTables)}><img src="../../../media/icons/pen.svg" className="button-icon"></img></button></div>
      </div>

    </div>

  );
};

export default ProfilePage;