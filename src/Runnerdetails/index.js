import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './index.css';

function RunnerDetails() {
    const [inputName, setInputName] = useState("");
    const [inputSpeed, setInputSpeed] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [participants, setParticipants] = useState([]);
    const history = useNavigate();

    const handleStartRace = (event) => {

        event.preventDefault();

        // Check if any of the input fields is empty
        if (participants.length === 0) {
            alert("Add Participants");
            return;
        }
        // Navigate to the new page
       // console.log("Participants in RunnerDetails:", participants);
        history("/track", {replace: true} ,{ state: { participants } });
    };

    const handleInputName = (event) => {
        setInputName(event.target.value);
    };

    const handleInputSpeed = (event) => {
        setInputSpeed(event.target.value);
    };

    const handleInputTime = (event) => {
        setInputTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if any of the input fields is empty
        if (!inputName || !inputSpeed || !inputTime) {
            alert("All inputs are required");
            return;
        }

        // Create a new participant object
        const newParticipant = {
            name: inputName,
            speed: inputSpeed,
            startTime: inputTime,
        };

        // Update the participants list
        setParticipants([...participants, newParticipant]);

        // Clear the input fields
        setInputName("");
        setInputSpeed("");
        setInputTime("");
    };


    return (
        <>
            <div className="mainContainer">
                <div className="runnerContainer">
                    <div>
                        <h1 className="runnerHead">RUNNER DETAILS</h1>
                        <p className="para">*You can add max 10 participants</p>
                    </div>

                    <form className="formContainer" onSubmit={handleSubmit}>
                        <label className="inputContainer">
                            <span>Name</span>
                            <input type="text" className="input" value={inputName} onChange={handleInputName} />
                        </label>
                        <label className="inputContainer">
                            <span>Speed</span>
                            <input type="text" className="input" value={inputSpeed} onChange={handleInputSpeed} />
                        </label>
                        <label className="inputContainer">
                            <span>Start Time</span>
                            <input type="text" className="input" value={inputTime} onChange={handleInputTime} />
                        </label>

                        <button type="submit" className="button">
                            + ADD RUNNER
                        </button>
                    </form>
                </div>
                <div className="listContainer">
                    <h1>LIST OF PARTICIPANTS</h1>
                    <div className="listTable">
                        <div className="listNames">
                            <p>Name</p>
                            <p>Speed</p>
                            <p>Start Time</p>
                            <p>End Time</p>
                        </div>
                        {participants.map((participant, index) => (
                            <div className="listNames listItems" key={index}>
                                <p>{participant.name}</p>
                                <p>{participant.speed}</p>
                                <p>{participant.startTime}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bottomRight">
                        <hr className="horizontalLine" />

                        <button type="button" className="bottomButton" onClick={handleStartRace}>
                            Start Race
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RunnerDetails;
