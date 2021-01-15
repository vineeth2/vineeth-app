import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, styled } from '@material-ui/core';
import Modal from 'react-modal';
/*import Company from './Company';*/

function Main() {
  const [companies, setCompanies] = useState([]);

  function handleAddButton() {
    setCompanies(companies.concat(<Button
      className="New"
      variant="contained"
      color="primary"
      style={{ marginLeft: '10px', marginTop: '10px', fontSize: '20px' }}
      onClick={() => setModalIsOpen(true)}> New </Button>));
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="Main">

      <Button
        className="addCompany"
        variant="contained"
        color="disabled"
        style={{fontSize: '64px',marginLeft: '5px', marginRight: '5px'}}
        onClick={handleAddButton}> + </Button>

      <Modal isOpen={modalIsOpen}>
        <h2> New Company </h2>
        <p> Application Info </p>
        <div>
          <button onClick={() => setModalIsOpen(false)}> Close </button>
        </div>
      </Modal>

      {companies}

    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

export default Main;