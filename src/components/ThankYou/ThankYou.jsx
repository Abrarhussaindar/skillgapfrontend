import React, { useContext } from 'react';
import "../style.css"
import { multiStepContext } from '../../StepContext';

function ThankYou() {
    const {  setUserData, setFinalData, setCurrentStep } = useContext(multiStepContext);
    // const logo = require("../Decent Arcadia type 4.jpg");

    const handleClick = () => {
        setUserData("")
        setFinalData("")
        setCurrentStep(1)
    }
    return (
        <div className='TyMain'>
            {/* <div className='header'>
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <h4>J&K Skill Development Mission</h4>
                    <p className="first">Survey for youth aspiration and skill gap</p>
                    <p className="second">Youth aspiration questionnaire</p>
                </div>
            </div> */}
            {/* <div className='TyWrapper'> */}
                <h1>ThankYou!</h1>
                <p>Thank you for completing our survey!</p>

                
                <button className='another' onClick={handleClick}>Add Another Response</button>
            {/* </div> */}
        </div>
    );
}

export default ThankYou;