import React, { useContext, useState } from 'react';
import "../style.css"
import { multiStepContext } from '../../StepContext';

function SpecificQuestions() {
    const { userData, setUserData } = useContext(multiStepContext);
    const [selectedOptions, setSelectedOptions] = useState({});
    // console.log("so: ", selectedOptions)
    const handleCheckboxChange = (option, rating) => {
        setSelectedOptions(prevState => {
            const updatedOptions = {
                ...prevState,
                [option]: rating
            };
            setScale(updatedOptions);
            return updatedOptions;
        });
    };

    const setScale = (updatedOptions) => {
        setUserData(prevUserData => ({
            ...prevUserData,
            "Scale": updatedOptions
        }));
    };
    function getRatingDescription(rating) {
        switch (rating) {
            case 1:
                return 'Poor';
            case 2:
                return 'Fair';
            case 3:
                return 'Average';
            case 4:
                return 'Good';
            case 5:
                return 'Excellent';
            default:
                return '';
        }
    }
    return (


        <div className='mainForm'>
            <div className='indiDetails'>
                <label>Select Sector</label>
                <div className="customSelect">
                    <select value={userData['SectorQuestionnarie']} required onChange={(e) => setUserData({ ...userData, "SectorQuestionnarie": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Tourism and hospitality questionnaire">Tourism and hospitality questionnaire</option>
                        <option value="Agriculture and allied questionnaire">Agriculture and allied questionnaire</option>
                        <option value="Handicrafts and allied questionnaire">Handicrafts and allied questionnaire</option>
                        <option value="Construction and real estate">Construction and real estate</option>
                        <option value="Manufacturing and industries sectors">Manufacturing and industries sectors</option>
                        <option value="Banking finance and insurance sectors">Banking finance and insurance sectors</option>
                        <option value="IT and allied sectors">IT and allied sectors</option>
                        <option value="Trade and commerce Sectors">Trade and commerce Sectors</option>
                        <option value="Training, education and allied sectors">Training, education and allied sectors</option>
                        <option value="Healthcare and allied sectors">Healthcare and allied sectors</option>
                        <option value="Transport and logistics">Transport and logistics</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            {
                userData.SectorQuestionnarie === "Tourism and hospitality questionnaire"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the tourism sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the tourism sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Hospitality (Hotels, Restaurants, etc.)">Hospitality (Hotels, Restaurants, etc.)</option>
                                    <option value="Tour Guiding">Tour Guiding</option>
                                    <option value="Adventure Tourism (Trekking, Mountaineering, etc.)">Adventure Tourism (Trekking, Mountaineering, etc.)</option>
                                    <option value="Cultural Tourism">Cultural Tourism</option>
                                    <option value="Eco-Tourism">Eco-Tourism</option>
                                    <option value="Travel Agency/Tour Operations">Travel Agency/Tour Operations</option>
                                    <option value="Other">Others (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the tourism sector? (1 being lowest, 5 being highest)</label>

                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Customer Service"
                                                checked={selectedOptions['Customer Service'] !== undefined}
                                                onChange={() => handleCheckboxChange('Customer Service', undefined)}
                                            />
                                            Customer Service:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="customerServiceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Customer Service'] === rating}
                                                        onChange={() => handleCheckboxChange('Customer Service', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Communication (Verbal and Written)"
                                                checked={selectedOptions['Communication (Verbal and Written)'] !== undefined}
                                                onChange={() => handleCheckboxChange('Communication (Verbal and Written)', undefined)}
                                            />
                                            Communication (Verbal and Written):
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="Communication(Verbal and Written)Rating"
                                                        value={rating}
                                                        checked={selectedOptions['Communication (Verbal and Written)'] === rating}
                                                        onChange={() => handleCheckboxChange('Communication (Verbal and Written)', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Cultural Awareness/Sensitivity"
                                                checked={selectedOptions['Cultural Awareness/Sensitivity'] !== undefined}
                                                onChange={() => handleCheckboxChange('Cultural Awareness/Sensitivity', undefined)}
                                            />
                                            Cultural Awareness/Sensitivity:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CulturalAwareness/SensitivityRating"
                                                        value={rating}
                                                        checked={selectedOptions['Cultural Awareness/Sensitivity'] === rating}
                                                        onChange={() => handleCheckboxChange('Cultural Awareness/Sensitivity', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Problem-Solving"
                                                checked={selectedOptions['Problem-Solving'] !== undefined}
                                                onChange={() => handleCheckboxChange('Problem-Solving', undefined)}
                                            />
                                            Problem-Solving:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="ProblemSolvingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Problem-Solving'] === rating}
                                                        onChange={() => handleCheckboxChange('Problem-Solving', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Teamwork/Collaboration"
                                                checked={selectedOptions['Teamwork/Collaboration'] !== undefined}
                                                onChange={() => handleCheckboxChange('Teamwork/Collaboration', undefined)}
                                            />
                                            Teamwork/Collaboration:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TeamworkCollaborationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Teamwork/Collaboration'] === rating}
                                                        onChange={() => handleCheckboxChange('Teamwork/Collaboration', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Leadership/Management"
                                                checked={selectedOptions['Leadership/Management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Leadership/Management', undefined)}
                                            />
                                            Leadership/Management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="LeadershipManagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Leadership/Management'] === rating}
                                                        onChange={() => handleCheckboxChange('Leadership/Management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Technical Skills"
                                                checked={selectedOptions['Technical Skills'] !== undefined}
                                                onChange={() => handleCheckboxChange('Technical Skills', undefined)}
                                            />
                                            Technical Skills:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TechnicalSkillsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Technical Skills'] === rating}
                                                        onChange={() => handleCheckboxChange('Technical Skills', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the tourism sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Lack of formal training opportunities">Lack of formal training opportunities</option>
                                    <option value="Insufficient infrastructure/resources">Insufficient infrastructure/resources</option>
                                    <option value="Limited access to skill development programs">Limited access to skill development programs</option>
                                    <option value="Low awareness about career opportunities in the tourism sector">Low awareness about career opportunities in the tourism sector</option>
                                    <option value="Rapidly changing demands and trends in the industry">Rapidly changing demands and trends in the industry</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the tourism sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to the tourism sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the tourism sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the tourism sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the tourism sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Professional associations and networking">Professional associations and networking</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the tourism sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the tourism sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the tourism sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the tourism sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Agriculture and allied questionnaire"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in agriculture or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of agriculture or allied sectors are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Crop cultivation">Crop cultivation</option>
                                    <option value="Horticulture">Horticulture</option>
                                    <option value="Animal husbandry">Animal husbandry</option>
                                    <option value="Dairy farming">Dairy farming</option>
                                    <option value="Poultry farming">Poultry farming</option>
                                    <option value="Fisheries">Fisheries</option>
                                    <option value="Agroforestry">Agroforestry</option>
                                    <option value="Agricultural machinery operation and maintenance">Agricultural machinery operation and maintenance</option>
                                    <option value="Agricultural marketing and sales">Agricultural marketing and sales</option>
                                    <option value="Other">Others (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to agriculture or allied sectors? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Crop management techniques">Crop management techniques</option>
                                    <option value="Livestock management">Livestock management</option>
                                    <option value="Soil conservation and management">Soil conservation and management</option>
                                    <option value="Pest and disease management">Pest and disease management</option>
                                    <option value="Irrigation techniques">Irrigation techniques</option>
                                    <option value="Agro-processing techniques">Agro-processing techniques</option>
                                    <option value="Marketing and sales strategies">Marketing and sales strategies</option>
                                    <option value="Technology adoption and farm mechanization">Technology adoption and farm mechanization</option>
                                    <option value="Financial management and budgeting">Financial management and budgeting</option>
                                    <option value="Others">Others (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Crop management techniques"
                                                checked={selectedOptions['Crop management techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Crop management techniques', undefined)}
                                            />
                                            Crop management techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="CropmanagementtechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Crop management techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Crop management techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Livestock management"
                                                checked={selectedOptions['Livestock management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Livestock management', undefined)}
                                            />
                                            Livestock management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="LivestockmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Livestock management'] === rating}
                                                        onChange={() => handleCheckboxChange('Livestock management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Soil conservation and management"
                                                checked={selectedOptions['Soil conservation and management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Soil conservation and management', undefined)}
                                            />
                                            Soil conservation and management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="SoilconservationandmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Soil conservation and management'] === rating}
                                                        onChange={() => handleCheckboxChange('Soil conservation and management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Pest and disease management"
                                                checked={selectedOptions['Pest and disease management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Pest and disease management', undefined)}
                                            />
                                            Pest and disease management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="PestanddiseasemanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Pest and disease management'] === rating}
                                                        onChange={() => handleCheckboxChange('Pest and disease management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Irrigation techniques"
                                                checked={selectedOptions['Irrigation techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Irrigation techniques', undefined)}
                                            />
                                            Irrigation techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="IrrigationtechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Irrigation techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Irrigation techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Agro-processing techniques"
                                                checked={selectedOptions['Agro-processing techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Agro-processing techniques', undefined)}
                                            />
                                            Agro-processing techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="Agro-processingtechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Agro-processing techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Agro-processing techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Marketing and sales strategies"
                                                checked={selectedOptions['Marketing and sales strategies'] !== undefined}
                                                onChange={() => handleCheckboxChange('Marketing and sales strategies', undefined)}
                                            />
                                            Marketing and sales strategies:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MarketingandsalesstrategiesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Marketing and sales strategies'] === rating}
                                                        onChange={() => handleCheckboxChange('Marketing and sales strategies', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Technology adoption and farm mechanization"
                                                checked={selectedOptions['Technology adoption and farm mechanization'] !== undefined}
                                                onChange={() => handleCheckboxChange('Technology adoption and farm mechanization', undefined)}
                                            />
                                            Technology adoption and farm mechanization:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TechnologyadoptionandfarmmechanizationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Technology adoption and farm mechanization'] === rating}
                                                        onChange={() => handleCheckboxChange('Technology adoption and farm mechanization', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Financial management and budgeting"
                                                checked={selectedOptions['Financial management and budgeting'] !== undefined}
                                                onChange={() => handleCheckboxChange('Financial management and budgeting', undefined)}
                                            />
                                            Financial management and budgeting:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="FinancialmanagementandbudgetingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Financial management and budgeting'] === rating}
                                                        onChange={() => handleCheckboxChange('Financial management and budgeting', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in agriculture or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Lack of formal training opportunities">Lack of formal training opportunities</option>
                                    <option value="Insufficient access to modern agricultural technologies">Insufficient access to modern agricultural technologies</option>
                                    <option value="Limited extension services and advisory support">Limited extension services and advisory support</option>
                                    <option value="Inadequate infrastructure for post-harvest management">Inadequate infrastructure for post-harvest management</option>
                                    <option value="Unfavorable government policies and regulations">Unfavorable government policies and regulations</option>
                                    <option value="Climate change and environmental degradation">Climate change and environmental degradation</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in agriculture or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to agriculture or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in agriculture or allied sectors of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for agriculture or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest agricultural practices and technologies?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Agricultural workshops and seminars">Agricultural workshops and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Farmer field schools">Farmer field schools</option>
                                    <option value="Extension services provided by agricultural departments">Extension services provided by agricultural departments</option>
                                    <option value="Agricultural fairs and exhibitions">Agricultural fairs and exhibitions</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within agriculture or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in agriculture or allied sectors of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for agriculture or allied sectors in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within agriculture or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>


                        <div className='indiDetails'>
                            <label>Are you aware of any government-sponsored skill development programs specifically targeted towards the agriculture and allied sectors in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['GovSponSDP']} required onChange={(e) => setUserData({ ...userData, "GovSponSDP": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, have you participated in any of these programs?</label>
                            <div className="customSelect">
                                <select value={userData['ParticipatedProg']} required onChange={(e) => setUserData({ ...userData, "ParticipatedProg": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the support provided by agricultural extension services in terms of skill development and advisory services?</label>
                            <div className="customSelect">
                                <select value={userData['SatisfactionAgriExten']} required onChange={(e) => setUserData({ ...userData, "SatisfactionAgriExten": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What are the key areas where you believe additional support and training are needed to enhance productivity and efficiency in agriculture and allied sectors?</label>
                            <textarea rows={8} type='text' value={userData['AddSuppTrain']} required onChange={(e) => setUserData({ ...userData, "AddSuppTrain": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Do you think there is a need for specialized training programs tailored to address the unique challenges faced by farmers and workers in the agriculture and allied sectors of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['STP']} required onChange={(e) => setUserData({ ...userData, "STP": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How do you perceive the role of technological advancements (such as precision agriculture, drones, IoT, etc.) in addressing skill gaps and improving productivity in agriculture and allied sectors?</label>
                            <textarea rows={8} type='text' value={userData['RTA']} required onChange={(e) => setUserData({ ...userData, "RTA": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any cultural or social factors that influence participation in skill development programs within the agriculture and allied sectors? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['CultSocialFactors']} required onChange={(e) => setUserData({ ...userData, "CultSocialFactors": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Do you believe there is adequate awareness among farmers and workers about the importance of skill development and training opportunities in the agriculture and allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['AdequateAware']} required onChange={(e) => setUserData({ ...userData, "AdequateAware": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you think could be done to encourage more participation in skill development programs within the agriculture and allied sectors, particularly among marginalized or remote communities?</label>
                            <textarea rows={8} type='text' value={userData['MPSD']} required onChange={(e) => setUserData({ ...userData, "MPSD": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you envision the future of skill development in the agriculture and allied sectors of Jammu & Kashmir UT? Are there any innovative approaches or strategies that you believe should be adopted?</label>
                            <textarea rows={8} type='text' value={userData['FSDAAS']} required onChange={(e) => setUserData({ ...userData, "FSDAAS": e.target.value })} />
                        </div>
                    </>
                    : ""
            }

            {
                userData.SectorQuestionnarie === "Handicrafts and allied questionnaire"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of handicraft or allied sectors are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Carpets and rugs">Carpets and rugs</option>
                                    <option value="Shawls and Pashmina">Shawls and Pashmina</option>
                                    <option value="Woodwork">Woodwork</option>
                                    <option value="Papier-mâché">Papier-mâché</option>
                                    <option value="Embroidery and needlework">Embroidery and needlework</option>
                                    <option value="Pottery and ceramics">Pottery and ceramics</option>
                                    <option value="Jewelry making">Jewelry making</option>
                                    <option value="Handloom weaving">Handloom weaving</option>
                                    <option value="Leatherwork">Leatherwork</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to handicraft or allied sectors? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Traditional craftsmanship techniques">Traditional craftsmanship techniques</option>
                                    <option value="Design and creativity">Design and creativity</option>
                                    <option value="Material selection and sourcing">Material selection and sourcing</option>
                                    <option value="Quality control and finishing">Quality control and finishing</option>
                                    <option value="Marketing and sales strategies">Marketing and sales strategies</option>
                                    <option value="Business management skills">Business management skills</option>
                                    <option value="Innovation and adaptation to changing trends">Innovation and adaptation to changing trends</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Traditional craftsmanship techniques"
                                                checked={selectedOptions['Traditional craftsmanship techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Traditional craftsmanship techniques', undefined)}
                                            />
                                            Traditional craftsmanship techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="TraditionalcraftsmanshiptechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Traditional craftsmanship techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Traditional craftsmanship techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Design and creativity"
                                                checked={selectedOptions['Design and creativity'] !== undefined}
                                                onChange={() => handleCheckboxChange('Design and creativity', undefined)}
                                            />
                                            Design and creativity:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="DesignandcreativityRating"
                                                        value={rating}
                                                        checked={selectedOptions['Design and creativity'] === rating}
                                                        onChange={() => handleCheckboxChange('Design and creativity', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Material selection and sourcing"
                                                checked={selectedOptions['Material selection and sourcing'] !== undefined}
                                                onChange={() => handleCheckboxChange('Material selection and sourcing', undefined)}
                                            />
                                            Material selection and sourcing:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MaterialselectionandsourcingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Material selection and sourcing'] === rating}
                                                        onChange={() => handleCheckboxChange('Material selection and sourcing', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Quality control and finishing"
                                                checked={selectedOptions['Quality control and finishing'] !== undefined}
                                                onChange={() => handleCheckboxChange('Quality control and finishing', undefined)}
                                            />
                                            Quality control and finishing:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="QualitycontrolandfinishingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Quality control and finishing'] === rating}
                                                        onChange={() => handleCheckboxChange('Quality control and finishing', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Marketing and sales strategies"
                                                checked={selectedOptions['Marketing and sales strategies'] !== undefined}
                                                onChange={() => handleCheckboxChange('Marketing and sales strategies', undefined)}
                                            />
                                            Marketing and sales strategies:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MarketingandsalesstrategiesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Marketing and sales strategies'] === rating}
                                                        onChange={() => handleCheckboxChange('Marketing and sales strategies', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Business management skills"
                                                checked={selectedOptions['Business management skills'] !== undefined}
                                                onChange={() => handleCheckboxChange('Business management skills', undefined)}
                                            />
                                            Business management skills:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="BusinessmanagementskillsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Business management skills'] === rating}
                                                        onChange={() => handleCheckboxChange('Business management skills', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Innovation and adaptation to changing trends"
                                                checked={selectedOptions['Innovation and adaptation to changing trends'] !== undefined}
                                                onChange={() => handleCheckboxChange('Innovation and adaptation to changing trends', undefined)}
                                            />
                                            Innovation and adaptation to changing trends:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InnovationandadaptationtochangingtrendsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Innovation and adaptation to changing trends'] === rating}
                                                        onChange={() => handleCheckboxChange('Innovation and adaptation to changing trends', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in handicraft or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to formal training and apprenticeship programs">Limited access to formal training and apprenticeship programs</option>
                                    <option value="Insufficient market exposure and access to buyers">Insufficient market exposure and access to buyers</option>
                                    <option value="Lack of modern design and innovation integrations">Lack of modern design and innovation integration</option>
                                    <option value="Inadequate infrastructure for production and distribution">Inadequate infrastructure for production and distribution</option>
                                    <option value="Challenges in raw material procurement and supply chain management">Challenges in raw material procurement and supply chain management</option>
                                    <option value="Limited awareness about global market trends and demands">Limited awareness about global market trends and demands</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in handicraft or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in handicraft or allied sectors of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Workshops and seminars">Workshops and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Collaboration with designers and experts">Collaboration with designers and experts</option>
                                    <option value="Participation in craft fairs and exhibitions">Participation in craft fairs and exhibitions</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within handicraft or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in handicraft or allied sectors of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for handicraft or allied sectors in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Are you involved in any cooperative or collective initiatives with other artisans or craftsmen in the handicraft and allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['CCI']} required onChange={(e) => setUserData({ ...userData, "CCI": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, how do you perceive the role of such cooperatives in skill development and market access?</label>
                            <textarea rows={8} type='text' value={userData['PerceiveRSC']} required onChange={(e) => setUserData({ ...userData, "PerceiveRSC": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think the integration of technology, such as e-commerce platforms and digital marketing, can address skill gaps and enhance market reach for artisans and craftsmen in Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['IOT']} required onChange={(e) => setUserData({ ...userData, "IOT": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any cultural or heritage preservation aspects associated with your craft that you feel are not adequately addressed in current skill development programs?</label>
                            <div className="customSelect">
                                <select value={userData['CultHeriPreserv']} required onChange={(e) => setUserData({ ...userData, "CultHeriPreserv": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the cultural or heritage preservation aspects that you believe should be incorporated into skill development initiatives.</label>
                            <input type='text' value={userData['SpecificCultHeriPreserv']} required onChange={(e) => setUserData({ ...userData, "SpecificCultHeriPreserv": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think the tourism industry in Jammu & Kashmir UT can contribute to the promotion and sustainability of handicrafts and allied sectors?</label>
                            <input type='text' value={userData['TourInHandi']} required onChange={(e) => setUserData({ ...userData, "TourInHandi": e.target.value })} />
                        </div>

                        <div className='indiDetails'>
                            <label>Do you believe there is sufficient recognition and support for traditional handicrafts and artisanal skills at the governmental level in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['SRSuppHandi']} required onChange={(e) => setUserData({ ...userData, "SRSuppHandi": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What are the key barriers faced by artisans and craftsmen in accessing skill development programs, especially in rural or remote areas?</label>
                            <textarea rows={8} type='text' value={userData['KeyBarriers']} required onChange={(e) => setUserData({ ...userData, "KeyBarriers": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is to pass down traditional handicraft skills to younger generations?</label>
                            <div className="customSelect">
                                <select value={userData['Importance']} required onChange={(e) => setUserData({ ...userData, "Importance": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very important">Very important</option>
                                    <option value="Important">Important</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What suggestions do you have for improving the accessibility and effectiveness of skill development programs for artisans and craftsmen in Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SuggImprov']} required onChange={(e) => setUserData({ ...userData, "SuggImprov": e.target.value })} />
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Construction and real estate"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in construction, real estate, or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of construction, real estate, or allied sectors are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Civil engineering">Civil engineering</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Construction management">Construction management</option>
                                    <option value="Real estate development">Real estate development</option>
                                    <option value="Building materials manufacturing/supply">Building materials manufacturing/supply</option>
                                    <option value="Interior design">Interior design</option>
                                    <option value="Property management">Property management</option>
                                    <option value="Urban planning">Urban planning</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to construction, real estate, or allied sectors? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Technical construction skills">Technical construction skills</option>
                                    <option value="Project management">Project management</option>
                                    <option value="Budgeting and cost estimation">Budgeting and cost estimation</option>
                                    <option value="Building codes and regulations compliance">Building codes and regulations compliance</option>
                                    <option value="Market analysis and property valuation">Market analysis and property valuation</option>
                                    <option value="Negotiation and sales skills">Negotiation and sales skills</option>
                                    <option value="Sustainable construction practices">Sustainable construction practices</option>
                                    <option value="Occupational health and safety">Occupational health and safety</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Technical construction skills"
                                                checked={selectedOptions['Technical construction skills'] !== undefined}
                                                onChange={() => handleCheckboxChange('Technical construction skills', undefined)}
                                            />
                                            Technical construction skills:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="TechnicalconstructionskillsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Technical construction skills'] === rating}
                                                        onChange={() => handleCheckboxChange('Technical construction skills', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Project management"
                                                checked={selectedOptions['Project management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Project management', undefined)}
                                            />
                                            Project management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="Communication(Verbal and Written)Rating"
                                                        value={rating}
                                                        checked={selectedOptions['Project management'] === rating}
                                                        onChange={() => handleCheckboxChange('Project management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Budgeting and cost estimation"
                                                checked={selectedOptions['Budgeting and cost estimation'] !== undefined}
                                                onChange={() => handleCheckboxChange('Budgeting and cost estimation', undefined)}
                                            />
                                            Budgeting and cost estimation:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="BudgetingandcostestimationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Budgeting and cost estimation'] === rating}
                                                        onChange={() => handleCheckboxChange('Budgeting and cost estimation', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Building codes and regulations compliance"
                                                checked={selectedOptions['Building codes and regulations compliance'] !== undefined}
                                                onChange={() => handleCheckboxChange('Building codes and regulations compliance', undefined)}
                                            />
                                            Building codes and regulations compliance:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="BuildingcodesandregulationscomplianceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Building codes and regulations compliance'] === rating}
                                                        onChange={() => handleCheckboxChange('Building codes and regulations compliance', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Market analysis and property valuation"
                                                checked={selectedOptions['Market analysis and property valuation'] !== undefined}
                                                onChange={() => handleCheckboxChange('Market analysis and property valuation', undefined)}
                                            />
                                            Market analysis and property valuation:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MarketanalysisandpropertyvaluationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Market analysis and property valuation'] === rating}
                                                        onChange={() => handleCheckboxChange('Market analysis and property valuation', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Negotiation and sales skills"
                                                checked={selectedOptions['Negotiation and sales skills'] !== undefined}
                                                onChange={() => handleCheckboxChange('Negotiation and sales skills', undefined)}
                                            />
                                            Negotiation and sales skills:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="NegotiationandsalesskillsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Negotiation and sales skills'] === rating}
                                                        onChange={() => handleCheckboxChange('Negotiation and sales skills', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Sustainable construction practices"
                                                checked={selectedOptions['Sustainable construction practices'] !== undefined}
                                                onChange={() => handleCheckboxChange('Sustainable construction practices', undefined)}
                                            />
                                            Sustainable construction practices:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="SustainableconstructionpracticesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Sustainable construction practices'] === rating}
                                                        onChange={() => handleCheckboxChange('Sustainable construction practices', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />


                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Occupational health and safety"
                                                checked={selectedOptions['Occupational health and safety'] !== undefined}
                                                onChange={() => handleCheckboxChange('Occupational health and safety', undefined)}
                                            />
                                            Occupational health and safety:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="OccupationalhealthandsafetyRating"
                                                        value={rating}
                                                        checked={selectedOptions['Occupational health and safety'] === rating}
                                                        onChange={() => handleCheckboxChange('Occupational health and safety', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in construction, real estate, or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Lack of formal education and training opportunities">Lack of formal education and training opportunities</option>
                                    <option value="Rapid technological advancements in the industry">Rapid technological advancements in the industry</option>
                                    <option value="Inadequate access to updated building codes and regulations">Inadequate access to updated building codes and regulations</option>
                                    <option value="Insufficient focus on sustainability practices">Insufficient focus on sustainability practices</option>
                                    <option value="Limited awareness about modern construction materials and techniques">Limited awareness about modern construction materials and techniques</option>
                                    <option value="High turnover rates in the workforce">High turnover rates in the workforce</option>

                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in construction, real estate, or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to construction, real estate, or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in construction, real estate, or allied sectors of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for construction, real estate, or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in construction, real estate, or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Professional associations and networking events">Professional associations and networking events</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within construction, real estate, or allied sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in construction, real estate, or allied sectors of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for construction, real estate, or allied sectors in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['Importance']} required onChange={(e) => setUserData({ ...userData, "Importance": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within construction, real estate, or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label className='message'>Your participation and insights are crucial in identifying and addressing skill gaps within the construction, real estate, and allied sectors of Jammu & Kashmir UT. Thank you for your valuable input.</label>

                        </div>
                        <div className='indiDetails'>
                            <label>Do you believe there is a need for specialized training programs focusing on sustainable construction practices (e.g., green building, energy efficiency, waste management) in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['SpecializedTrainProg']} required onChange={(e) => setUserData({ ...userData, "SpecializedTrainProg": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How do you perceive the role of vocational training institutes and polytechnic schools in addressing skill gaps in the construction, real estate, and allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['RoleVocTrainInsti']} required onChange={(e) => setUserData({ ...userData, "RoleVocTrainInsti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very effective">Very effective</option>
                                    <option value="Somewhat effective">Somewhat effective</option>
                                    <option value="Not very effective">Not very effective</option>
                                    <option value="Not effective at all">Not effective at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What role can industry partnerships and collaborations play in providing hands-on training and apprenticeship opportunities for individuals aspiring to work in the construction, real estate, and allied sectors?</label>
                            <textarea rows={8} type='text' value={userData['RoleIndudsPartnershipCollab']} required onChange={(e) => setUserData({ ...userData, "RoleIndudsPartnershipCollab": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific technological advancements (e.g., Building Information Modeling (BIM), Virtual Reality (VR), drones) that you believe are underutilized in the construction and real estate sectors in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificTechAdvance']} required onChange={(e) => setUserData({ ...userData, "SpecificTechAdvance": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think soft skills (e.g., communication, teamwork, problem-solving) are in the construction, real estate, and allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['ImportanceSS']} required onChange={(e) => setUserData({ ...userData, "ImportanceSS": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very important">Very important</option>
                                    <option value="Important">Important</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any regulatory or bureaucratic hurdles that hinder skill development efforts in the construction, real estate, and allied sectors in Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['Regulations']} required onChange={(e) => setUserData({ ...userData, "Regulations": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think the integration of digital platforms for project management and communication can improve efficiency and address skill gaps in the construction, real estate, and allied sectors?</label>
                            <textarea rows={8} type='text' value={userData['InteDigitalPlat']} required onChange={(e) => setUserData({ ...userData, "InteDigitalPlat": e.target.value })} />
                        </div>

                        <div className='indiDetails'>
                            <label>Do you believe there is sufficient emphasis on occupational health and safety training in the construction, real estate, and allied sectors in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['SufficientEmphasis']} required onChange={(e) => setUserData({ ...userData, "SufficientEmphasis": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>What initiatives do you think can be implemented to encourage more women to pursue careers in the construction, real estate, and allied sectors in Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Initiatives']} required onChange={(e) => setUserData({ ...userData, "Initiatives": e.target.value })} />
                        </div>

                        <div className='indiDetails'>
                            <label>How do you envision the future of skill development in the construction, real estate, and allied sectors of Jammu & Kashmir UT, and what steps do you think should be taken to ensure a skilled workforce for the future?</label>
                            <textarea rows={8} type='text' value={userData['EnvisionFSD']} required onChange={(e) => setUserData({ ...userData, "EnvisionFSD": e.target.value })} />
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Manufacturing and industries sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in retail or manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of retail or manufacturing sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Retail sales">Retail sales</option>
                                    <option value="Inventory management">Inventory management</option>
                                    <option value="Supply chain management">Supply chain management</option>
                                    <option value="Manufacturing operations">Manufacturing operations</option>
                                    <option value="Quality control">Quality control</option>
                                    <option value="Product development">Product development</option>
                                    <option value="Marketing and branding">Marketing and branding</option>
                                    <option value="Warehousing and logistics">Warehousing and logistics</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to retail or manufacturing sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Customer service">Customer service</option>
                                    <option value="Sales techniques">Sales techniques</option>
                                    <option value="Inventory management">Inventory management</option>
                                    <option value="Production planning">Production planning</option>
                                    <option value="Quality assurance">Quality assurance</option>
                                    <option value="Data analysis">Data analysis</option>
                                    <option value="Team management">Team management</option>
                                    <option value="Marketing strategies">Marketing strategies</option>

                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Customer Service"
                                                checked={selectedOptions['Customer Service'] !== undefined}
                                                onChange={() => handleCheckboxChange('Customer Service', undefined)}
                                            />
                                            Customer Service:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="customerServiceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Customer Service'] === rating}
                                                        onChange={() => handleCheckboxChange('Customer Service', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Sales techniques"
                                                checked={selectedOptions['Sales techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Sales techniques', undefined)}
                                            />
                                            Sales techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="SalestechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Sales techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Sales techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Inventory management"
                                                checked={selectedOptions['Inventory management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Inventory management', undefined)}
                                            />
                                            Inventory management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InventorymanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Inventory management'] === rating}
                                                        onChange={() => handleCheckboxChange('Inventory management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Production planning"
                                                checked={selectedOptions['Production planning'] !== undefined}
                                                onChange={() => handleCheckboxChange('Production planning', undefined)}
                                            />
                                            Production planning:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="ProductionplanningRating"
                                                        value={rating}
                                                        checked={selectedOptions['Production planning'] === rating}
                                                        onChange={() => handleCheckboxChange('Production planning', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Quality assurance"
                                                checked={selectedOptions['Quality assurance'] !== undefined}
                                                onChange={() => handleCheckboxChange('Quality assurance', undefined)}
                                            />
                                            Quality assurance:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="QualityassuranceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Quality assurance'] === rating}
                                                        onChange={() => handleCheckboxChange('Quality assurance', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Data analysis"
                                                checked={selectedOptions['Data analysis'] !== undefined}
                                                onChange={() => handleCheckboxChange('Data analysis', undefined)}
                                            />
                                            Data analysis:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="DataanalysisRating"
                                                        value={rating}
                                                        checked={selectedOptions['Data analysis'] === rating}
                                                        onChange={() => handleCheckboxChange('Data analysis', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Team management"
                                                checked={selectedOptions['Team management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Team management', undefined)}
                                            />
                                            Team management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TeammanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Team management'] === rating}
                                                        onChange={() => handleCheckboxChange('Team management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Marketing strategies"
                                                checked={selectedOptions['Marketing strategies'] !== undefined}
                                                onChange={() => handleCheckboxChange('Marketing strategies', undefined)}
                                            />
                                            Marketing strategies:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MarketingstrategiesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Marketing strategies'] === rating}
                                                        onChange={() => handleCheckboxChange('Marketing strategies', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in retail or manufacturing sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to vocational training programs">Limited access to vocational training programs</option>
                                    <option value="Insufficient awareness about market trends and consumer preferences">Insufficient awareness about market trends and consumer preferences</option>
                                    <option value="Lack of modern technology adoption">Lack of modern technology adoption</option>
                                    <option value="Inadequate infrastructure for manufacturing and retail operations">Inadequate infrastructure for manufacturing and retail operations</option>
                                    <option value="High turnover rates in the workforce">High turnover rates in the workforce</option>
                                    <option value="Regulatory challenges and bureaucratic hurdles">Regulatory challenges and bureaucratic hurdles</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in retail or manufacturing sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to retail or manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in retail or manufacturing sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for retail or manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in retail or manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Professional associations and networking events">Professional associations and networking events</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within retail or manufacturing sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in retail or manufacturing sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for retail or manufacturing sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['Importance']} required onChange={(e) => setUserData({ ...userData, "Importance": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within retail or manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Do you believe there is a need for specialized training programs focusing on e-commerce and online retailing in the context of the retail sector in Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['NeedSpecializedTrainProg']} required onChange={(e) => setUserData({ ...userData, "NeedSpecializedTrainProg": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How do you perceive the role of vocational education and apprenticeship programs in addressing skill gaps in the manufacturing sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['RoleVocEdu']} required onChange={(e) => setUserData({ ...userData, "RoleVocEdu": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific technical skills (e.g., machinery operation, equipment maintenance) that you believe are particularly important but lacking in the current workforce of the manufacturing sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificTechSkills']} required onChange={(e) => setUserData({ ...userData, "SpecificTechSkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think the adoption of Industry 4.0 technologies (such as automation, Internet of Things, and artificial intelligence) can impact skill requirements in the manufacturing sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['AdoptionIT']} required onChange={(e) => setUserData({ ...userData, "AdoptionIT": e.target.value })} />
                        </div>

                        <div className='indiDetails'>
                            <label>Are there any cultural or social factors that influence participation in skill development programs within the retail and manufacturing sectors? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['CultSocailFactors']} required onChange={(e) => setUserData({ ...userData, "CultSocailFactors": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you perceive the importance of soft skills (e.g., communication, teamwork, adaptability) in the retail and manufacturing sectors, and how can they be effectively integrated into skill development programs?</label>
                            <textarea rows={8} type='text' value={userData['ImportanceSoftSkills']} required onChange={(e) => setUserData({ ...userData, "ImportanceSoftSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can private sector organizations play in supporting skill development initiatives within the retail and manufacturing sectors of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['PrivateSectorOrg']} required onChange={(e) => setUserData({ ...userData, "PrivateSectorOrg": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any opportunities for collaboration between educational institutions and industry stakeholders to address skill gaps in the retail and manufacturing sectors? If yes, please provide examples.</label>
                            <textarea rows={8} type='text' value={userData['CollabEduInsti']} required onChange={(e) => setUserData({ ...userData, "CollabEduInsti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What measures do you think can be implemented to encourage lifelong learning and continuous skill development among employees in the retail and manufacturing sectors?</label>
                            <textarea rows={8} type='text' value={userData['MeasuresImplement']} required onChange={(e) => setUserData({ ...userData, "MeasuresImplement": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you envision the future workforce in the retail and manufacturing sectors of Jammu & Kashmir UT, and what steps should be taken to prepare for upcoming skill requirements and challenges?</label>
                            <textarea rows={8} type='text' value={userData['EnvisionFutureWorkForce']} required onChange={(e) => setUserData({ ...userData, "EnvisionFutureWorkForce": e.target.value })} />
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Banking finance and insurance sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the banking, finance, or insurance sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the banking, finance, or insurance sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Retail banking">Retail banking</option>
                                    <option value="Corporate banking">Corporate banking</option>
                                    <option value="Investment banking">Investment banking</option>
                                    <option value="Wealth management">Wealth management</option>
                                    <option value="Financial analysis">Financial analysis</option>
                                    <option value="Risk management">Risk management</option>
                                    <option value="Insurance underwriting">Insurance underwriting</option>
                                    <option value="Actuarial services">Actuarial services</option>
                                    <option value="Financial technology (Fintech)">Financial technology (Fintech)</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the banking, finance, or insurance sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Financial analysis and modeling">Financial analysis and modeling</option>
                                    <option value="Risk assessment and management">Risk assessment and management</option>
                                    <option value="Customer relationship management">Customer relationship management</option>
                                    <option value="Regulatory compliance">Regulatory compliance</option>
                                    <option value="Investment portfolio management">Investment portfolio management</option>
                                    <option value="Insurance product development">Insurance product development</option>
                                    <option value="Financial technology applications">Financial technology applications</option>
                                    <option value="Data analysis and interpretation">Data analysis and interpretation</option>

                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Financial analysis and modeling"
                                                checked={selectedOptions['Financial analysis and modeling'] !== undefined}
                                                onChange={() => handleCheckboxChange('Financial analysis and modeling', undefined)}
                                            />
                                            Financial analysis and modeling:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="FinancialanalysisandmodelingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Financial analysis and modeling'] === rating}
                                                        onChange={() => handleCheckboxChange('Financial analysis and modeling', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Risk assessment and management"
                                                checked={selectedOptions['Risk assessment and management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Risk assessment and management', undefined)}
                                            />
                                            Risk assessment and management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="RiskassessmentandmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Risk assessment and management'] === rating}
                                                        onChange={() => handleCheckboxChange('Risk assessment and management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Customer relationship management"
                                                checked={selectedOptions['Customer relationship management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Customer relationship management', undefined)}
                                            />
                                            Customer relationship management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CustomerrelationshipmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Customer relationship management'] === rating}
                                                        onChange={() => handleCheckboxChange('Customer relationship management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Regulatory compliance"
                                                checked={selectedOptions['Regulatory compliance'] !== undefined}
                                                onChange={() => handleCheckboxChange('Regulatory compliance', undefined)}
                                            />
                                            Regulatory compliance:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="RegulatorycomplianceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Regulatory compliance'] === rating}
                                                        onChange={() => handleCheckboxChange('Regulatory compliance', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Investment portfolio management"
                                                checked={selectedOptions['Investment portfolio management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Investment portfolio management', undefined)}
                                            />
                                            Investment portfolio management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InvestmentportfoliomanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Investment portfolio management'] === rating}
                                                        onChange={() => handleCheckboxChange('Investment portfolio management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Insurance product development"
                                                checked={selectedOptions['Insurance product development'] !== undefined}
                                                onChange={() => handleCheckboxChange('Insurance product development', undefined)}
                                            />
                                            Insurance product development:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InsuranceproductdevelopmentRating"
                                                        value={rating}
                                                        checked={selectedOptions['Insurance product development'] === rating}
                                                        onChange={() => handleCheckboxChange('Insurance product development', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Financial technology applications"
                                                checked={selectedOptions['Financial technology applications'] !== undefined}
                                                onChange={() => handleCheckboxChange('Financial technology applications', undefined)}
                                            />
                                            Financial technology applications:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="FinancialtechnologyapplicationsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Financial technology applications'] === rating}
                                                        onChange={() => handleCheckboxChange('Financial technology applications', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Data analysis and interpretation"
                                                checked={selectedOptions['Data analysis and interpretation'] !== undefined}
                                                onChange={() => handleCheckboxChange('Data analysis and interpretation', undefined)}
                                            />
                                            Data analysis and interpretation:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="DataanalysisandinterpretationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Data analysis and interpretation'] === rating}
                                                        onChange={() => handleCheckboxChange('Data analysis and interpretation', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the banking, finance, or insurance sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Inadequate training and development programs">Inadequate training and development programs</option>
                                    <option value="Rapid technological advancements in the financial industry">Rapid technological advancements in the financial industry</option>
                                    <option value="Evolving regulatory requirements and compliance standards">Evolving regulatory requirements and compliance standards</option>
                                    <option value="Limited access to specialized courses and certifications">Limited access to specialized courses and certifications</option>
                                    <option value="Insufficient awareness about emerging financial products and services">Insufficient awareness about emerging financial products and services</option>
                                    <option value="High turnover rates in the workforce">High turnover rates in the workforce</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the banking, finance, or insurance sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the banking, finance, or insurance sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the banking, finance, or insurance sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the banking, finance, or insurance sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Professional associations and networking events">Professional associations and networking events</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the banking, finance, or insurance sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the banking, finance, or insurance sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the banking, finance, or insurance sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the banking, finance, or insurance sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "IT and allied sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the IT or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the IT or allied sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Software development">Software development</option>
                                    <option value="Web development">Web development</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Data science and analytics">Data science and analytics</option>
                                    <option value="Network engineering">Network engineering</option>
                                    <option value="IT infrastructure management">IT infrastructure management</option>
                                    <option value="Cloud computing">Cloud computing</option>
                                    <option value="Artificial Intelligence (AI) and Machine Learning (ML)">Artificial Intelligence (AI) and Machine Learning (ML)</option>
                                    <option value="Digital marketing">Digital marketing</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the IT or allied sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Programming languages (e.g., Java, Python, C++)">Programming languages (e.g., Java, Python, C++)</option>
                                    <option value="Web development frameworks (e.g., React, Angular, Django)">Web development frameworks (e.g., React, Angular, Django)</option>
                                    <option value="Cybersecurity tools and techniques">Cybersecurity tools and techniques</option>
                                    <option value="Data analysis and visualization">Data analysis and visualization</option>
                                    <option value="Network administration and troubleshooting">Network administration and troubleshooting</option>
                                    <option value="Cloud platforms (e.g., AWS, Azure, Google Cloud)">Cloud platforms (e.g., AWS, Azure, Google Cloud)</option>
                                    <option value="AI and ML algorithms and applications">AI and ML algorithms and applications</option>
                                    <option value="Digital marketing strategies">Digital marketing strategies</option>
                                    <option value="Project management methodologies">Project management methodologies</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Programming languages (e.g., Java, Python, C++)"
                                                checked={selectedOptions['Programming languages (e.g., Java, Python, C++)'] !== undefined}
                                                onChange={() => handleCheckboxChange('Programming languages (e.g., Java, Python, C++)', undefined)}
                                            />
                                            Programming languages (e.g., Java, Python, C++):
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="ProgramminglanguagesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Programming languages (e.g., Java, Python, C++)'] === rating}
                                                        onChange={() => handleCheckboxChange('Programming languages (e.g., Java, Python, C++)', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Web development frameworks (e.g., React, Angular, Django)"
                                                checked={selectedOptions['Web development frameworks (e.g., React, Angular, Django)'] !== undefined}
                                                onChange={() => handleCheckboxChange('Web development frameworks (e.g., React, Angular, Django)', undefined)}
                                            />
                                            Web development frameworks (e.g., React, Angular, Django):
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="WebdevelopmentframeworksRating"
                                                        value={rating}
                                                        checked={selectedOptions['Web development frameworks (e.g., React, Angular, Django)'] === rating}
                                                        onChange={() => handleCheckboxChange('Web development frameworks (e.g., React, Angular, Django)', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Cybersecurity tools and techniques"
                                                checked={selectedOptions['Cybersecurity tools and techniques'] !== undefined}
                                                onChange={() => handleCheckboxChange('Cybersecurity tools and techniques', undefined)}
                                            />
                                            Cybersecurity tools and techniques:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CybersecuritytoolsandtechniquesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Cybersecurity tools and techniques'] === rating}
                                                        onChange={() => handleCheckboxChange('Cybersecurity tools and techniques', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Problem-Solving"
                                                checked={selectedOptions['Data analysis and visualization'] !== undefined}
                                                onChange={() => handleCheckboxChange('Data analysis and visualization', undefined)}
                                            />
                                            Data analysis and visualization:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="DataanalysisandvisualizationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Data analysis and visualization'] === rating}
                                                        onChange={() => handleCheckboxChange('Data analysis and visualization', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Network administration and troubleshooting"
                                                checked={selectedOptions['Network administration and troubleshooting'] !== undefined}
                                                onChange={() => handleCheckboxChange('Network administration and troubleshooting', undefined)}
                                            />
                                            Network administration and troubleshooting:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="NetworkadministrationandtroubleshootingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Network administration and troubleshooting'] === rating}
                                                        onChange={() => handleCheckboxChange('Network administration and troubleshooting', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Cloud platforms (e.g., AWS, Azure, Google Cloud)"
                                                checked={selectedOptions['Cloud platforms (e.g., AWS, Azure, Google Cloud)'] !== undefined}
                                                onChange={() => handleCheckboxChange('Cloud platforms (e.g., AWS, Azure, Google Cloud)', undefined)}
                                            />
                                            Cloud platforms (e.g., AWS, Azure, Google Cloud):
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CloudplatformsRating"
                                                        value={rating}
                                                        checked={selectedOptions['Cloud platforms (e.g., AWS, Azure, Google Cloud)'] === rating}
                                                        onChange={() => handleCheckboxChange('Cloud platforms (e.g., AWS, Azure, Google Cloud)', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="AI and ML algorithms and applications"
                                                checked={selectedOptions['AI and ML algorithms and applications'] !== undefined}
                                                onChange={() => handleCheckboxChange('AI and ML algorithms and applications', undefined)}
                                            />
                                            AI and ML algorithms and applications:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="AIandMLalgorithmsandapplicationsRating"
                                                        value={rating}
                                                        checked={selectedOptions['AI and ML algorithms and applications'] === rating}
                                                        onChange={() => handleCheckboxChange('AI and ML algorithms and applications', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Digital marketing strategies"
                                                checked={selectedOptions['Digital marketing strategies'] !== undefined}
                                                onChange={() => handleCheckboxChange('Digital marketing strategies', undefined)}
                                            />
                                            Digital marketing strategies:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="DigitalmarketingstrategiesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Digital marketing strategies'] === rating}
                                                        onChange={() => handleCheckboxChange('Digital marketing strategies', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Project management methodologies"
                                                checked={selectedOptions['Project management methodologies'] !== undefined}
                                                onChange={() => handleCheckboxChange('Project management methodologies', undefined)}
                                            />
                                            Project management methodologies:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="ProjectmanagementmethodologiesRating"
                                                        value={rating}
                                                        checked={selectedOptions['Project management methodologies'] === rating}
                                                        onChange={() => handleCheckboxChange('Project management methodologies', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the IT or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to quality education and training resources">Limited access to quality education and training resources</option>
                                    <option value="Rapid technological advancements and evolving industry trends">Rapid technological advancements and evolving industry trends</option>
                                    <option value="Inadequate infrastructure for IT development and testing">Inadequate infrastructure for IT development and testing</option>
                                    <option value="Lack of practical experience and hands-on training opportunities">Lack of practical experience and hands-on training opportunities</option>
                                    <option value="Insufficient awareness about career opportunities in the IT sector">Insufficient awareness about career opportunities in the IT sector</option>
                                    <option value="High competition and talent retention challenges">High competition and talent retention challenges</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the IT or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to the IT or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the IT or allied sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the IT or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the IT or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Professional forums and communities">Professional forums and communities</option>
                                    <option value="Research papers and publications">Research papers and publications</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the IT or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the IT or allied sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the IT or allied sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the IT or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Trade and commerce Sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the trade or commerce sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the trade or commerce sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Wholesale">Wholesale</option>
                                    <option value="Import/export">Import/export</option>
                                    <option value="Supply chain management">Supply chain management</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Marketing and sales">Marketing and sales</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="International trade">International trade</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the trade or commerce sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Market analysis and research">Market analysis and research</option>
                                    <option value="Negotiation and bargaining">Negotiation and bargaining</option>
                                    <option value="Inventory management">Inventory management</option>
                                    <option value="Customer relationship management">Customer relationship management</option>
                                    <option value="Supply chain optimization">Supply chain optimization</option>
                                    <option value="Financial management">Financial management</option>
                                    <option value="Trade regulations and compliance">Trade regulations and compliance</option>
                                    <option value="International business operations">International business operations</option>

                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Market analysis and research"
                                                checked={selectedOptions['Market analysis and research'] !== undefined}
                                                onChange={() => handleCheckboxChange('Market analysis and research', undefined)}
                                            />
                                            Market analysis and research:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="MarketanalysisandresearchRating"
                                                        value={rating}
                                                        checked={selectedOptions['Market analysis and research'] === rating}
                                                        onChange={() => handleCheckboxChange('Market analysis and research', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Negotiation and bargaining"
                                                checked={selectedOptions['Negotiation and bargaining'] !== undefined}
                                                onChange={() => handleCheckboxChange('Negotiation and bargaining', undefined)}
                                            />
                                            Negotiation and bargaining:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="NegotiationandbargainingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Negotiation and bargaining'] === rating}
                                                        onChange={() => handleCheckboxChange('Negotiation and bargaining', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Inventory management"
                                                checked={selectedOptions['Inventory management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Inventory management', undefined)}
                                            />
                                            Inventory management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InventorymanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Inventory management'] === rating}
                                                        onChange={() => handleCheckboxChange('Inventory management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Customer relationship management"
                                                checked={selectedOptions['Customer relationship management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Customer relationship management', undefined)}
                                            />
                                            Customer relationship management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CustomerrelationshipmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Customer relationship management'] === rating}
                                                        onChange={() => handleCheckboxChange('Customer relationship management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Supply chain optimization"
                                                checked={selectedOptions['Supply chain optimization'] !== undefined}
                                                onChange={() => handleCheckboxChange('Supply chain optimization', undefined)}
                                            />
                                            Supply chain optimization:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="SupplychainoptimizationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Supply chain optimization'] === rating}
                                                        onChange={() => handleCheckboxChange('Supply chain optimization', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Financial management"
                                                checked={selectedOptions['Financial management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Financial management', undefined)}
                                            />
                                            Financial management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="FinancialmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Financial management'] === rating}
                                                        onChange={() => handleCheckboxChange('Financial management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Trade regulations and compliance"
                                                checked={selectedOptions['Trade regulations and compliance'] !== undefined}
                                                onChange={() => handleCheckboxChange('Trade regulations and compliance', undefined)}
                                            />
                                            Trade regulations and compliance:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TraderegulationsandcomplianceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Trade regulations and compliance'] === rating}
                                                        onChange={() => handleCheckboxChange('Trade regulations and compliance', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="International business operations"
                                                checked={selectedOptions['International business operations'] !== undefined}
                                                onChange={() => handleCheckboxChange('International business operations', undefined)}
                                            />
                                            International business operations:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InternationalbusinessoperationsRating"
                                                        value={rating}
                                                        checked={selectedOptions['International business operations'] === rating}
                                                        onChange={() => handleCheckboxChange('International business operations', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the trade or commerce sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to training and development programs">Limited access to training and development programs</option>
                                    <option value="Rapid changes in consumer preferences and market dynamics">Rapid changes in consumer preferences and market dynamics</option>
                                    <option value="Insufficient infrastructure for trade and commerce operations">Insufficient infrastructure for trade and commerce operations</option>
                                    <option value="Lack of awareness about global trade practices and regulations">Lack of awareness about global trade practices and regulations</option>
                                    <option value="High competition and pricing pressures">High competition and pricing pressures</option>
                                    <option value="Inadequate financial resources for business growth">Inadequate financial resources for business growth</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the trade or commerce sectorof Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to the trade or commerce sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the trade or commerce sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the trade or commerce sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the trade or commerce sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Professional associations and networking event">Professional associations and networking event</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the trade or commerce sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the trade or commerce sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the trade or commerce sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the trade or commerce sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Training, education and allied sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the training or education sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the training or education sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Teaching/Instructing">Teaching/Instructing</option>
                                    <option value="Curriculum development">Curriculum development</option>
                                    <option value="Educational administration/Management">Educational administration/Management</option>
                                    <option value="Training program design and implementation">Training program design and implementation</option>
                                    <option value="Assessment and evaluation">Assessment and evaluation</option>
                                    <option value="Educational technology (EdTech) integration">Educational technology (EdTech) integration</option>
                                    <option value="Adult education">Adult education</option>
                                    <option value="Vocational training">Vocational training</option>
                                    <option value="Special education">Special education</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the training or education sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Lesson planning and delivery">Lesson planning and delivery</option>
                                    <option value="Curriculum design and development">Curriculum design and development</option>
                                    <option value="Classroom management">Classroom management</option>
                                    <option value="Educational assessment and evaluation">Educational assessment and evaluation</option>
                                    <option value="Technology integration in teaching">Technology integration in teaching</option>
                                    <option value="Training needs analysis">Training needs analysis</option>
                                    <option value="Program evaluation and improvement">Program evaluation and improvement</option>
                                    <option value="Cultural sensitivity and inclusivity">Cultural sensitivity and inclusivity</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Lesson planning and delivery"
                                                checked={selectedOptions['Lesson planning and delivery'] !== undefined}
                                                onChange={() => handleCheckboxChange('Lesson planning and delivery', undefined)}
                                            />
                                            Lesson planning and delivery:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="LessonplanninganddeliveryRating"
                                                        value={rating}
                                                        checked={selectedOptions['Lesson planning and delivery'] === rating}
                                                        onChange={() => handleCheckboxChange('Lesson planning and delivery', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Curriculum design and development"
                                                checked={selectedOptions['Curriculum design and development'] !== undefined}
                                                onChange={() => handleCheckboxChange('Curriculum design and development', undefined)}
                                            />
                                            Curriculum design and development:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CurriculumdesignanddevelopmentRating"
                                                        value={rating}
                                                        checked={selectedOptions['Curriculum design and development'] === rating}
                                                        onChange={() => handleCheckboxChange('Curriculum design and development', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Classroom management"
                                                checked={selectedOptions['Classroom management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Classroom management', undefined)}
                                            />
                                            Classroom management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="ClassroommanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Classroom management'] === rating}
                                                        onChange={() => handleCheckboxChange('Classroom management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Educational assessment and evaluation"
                                                checked={selectedOptions['Educational assessment and evaluation'] !== undefined}
                                                onChange={() => handleCheckboxChange('Educational assessment and evaluation', undefined)}
                                            />
                                            Educational assessment and evaluation:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="EducationalassessmentandevaluationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Educational assessment and evaluation'] === rating}
                                                        onChange={() => handleCheckboxChange('Educational assessment and evaluation', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Technology integration in teaching"
                                                checked={selectedOptions['Technology integration in teaching'] !== undefined}
                                                onChange={() => handleCheckboxChange('Technology integration in teaching', undefined)}
                                            />
                                            Technology integration in teaching:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TechnologyintegrationinteachingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Technology integration in teaching'] === rating}
                                                        onChange={() => handleCheckboxChange('Technology integration in teaching', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Training needs analysis"
                                                checked={selectedOptions['Training needs analysis'] !== undefined}
                                                onChange={() => handleCheckboxChange('Training needs analysis', undefined)}
                                            />
                                            Training needs analysis:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TrainingneedsanalysisRating"
                                                        value={rating}
                                                        checked={selectedOptions['Training needs analysis'] === rating}
                                                        onChange={() => handleCheckboxChange('Training needs analysis', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Program evaluation and improvement"
                                                checked={selectedOptions['Program evaluation and improvement'] !== undefined}
                                                onChange={() => handleCheckboxChange('Program evaluation and improvement', undefined)}
                                            />
                                            Program evaluation and improvement:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="ProgramevaluationandimprovementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Program evaluation and improvement'] === rating}
                                                        onChange={() => handleCheckboxChange('Program evaluation and improvement', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Cultural sensitivity and inclusivity"
                                                checked={selectedOptions['Cultural sensitivity and inclusivity'] !== undefined}
                                                onChange={() => handleCheckboxChange('Cultural sensitivity and inclusivity', undefined)}
                                            />
                                            Cultural sensitivity and inclusivity:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CulturalsensitivityandinclusivityRating"
                                                        value={rating}
                                                        checked={selectedOptions['Cultural sensitivity and inclusivity'] === rating}
                                                        onChange={() => handleCheckboxChange('Cultural sensitivity and inclusivity', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the training or education sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to professional development opportunities">Limited access to professional development opportunities</option>
                                    <option value="Insufficient training infrastructure and resources">Insufficient training infrastructure and resources</option>
                                    <option value="Rapid changes in educational methodologies and technologies">Rapid changes in educational methodologies and technologies</option>
                                    <option value="Lack of qualified trainers and educators">Lack of qualified trainers and educators</option>
                                    <option value="Cultural and linguistic diversity among learners">Cultural and linguistic diversity among learners</option>
                                    <option value="Inadequate government support and funding">Inadequate government support and funding</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the training or education sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to handicraft or allied sectors?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the training or education sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the training or education sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the training or education sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Professional conferences and seminars">Professional conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Educational journals and publications">Educational journals and publications</option>
                                    <option value="Professional associations and networks">Professional associations and networks</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the training or education sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the training or education sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the training or education sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the training or education sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Transport and logistics"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the transport or logistics sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the transport or logistics sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Freight transportation (e.g., trucking, rail, maritime)">Freight transportation (e.g., trucking, rail, maritime)</option>
                                    <option value="Passenger transportation (e.g., bus, taxi, ferry)">Passenger transportation (e.g., bus, taxi, ferry)</option>
                                    <option value="Supply chain management">Supply chain management</option>
                                    <option value="Warehousing and distribution">Warehousing and distribution</option>
                                    <option value="Logistics planning and optimization">Logistics planning and optimization</option>
                                    <option value="Fleet management">Fleet management</option>
                                    <option value="Customs clearance and documentation">Customs clearance and documentation</option>
                                    <option value="Last-mile delivery">Last-mile delivery</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the transport or logistics sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Route planning and navigation">Route planning and navigation</option>
                                    <option value="Load optimization and cargo handling">Load optimization and cargo handling</option>
                                    <option value="Time management and scheduling">Time management and scheduling</option>
                                    <option value="Vehicle maintenance and repair">Vehicle maintenance and repair</option>
                                    <option value="Inventory management">Inventory management</option>
                                    <option value="Logistics software utilization">Logistics software utilization</option>
                                    <option value="Regulatory compliance">Regulatory compliance</option>
                                    <option value="Customer service">Customer service</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Route planning and navigation"
                                                checked={selectedOptions['Route planning and navigation'] !== undefined}
                                                onChange={() => handleCheckboxChange('Route planning and navigation', undefined)}
                                            />
                                            Route planning and navigation:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="RouteplanningandnavigationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Route planning and navigation'] === rating}
                                                        onChange={() => handleCheckboxChange('Route planning and navigation', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Load optimization and cargo handling"
                                                checked={selectedOptions['Load optimization and cargo handling'] !== undefined}
                                                onChange={() => handleCheckboxChange('Load optimization and cargo handling', undefined)}
                                            />
                                            Load optimization and cargo handling:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="LoadoptimizationandcargohandlingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Load optimization and cargo handling'] === rating}
                                                        onChange={() => handleCheckboxChange('Load optimization and cargo handling', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Time management and scheduling"
                                                checked={selectedOptions['Time management and scheduling'] !== undefined}
                                                onChange={() => handleCheckboxChange('Time management and scheduling', undefined)}
                                            />
                                            Time management and scheduling:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="TimemanagementandschedulingRating"
                                                        value={rating}
                                                        checked={selectedOptions['Time management and scheduling'] === rating}
                                                        onChange={() => handleCheckboxChange('Time management and scheduling', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Vehicle maintenance and repair"
                                                checked={selectedOptions['Vehicle maintenance and repair'] !== undefined}
                                                onChange={() => handleCheckboxChange('Vehicle maintenance and repair', undefined)}
                                            />
                                            Vehicle maintenance and repair:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="VehiclemaintenanceandrepairRating"
                                                        value={rating}
                                                        checked={selectedOptions['Vehicle maintenance and repair'] === rating}
                                                        onChange={() => handleCheckboxChange('Vehicle maintenance and repair', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Inventory management"
                                                checked={selectedOptions['Inventory management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Inventory management', undefined)}
                                            />
                                            Inventory management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InventorymanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Inventory management'] === rating}
                                                        onChange={() => handleCheckboxChange('Inventory management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Logistics software utilization"
                                                checked={selectedOptions['Logistics software utilization'] !== undefined}
                                                onChange={() => handleCheckboxChange('Logistics software utilization', undefined)}
                                            />
                                            Logistics software utilization:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="LogisticssoftwareutilizationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Logistics software utilization'] === rating}
                                                        onChange={() => handleCheckboxChange('Logistics software utilization', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Regulatory compliance"
                                                checked={selectedOptions['Regulatory compliance'] !== undefined}
                                                onChange={() => handleCheckboxChange('Regulatory compliance', undefined)}
                                            />
                                            Regulatory compliance:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="RegulatorycomplianceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Regulatory compliance'] === rating}
                                                        onChange={() => handleCheckboxChange('Regulatory compliance', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Customer service"
                                                checked={selectedOptions['Customer service'] !== undefined}
                                                onChange={() => handleCheckboxChange('Customer service', undefined)}
                                            />
                                            Customer service:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="CustomerserviceRating"
                                                        value={rating}
                                                        checked={selectedOptions['Customer service'] === rating}
                                                        onChange={() => handleCheckboxChange('Customer service', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the transport or logistics sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to specialized training programs">Limited access to specialized training programs</option>
                                    <option value="Technological advancements and automation">Technological advancements and automation</option>
                                    <option value="Inadequate infrastructure for transportation and logistics operations">Inadequate infrastructure for transportation and logistics operations</option>
                                    <option value="Lack of standardized certification and licensing procedures">Lack of standardized certification and licensing procedures</option>
                                    <option value="High turnover rates and recruitment challenges">High turnover rates and recruitment challenges</option>
                                    <option value="Market fluctuations and unpredictable demand">Market fluctuations and unpredictable demand</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the transport or logistics sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to the transport or logistics sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the transport or logistics sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the transport or logistics sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the transport or logistics sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Industry conferences and seminars">Industry conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Trade publications and journals">Trade publications and journals</option>
                                    <option value="Professional associations and networks">Professional associations and networks</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the transport or logistics sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the transport or logistics sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the transport or logistics sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the transport or logistics sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }
            {
                userData.SectorQuestionnarie === "Healthcare and allied sectors"
                    ?
                    <>
                        <hr />
                        <h3>{userData.SectorQuestionnarie}</h3>
                        <div className='indiDetails'>
                            <label>How many years of experience do you have in the healthcare or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['SectorYOE']} required onChange={(e) => setUserData({ ...userData, "SectorYOE": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-6 years">4-6 years</option>
                                    <option value="7 years and above">7 years and above</option>
                                    <option value="No experience">No experience</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>

                        <div className='indiDetails'>
                            <label>Which specific area(s) of the healthcare or allied sector are you involved in?</label>
                            <div className="customSelect">
                                <select value={userData['SpecificArea']} required onChange={(e) => setUserData({ ...userData, "SpecificArea": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Medicine (e.g., physician, surgeon)">Medicine (e.g., physician, surgeon)</option>
                                    <option value="Nursing">Nursing</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="Allied health professions (e.g., physiotherapy, occupational therapy)">Allied health professions (e.g., physiotherapy, occupational therapy)</option>
                                    <option value="Medical laboratory technology">Medical laboratory technology</option>
                                    <option value="Radiology and imaging">Radiology and imaging</option>
                                    <option value="Healthcare administration/management">Healthcare administration/management</option>
                                    <option value="Public health">Public health</option>
                                    <option value="Healthcare informatics">Healthcare informatics</option>
                                    <option value="Other">Others (please specify)</option>

                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.SpecificArea === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherSpecificArea']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificArea": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>On a scale of 1 to 5, how would you rate your proficiency in the following skills relevant to the healthcare or allied sector? (1 being lowest, 5 being highest)</label>
                            {/* <div className="customSelect">
                                <select value={userData['Scale']} required onChange={(e) => setUserData({ ...userData, "Scale": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Clinical diagnosis and treatment">Clinical diagnosis and treatment</option>
                                    <option value="Patient care and bedside manner">Patient care and bedside manner</option>
                                    <option value="Medication management and administration">Medication management and administration</option>
                                    <option value="Healthcare technology utilization">Healthcare technology utilization</option>
                                    <option value="Health education and promotion">Health education and promotion</option>
                                    <option value="Healthcare administration and management">Healthcare administration and management</option>
                                    <option value="Research and evidence-based practice">Research and evidence-based practice</option>
                                    <option value="Infection control and prevention">Infection control and prevention</option>
                                </select>
                                <span className="customArrow"></span>
                            </div> */}
                            <div className='checkbox'>
                                <h3>Select options:</h3>
                                <div className='checkboxContent'>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Clinical diagnosis and treatment"
                                                checked={selectedOptions['Clinical diagnosis and treatment'] !== undefined}
                                                onChange={() => handleCheckboxChange('Clinical diagnosis and treatment', undefined)}
                                            />
                                            Clinical diagnosis and treatment:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        type="radio"
                                                        name="ClinicaldiagnosisandtreatmentRating"
                                                        value={rating}
                                                        checked={selectedOptions['Clinical diagnosis and treatment'] === rating}
                                                        onChange={() => handleCheckboxChange('Clinical diagnosis and treatment', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Patient care and bedside manner"
                                                checked={selectedOptions['Patient care and bedside manner'] !== undefined}
                                                onChange={() => handleCheckboxChange('Patient care and bedside manner', undefined)}
                                            />
                                            Patient care and bedside manner:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="PatientcareandbedsidemannerRating"
                                                        value={rating}
                                                        checked={selectedOptions['Patient care and bedside manner'] === rating}
                                                        onChange={() => handleCheckboxChange('Patient care and bedside manner', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Medication management and administration"
                                                checked={selectedOptions['Medication management and administration'] !== undefined}
                                                onChange={() => handleCheckboxChange('Medication management and administration', undefined)}
                                            />
                                            Medication management and administration:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="MedicationmanagementandadministrationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Medication management and administration'] === rating}
                                                        onChange={() => handleCheckboxChange('Medication management and administration', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Healthcare technology utilization"
                                                checked={selectedOptions['Healthcare technology utilization'] !== undefined}
                                                onChange={() => handleCheckboxChange('Healthcare technology utilization', undefined)}
                                            />
                                            Healthcare technology utilization:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="HealthcaretechnologyutilizationRating"
                                                        value={rating}
                                                        checked={selectedOptions['Healthcare technology utilization'] === rating}
                                                        onChange={() => handleCheckboxChange('Healthcare technology utilization', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Health education and promotion"
                                                checked={selectedOptions['Health education and promotion'] !== undefined}
                                                onChange={() => handleCheckboxChange('Health education and promotion', undefined)}
                                            />
                                            Health education and promotion:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="HealtheducationandpromotionRating"
                                                        value={rating}
                                                        checked={selectedOptions['Health education and promotion'] === rating}
                                                        onChange={() => handleCheckboxChange('Health education and promotion', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Healthcare administration and management"
                                                checked={selectedOptions['Healthcare administration and management'] !== undefined}
                                                onChange={() => handleCheckboxChange('Healthcare administration and management', undefined)}
                                            />
                                            Healthcare administration and management:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="HealthcareadministrationandmanagementRating"
                                                        value={rating}
                                                        checked={selectedOptions['Healthcare administration and management'] === rating}
                                                        onChange={() => handleCheckboxChange('Healthcare administration and management', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />

                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Research and evidence-based practice"
                                                checked={selectedOptions['Research and evidence-based practice'] !== undefined}
                                                onChange={() => handleCheckboxChange('Research and evidence-based practice', undefined)}
                                            />
                                            Research and evidence-based practice:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="Researchandevidence-basedpracticeRating"
                                                        value={rating}
                                                        checked={selectedOptions['Research and evidence-based practice'] === rating}
                                                        onChange={() => handleCheckboxChange('Research and evidence-based practice', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                    <label>
                                        <div className="check">
                                            <input
                                                type="checkbox"
                                                value="Infection control and prevention"
                                                checked={selectedOptions['Infection control and prevention'] !== undefined}
                                                onChange={() => handleCheckboxChange('Infection control and prevention', undefined)}
                                            />
                                            Infection control and prevention:
                                        </div>
                                        <div className="radioBtns">
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <div key={rating}>
                                                    <span>{rating}</span> {/* Display rating value */}
                                                    <input
                                                        key={rating}
                                                        type="radio"
                                                        name="InfectioncontrolandpreventionRating"
                                                        value={rating}
                                                        checked={selectedOptions['Infection control and prevention'] === rating}
                                                        onChange={() => handleCheckboxChange('Infection control and prevention', rating)}
                                                    />
                                                    <span>{getRatingDescription(rating)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </label>
                                    <hr />
                                </div>



                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>What do you perceive as the most critical skill gap(s) in the healthcare or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['CriticalSkillGap']} required onChange={(e) => setUserData({ ...userData, "CriticalSkillGap": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>What factors do you think contribute to these skill gaps?</label>
                            <div className="customSelect">
                                <select value={userData['Factors']} required onChange={(e) => setUserData({ ...userData, "Factors": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Limited access to quality education and training programs">Limited access to quality education and training programs</option>
                                    <option value="Insufficient healthcare infrastructure and resources">Insufficient healthcare infrastructure and resources</option>
                                    <option value="Rapid advancements in medical technology and treatments">Rapid advancements in medical technology and treatments</option>
                                    <option value="High patient-to-provider ratio and workload">High patient-to-provider ratio and workload</option>
                                    <option value="Inadequate government funding and support for healthcare education">Inadequate government funding and support for healthcare education</option>
                                    <option value="Lack of awareness about emerging healthcare issues and best practices">Lack of awareness about emerging healthcare issues and best practices</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.Factors === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherFactors']} required onChange={(e) => setUserData({ ...userData, "OtherFactors": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>How do you think skill development initiatives can be improved in the healthcare or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['SDI']} required onChange={(e) => setUserData({ ...userData, "SDI": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Have you undergone any formal training or certification programs related to the healthcare or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['FormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "FormalTrainCerti": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the type of training or certification program you have undergone.</label>
                            <input type='text' value={userData['SpecifiedFormalTrainCerti']} required onChange={(e) => setUserData({ ...userData, "SpecifiedFormalTrainCerti": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How satisfied are you with the existing skill development programs available in the healthcare or allied sector of Jammu & Kashmir UT?</label>
                            <div className="customSelect">
                                <select value={userData['Satisfaction']} required onChange={(e) => setUserData({ ...userData, "Satisfaction": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Very satisfied">Very satisfied</option>
                                    <option value="Satisfied">Satisfied</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Dissatisfied">Dissatisfied</option>
                                    <option value="Very dissatisfied">Very dissatisfied</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific skills or areas of knowledge that you believe are currently lacking in the training programs available for the healthcare or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['SpecifySkills']} required onChange={(e) => setUserData({ ...userData, "SpecifySkills": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>If yes, please specify the skills or areas of knowledge that you believe are lacking.</label>
                            <input type='text' value={userData['SpecifiedSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecifiedSpecificSkills": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How do you stay updated with the latest trends and developments in the healthcare or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['StayUpdated']} required onChange={(e) => setUserData({ ...userData, "StayUpdated": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Professional conferences and seminars">Professional conferences and seminars</option>
                                    <option value="Online courses and webinars">Online courses and webinars</option>
                                    <option value="Medical journals and publications">Medical journals and publications</option>
                                    <option value="Professional associations and networks">Professional associations and networks</option>
                                    <option value="Social media and online forums">Social media and online forums</option>
                                    <option value="Other">Other (please specify)</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                            {
                                userData.StayUpdated === "Other"
                                    ?
                                    <div className='other'>
                                        <h5>
                                            Specify:
                                        </h5>
                                        <input type="text" value={userData['OtherStayUpdated']} required onChange={(e) => setUserData({ ...userData, "OtherStayUpdated": e.target.value })} name="name" id="name" />
                                    </div>
                                    : ""
                            }
                        </div>
                        <div className='indiDetails'>
                            <label>In your opinion, what role can the government play in bridging the skill gaps within the healthcare or allied sector of Jammu & Kashmir UT?</label>
                            <textarea rows={8} type='text' value={userData['Opinion']} required onChange={(e) => setUserData({ ...userData, "Opinion": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>Are there any specific challenges or obstacles that hinder skill development efforts in the healthcare or allied sector of Jammu & Kashmir UT? If yes, please elaborate.</label>
                            <textarea rows={8} type='text' value={userData['SpecificChal']} required onChange={(e) => setUserData({ ...userData, "SpecificChal": e.target.value })} />
                        </div>
                        <div className='indiDetails'>
                            <label>How important do you think it is for the healthcare or allied sector in Jammu & Kashmir UT to prioritize skill development initiatives?</label>
                            <div className="customSelect">
                                <select value={userData['PSD']} required onChange={(e) => setUserData({ ...userData, "PSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Extremely important">Extremely important</option>
                                    <option value="Important">Important</option>
                                    <option value="Somewhat important">Somewhat important</option>
                                    <option value="Not very important">Not very important</option>
                                    <option value="Not important at all">Not important at all</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                        <div className='indiDetails'>
                            <label>Would you be interested in participating in future skill development programs or initiatives aimed at enhancing your skills within the healthcare or allied sector?</label>
                            <div className="customSelect">
                                <select value={userData['FSD']} required onChange={(e) => setUserData({ ...userData, "FSD": e.target.value })}>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                                <span className="customArrow"></span>
                            </div>
                        </div>
                    </>
                    : ""
            }




        </div>
    );
}

export default SpecificQuestions;