import React, { useEffect, useState ,useMemo } from 'react';
import './index.css';
import Popup from '../Popup/index';


const Track = ({ location }) => {
  //console.log("Location object in Track:", location);

  const participants = [{"name":"shiva"},{"name":"sai"}]

  const [time, setTime] = useState(2);
  const [showResults, setShowResults] = useState(false);

  console.log("Participants in Track:", participants); // Add this line for debugging

  useEffect(() => {
    if (!participants || participants.length === 0) {
      // Handle the case where participants are not available
      //console.log('No participants found');
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          // Callback function when the timer reaches 0
          setShowResults(true);
          console.log('Timer reached 0');
          return 0;
        }
      });
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [participants]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <>
      <div className="mainTrackContainer">
        <div className="participantTracks">
          <div className='middleContainer'>
            <div className='timerContainer'>
              <p className='para1'>Elapsed Time</p>
              <h1 className='para1'>{formatTime(time)}</h1>
            </div>
            <p>Track length 400m</p>
          </div>
          {participants && participants.length > 0 && participants.map((participant, index) => (
            <div key={index} className="participantTrack">
              <div className='span'></div>
              <p className='partName'>{participant.name}</p>
            </div>
          ))}
        </div>

        {showResults && (
          
          <Popup/>
        
        )}
      </div>
    </>
  );
};

export default Track;
