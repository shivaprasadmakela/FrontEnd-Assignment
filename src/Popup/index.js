// Popup.js
import React, { useEffect } from 'react';
import './index.css';
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Popup = () => {
  const participants = [{ "name": "shiva" },{ "name": "sai" }]
  const history = useNavigate();

  useEffect(() => {
    const popupElement = document.querySelector(".popup");
  
    if (popupElement) {
      setTimeout(() => {
        popupElement.style.display = "block";
      }, 1000);
  
      return () => {
        popupElement.style.display = "none";
      };
    }
  }, []);
  

  const handleGoHome = (event) => {
    event.preventDefault();
  
    history('/');
  }

  const handleClose = () => {
    document.querySelector(".popup").style.display = "none";
  };

  return (
    <div className="popup">
      <div >
        <h1>SCORE BOARD</h1>
        <div className="listTable">
          <div className="listNames">
            <p>Position</p>
            <p>Name</p>
            <p>Speed</p>
            <p>Start Time</p>
            <p>End Time</p>
          </div>
          {participants.map((participant, index) => (
            <div className="listNames listItems" key={index}>
              <p>{index+1}st</p>
              <p>{participant.name}</p>
              <p>{participant.speed}</p>
              <p>{participant.startTime}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bottomSection'>
        <button onClick={handleGoHome} className='homeButton'> <GoArrowLeft />
          Back To Home</button>
        <button onClick={handleClose} className='resetButton'> <MdOutlineRestartAlt /> Restart Race</button>
      </div>
    </div>
  );
};

export default Popup;
