import React, { useContext, useState } from 'react';
import "../style.css";
import FirstForm from '../FirstFrom/FirstForm';
// import SpecificQuestions from '../SpecificQuestions/SpecificQuestions';
import GenForm from '../GenForm/GenForm';
import SpecificQuestions from '../SpecificQuestions/SpecificQuestions';
import { multiStepContext } from '../../StepContext';
import axios from '../../axios';
import ThankYou from '../ThankYou/ThankYou';


function Form() {

    const { currentStep, userData, setCurrentStep } = useContext(multiStepContext);
    const [clicked, setClicked] = useState(false)


    const handleClick = () => {
        setClicked(true)
    }
    const submitUserData = async (e) => {
        // e.preventDefault();
        handleClick();
        e.currentTarget.disabled = true;
        const data = userData
        // console.log("data: ", data);
        try {

            await axios.post("/user/create", data)

            setCurrentStep(4)
        } catch (err) {
            console.log(err);
        }

    }
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <GenForm />
            case 2:
                return <FirstForm />
            case 3:
                return <SpecificQuestions />
            case 4:
                return <ThankYou />
            default:
                return ""
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentStep(i => {
            if (i >= 4) return i;
            return i + 1
        })
    }
    const logo = require("../Decent Arcadia type 4.jpg");
    return (
        <div className={currentStep === 4 ? "TyContainer" : "Container"}>
            <header>
                {
                    currentStep === 1 || 4
                        ?
                        <>
                            <img className="logo" src={logo} alt="logo" />

                            <div>
                                <h4>J&K Skill Development Mission</h4>
                                <p className="first">Survey for youth aspiration and skill gap</p>
                                <p className="second">Youth aspiration questionnaire</p>
                            </div>
                        </>
                        :
                        <h1>
                            <span className="de">DeCent</span><span className="ar">ArCadia </span>
                        </h1>

                }
            </header>
            <main className={currentStep === 4 ? "TyWrapper" : ""}>
                <div className='mainHeading'>
                    <h4>
                        Skill Gap Questionnaire
                    </h4>
                    {
                        currentStep === 4
                            ? ""
                            : <h4>
                                {currentStep} / 4
                            </h4>
                    }

                </div>
                <form onSubmit={handleSubmit}>
                    {
                        showStep(currentStep)
                    }

                    <div className='btns'>
                        {
                            currentStep === 4
                                ? ""
                                :
                                <>
                                    {
                                        currentStep !== 1
                                            ?
                                            <button type="button" onClick={() => setCurrentStep(i => { if (i <= 0) return i; return i - 1 })}>Back</button>
                                            : ""
                                    }
                                    {
                                        currentStep === 3
                                            ?
                                            <button type="submit" disabled={clicked} className="finishBtn" onClick={submitUserData}>Finish</button>

                                            :
                                            <button type="submit">Next</button>
                                    }
                                </>
                        }
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Form;