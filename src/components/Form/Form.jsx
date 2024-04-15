import React  from 'react';
import "../style.css";
// import FirstForm from '../FirstFrom/FirstForm';
// import SpecificQuestions from '../SpecificQuestions/SpecificQuestions';
import GenForm from '../GenForm/GenForm';
import SpecificQuestions from '../SpecificQuestions/SpecificQuestions';


function Form() {

    const logo = require("../Decent Arcadia type 4.jpg");
    return (
        <div className='Container'>
            <header>
                <img className="logo" src={logo} alt="logo" />

                <div className='HeaderDescription'>
                    <h4>J&K Skill Development Mission</h4>
                    <p className="first">Survey for youth aspiration and skill gap</p>
                    <p className="second">Youth aspiration questionnaire</p>
                </div>
            </header>
            <main>
                <div className='mainHeading'>
                    <h4>
                        Skill Gap Questionnaire
                    </h4>
                    <h4>1 / 2</h4>
                    {/* <h1><span className="de">DeCent</span><span className="ar">ArCadia </span></h1> */}
                </div>
                <form>
                    {/* <GenForm /> */}
                    <SpecificQuestions />

                    <div className='btns'>
                        <button>Back</button>
                        <button>Next</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Form;