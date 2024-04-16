import React, { useContext } from 'react';
import "../style.css"
import { multiStepContext } from '../../StepContext';


function FirstForm() {
    const { userData, setUserData } = useContext(multiStepContext);
    return (
        <div className='mainForm'>
            <div className='indiDetails'>
                <label>Which sector do you currently work in?</label>
                <div className="customSelect">
                    <select value={userData['EmployeeStatus']} required onChange={(e) => setUserData({ ...userData, "EmployeeStatus": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                        <option value="Non-profit organization">Non-profit organization</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Unemployed">Unemployed</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>What is your highest level of education completed?</label>
                <div className="customSelect">
                    <select value={userData['Education']} required onChange={(e) => setUserData({ ...userData, "Education": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Less than high school">Less than high school</option>
                        <option value="High school diploma">High school diploma</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or professional degree">Doctorate or professional degree</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>Which of the following best describes your occupation?</label>
                <div className="customSelect">
                    <select value={userData['Occupation']} required onChange={(e) => setUserData({ ...userData, "Occupation": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Administration/Management">Administration/Management</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Education/Training">Education/Training</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Manufacturing/Production">Manufacturing/Production</option>
                        <option value="Hospitality/Tourism">Hospitality/Tourism</option>
                        <option value="Agriculture/Farming">Agriculture/Farming</option>
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
                {
                    userData.Occupation === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherOccupation']} required onChange={(e) => setUserData({ ...userData, "OtherOccupation": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>



            <div className='indiDetails'>
                <label>How would you rate your current skill level in your field of work?</label>
                <div className="customSelect">
                    <select value={userData['CurrentSkillLevel']} required onChange={(e) => setUserData({ ...userData, "CurrentSkillLevel": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>Which skills do you believe are most crucial for your job role?</label>
                <div className="customSelect">
                    <select value={userData['CrucialSkill']} required onChange={(e) => setUserData({ ...userData, "CrucialSkill": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Communication">Communication</option>
                        <option value="Technical/IT skills">Technical/IT skills</option>
                        <option value="Leadership/Management">Leadership/Management</option>
                        <option value="Problem-solving">Problem-solving</option>
                        <option value="Adaptability/Flexibility">Adaptability/Flexibility</option>
                        <option value="Creativity/Innovation">Creativity/Innovation</option>
                        <option value="Critical thinking">Critical thinking</option>
                        <option value="Teamwork/Collaboration">Teamwork/Collaboration</option>
                        <option value="Other">Other (please specify)</option>

                    </select>
                    <span className="customArrow"></span>
                </div>
                {
                    userData.CrucialSkill === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherCrucialSkill']} required onChange={(e) => setUserData({ ...userData, "OtherCrucialSkill": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
            <div className='indiDetails'>
                <label>How often do you participate in training or professional development activities to enhance your skills?</label>
                <div className="customSelect">
                    <select value={userData['PartiTrainProDev']} required onChange={(e) => setUserData({ ...userData, "PartiTrainProDev": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Never">Never</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Occasionally">Occasionally</option>
                        <option value="Regularly">Regularly</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>Do you feel adequately prepared with the skills needed for your current job role?</label>
                <div className="customSelect">
                    <select value={userData['AdequatPrepared']} required onChange={(e) => setUserData({ ...userData, "AdequatPrepared": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>If you answered "No" to the previous question, which specific skills do you feel are lacking or insufficient?</label>
                <div className="customSelect">
                    <select value={userData['SpecificSkills']} required onChange={(e) => setUserData({ ...userData, "SpecificSkills": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Communication">Communication</option>
                        <option value="Technical/IT skills">Technical/IT skills</option>
                        <option value="Leadership/Management">Leadership/Management</option>
                        <option value="Problem-solving">Problem-solving</option>
                        <option value="Adaptability/Flexibility">Adaptability/Flexibility</option>
                        <option value="Creativity/Innovation">Creativity/Innovation</option>
                        <option value="Critical thinking">Critical thinking</option>
                        <option value="Teamwork/Collaboration">Teamwork/Collaboration</option>
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
                {
                    userData.SpecificSkills === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherSpecificSkills']} required onChange={(e) => setUserData({ ...userData, "OtherSpecificSkills": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
            <div className='indiDetails'>
                <label>Are there any barriers preventing you from acquiring the necessary skills for your job role?</label>
                <div className="customSelect">
                    <select value={userData['NecessaySkills']} required onChange={(e) => setUserData({ ...userData, "NecessaySkills": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Financial constraints">Financial constraints</option>
                        <option value="Time constraints due to job responsibilities">Time constraints due to job responsibilities</option>
                        <option value="Lack of access to training programs">Lack of access to training programs</option>
                        <option value="Limited availability of relevant courses">Limited availability of relevant courses</option>
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
                {
                    userData.NecessaySkills === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherNecessaySkills']} required onChange={(e) => setUserData({ ...userData, "OtherNecessaySkills": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
            <div className='indiDetails'>
                <label>Do you think educational/training institutes are training as per current or emerging market demand/needs?</label>
                <div className="customSelect">
                    <select value={userData['EduTrainInstit']} required onChange={(e) => setUserData({ ...userData, "EduTrainInstit": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Partially">Partially</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>If “No” what are the necessary Changes/Updates/improvements you want to suggest/recommend in the system?</label>
                <div className="customSelect">
                    <select value={userData['SuggestionToSystem']} required onChange={(e) => setUserData({ ...userData, "SuggestionToSystem": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Industry Collaboration">GovernIndustry Collaborationment</option>
                        <option value="Regular Curriculum Review">Regular Curriculum Review</option>
                        <option value="Flexible and Customizable Programs">Flexible and Customizable Programs</option>
                        <option value="Professional Development for Faculty">Professional Development for Faculty</option>
                        <option value="Internship and Work Placement Opportunities">Internship and Work Placement Opportunities</option>
                        <option value="Entrepreneurship and Innovation Support">Entrepreneurship and Innovation Support</option>
                        <option value="Industry-Relevant Research">Industry-Relevant Research</option>
                        <option value="Career Counseling and Guidance">Career Counseling and Guidance</option>
                        <option value="Quality Assurance Mechanisms">Quality Assurance Mechanisms</option>
                        <option value="Government Support and Funding">Government Support and Funding</option>
                        <option value="Industry Immersion Programs">Industry Immersion Programs</option>
                        <option value="Continual Professional Development">Continual Professional Development</option>
                        <option value="Soft Skills Development">Soft Skills Development</option>
                        <option value="Regional Industry Analysis">Regional Industry Analysis</option>
                        <option value="Global Perspective Integration">Global Perspective Integration</option>
                        <option value="Cross-Disciplinary Collaboration">Cross-Disciplinary Collaboration</option>
                        <option value="Feedback Mechanisms">Feedback Mechanisms</option>
                        <option value="Technology Integration">Technology Integration</option>
                        <option value="Inclusive Education">Inclusive Education</option>
                        <option value="Promotion of Lifelong Learning Culture">Promotion of Lifelong Learning Culture</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
            </div>
            <div className='indiDetails'>
                <label>How do you believe the government or other institutions can better support skill development in Jammu and Kashmir UT?</label>
                <div className="customSelect">
                    <select value={userData['GovSupportSkillDev']} required onChange={(e) => setUserData({ ...userData, "GovSupportSkillDev": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Offering subsidized training programs">Offering subsidized training programs</option>
                        <option value="Providing scholarships or financial aid for education">Providing scholarships or financial aid for education</option>
                        <option value="Establishing more vocational training centers">Establishing more vocational training centers</option>
                        <option value="Improving access to online learning resources">Improving access to online learning resources</option>
                        <option value="Encouraging partnerships between educational institutions and industries">Encouraging partnerships between educational institutions and industries</option>
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow"></span>
                </div>
                {
                    userData.GovSupportSkillDev === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherGovSupportSkillDev']} required onChange={(e) => setUserData({ ...userData, "OtherGovSupportSkillDev": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>
        </div>
    );
}

export default FirstForm;