import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from '@material-ui/core';
import Company from './Company';
import Modal from 'react-modal';

function Main() {
  const [companies, setCompanies] = useState([]);

  function handleAddButton() {
    setCompanies(companies.concat(<Button variant="contained" color="primary"
      onClick={() => setModalIsOpen(true)}>New Company</Button>));
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="Main">
      <Button variant="contained" color="secondary"
        onClick={handleAddButton}>Add Company</Button>

      <Modal isOpen={modalIsOpen}>
        <h2> New Company </h2>
        <p> Application Info </p>
        <div>
          <button onClick={() => setModalIsOpen(false)}> Close </button>
        </div>
      </Modal>

      <div>
        {companies}
      </div>

    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

export default Main;