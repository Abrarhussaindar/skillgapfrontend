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
                {/* <div className="customSelect">
                    <select value={userData['Education']} required onChange={(e) => setUserData({ ...userData, "Education": e.target.value })}>
                        <option value="">Select Option</option>
                        <option value="Less than high school">Less than high school</option>
                        <option value="High school diploma">High school diploma</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or professional degree">Doctorate or professional degree</option>
                    </select>
                    <span className="customArrow"></span>
                </div> */}

                <div className="customSelect">

                    <select value={userData['Qualification']} required onChange={(e) => setUserData({ ...userData, "Qualification": e.target.value })}>
                        <option value="">Select Option</option>
                        <hr />
                        <option value="No Formal Education">No Formal Education</option>
                        <hr />
                        <option value="Below 10th">Below 10th</option>
                        <hr />
                        <option value="10 Pass">10 Pass</option>
                        <hr />
                        <option value="12th Pass">12th Pass</option>
                        <hr />
                        <option value="Under Graduate">Under Graduate</option>
                        <hr />
                        <option value="Graduate">Graduate</option>
                        <hr />
                        <option value="Post Graduate">Post Graduate</option>
                        <hr />
                        <option value="Mphill">Mphill</option>
                        <hr />
                        <option value="Phd">Phd</option>
                        <hr />
                        <option value="Proffessional">Proffessional</option>
                        <hr />
                        <option value="Diploma">Diploma</option>
                        <hr />
                        <option value="ITI">ITI</option>
                        <hr />
                        <option value="Other">Other (please specify)</option>
                    </select>
                    <span className="customArrow">
                        {/* <img className="logo" src={arrow} alt="arrow" /> */}
                    </span>
                </div>
                {
                    userData.Qualification === "Other"
                        ?
                        <div className='other'>
                            <h5>
                                Specify:
                            </h5>
                            <input type="text" value={userData['OtherQualification']} required onChange={(e) => setUserData({ ...userData, "OtherQualification": e.target.value })} name="name" id="name" />
                        </div>
                        : ""
                }
            </div>

            <div className='topEd'>
                <div className='top'>
                    {
                        userData.Qualification === "12th Pass"
                            ?
                            <>

                                <div className="indiDetails">
                                    <label htmlFor="email">Stream</label>
                                    <div className='customSelect'>
                                        <select value={userData['Stream']} required onChange={(e) => setUserData({...userData, "Stream": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Science">Science</option>
                                            <hr />
                                            <option value="Commerce">Commerce</option>
                                            <hr />
                                            <option value="Humanities or Arts">Humanities or Arts</option>
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Stream === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherStream']} required onChange={(e) => setUserData({...userData, "OtherStream": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Main Subjects</label>
                                    <div className='customSelect'>
                                        <select value={userData['Subject']} required onChange={(e) => setUserData({...userData, "Subject": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.Stream === "Science"
                                                    ?
                                                    <>
                                                        <option value="PCB">Physics, Chemistry, Biology (PCB)</option>
                                                        <hr />
                                                        <option value="PCM">Physics, Chemistry, Mathematics (PCM)</option>
                                                        <hr />
                                                        <option value="PCCS">Physics, Chemistry, Computer Science (PCCS)</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Stream === "Commerce"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Stream === "Humanities or Arts"
                                                    ?
                                                    <>
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Subject === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherSubject']} required onChange={(e) => setUserData({...userData, "OtherSubject": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Under Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['Course']} required onChange={(e) => setUserData({...userData, "Course": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                            <hr />
                                            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                                            <hr />
                                            <option value="Bachelor of Commerce (B.Com.)">Bachelor of Commerce (B.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Course === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherCourse']} required onChange={(e) => setUserData({...userData, "OtherCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['Field']} required onChange={(e) => setUserData({...userData, "Field": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.Course === "Bachelor of Arts (B.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Bachelor of Science (B.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Bachelor of Commerce (B.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Bachelor of Engineering (B.E.)">Bachelor of Engineering (B.E.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Technology (B.Tech.)">Bachelor of Technology (B.Tech.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Computer Applications (BCA)">Bachelor of Computer Applications (BCA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Architecture (B.Arch.)">Bachelor of Architecture (B.Arch.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>
                                                        <hr />
                                                        <option value="Bachelor of Education (B.Ed.)">Bachelor of Education (B.Ed.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Tourism">Bachelor of Tourism</option>
                                                        <hr />
                                                        <option value="Bachelor of IT">Bachelor of IT</option>
                                                        <hr />
                                                        <option value="Bachelor of Hotel Manangment">Bachelor of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Bachelor of Fashion Technology">Bachelor of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Bachelor of Mass Communication">Bachelor of Mass Communication</option>
                                                        <hr />
                                                        <option value="Bachelor of Agriculture">Bachelor of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Field === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherField']} required onChange={(e) => setUserData({...userData, "OtherField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.Field === "Bachelor of Engineering (B.E.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Field === "Bachelor of Technology (B.Tech.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['Course']} required onChange={(e) => setUserData({...userData, "Course": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                            <hr />
                                            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                                            <hr />
                                            <option value="Bachelor of Commerce (B.Com.)">Bachelor of Commerce (B.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}
                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Course === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherCourse']} required onChange={(e) => setUserData({...userData, "OtherCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['Field']} required onChange={(e) => setUserData({...userData, "Field": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.Course === "Bachelor of Arts (B.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Bachelor of Science (B.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Bachelor of Commerce (B.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Bachelor of Engineering (B.E)">Bachelor of Engineering (B.E.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                                                        <hr />
                                                        <option value="Bachelor of Architecture (B.Arch.)">Bachelor of Architecture (B.Arch.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>
                                                        <hr />
                                                        <option value="Bachelor of Education (B.Ed.)">Bachelor of Education (B.Ed.)</option>
                                                        <hr />
                                                        <option value="Bachelor of Tourism">Bachelor of Tourism</option>
                                                        <hr />
                                                        <option value="Bachelor of IT">Bachelor of IT</option>
                                                        <hr />
                                                        <option value="Bachelor of Hotel Manangment">Bachelor of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Bachelor of Fashion Technology">Bachelor of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Bachelor of Mass Communication">Bachelor of Mass Communication</option>
                                                        <hr />
                                                        <option value="Bachelor of Agriculture">Bachelor of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Field === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherField']} required onChange={(e) => setUserData({...userData, "OtherField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.Field === "Bachelor of Engineering (B.E)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Field === "Bachelor of Technology (B.Tech)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }

                    {
                        userData.Qualification === "Post Graduate"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['Course']} required onChange={(e) => setUserData({...userData, "Course": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Masters in Arts (M.A.)">Masters in Arts (M.A.)</option>
                                            <hr />
                                            <option value="Masters in Science (M.Sc.)">Masters in Science (M.Sc.)</option>
                                            <hr />
                                            <option value="Masters in Commerce (M.Com.)">Masters in Commerce (M.Com.)</option>
                                            <hr />
                                            <option value="Professional Degrees">Professional Degrees</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}

                                            <hr />
                                            <option value="Other">Other (please specify)</option>

                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Course === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherCourse']} required onChange={(e) => setUserData({...userData, "OtherCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="indiDetails">
                                    <label htmlFor="email">Field</label>
                                    <div className='customSelect'>
                                        <select value={userData['Field']} required onChange={(e) => setUserData({...userData, "Field": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            {
                                                userData.Course === "Masters in Arts (M.A.)"
                                                    ?
                                                    <>
                                                        <option value="English Literature">English Literature</option>
                                                        <hr />
                                                        <option value="History">History</option>
                                                        <hr />
                                                        <option value="Political Science">Political Science</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Sociology">Sociology</option>
                                                        <hr />
                                                        <option value="Psychology">Psychology</option>
                                                        <hr />
                                                        <option value="Geography">Geography</option>
                                                        <hr />
                                                        <option value="Philosophy">Philosophy</option>
                                                        <hr />
                                                        <option value="Languages (e.g., Hindi, Urdu, Sanskrit)">Languages (e.g., Hindi, Urdu, Sanskrit)</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Masters in Science (M.Sc.)"
                                                    ?
                                                    <>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <hr />
                                                        <option value="Physics">Physics</option>
                                                        <hr />
                                                        <option value="Chemistry">Chemistry</option>
                                                        <hr />
                                                        <option value="Biology">Biology</option>
                                                        <hr />
                                                        <option value="Computer Science">Computer Science</option>
                                                        <hr />
                                                        <option value="Environmental Science">Environmental Science</option>
                                                        <hr />
                                                        <option value="Statistics">Statistics</option>
                                                        <hr />
                                                        <option value="Electronics">Electronics</option>
                                                        <hr />
                                                        <option value="Geology">Geology</option>
                                                        <hr />
                                                        <option value="Botany">Botany</option>
                                                        <hr />
                                                        <option value="Zoology">Zoology</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Masters in Commerce (M.Com.)"
                                                    ?
                                                    <>
                                                        <option value="Accountancy">Accountancy</option>
                                                        <hr />
                                                        <option value="Business Studies">Business Studies</option>
                                                        <hr />
                                                        <option value="Economics">Economics</option>
                                                        <hr />
                                                        <option value="Financial Management">Financial Management</option>
                                                        <hr />
                                                        <option value="Taxation">Taxation</option>
                                                        <hr />
                                                        <option value="Business Law">Business Law</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }
                                            {
                                                userData.Course === "Professional Degrees"
                                                    ?
                                                    <>
                                                        <option value="Masters of Engineering (M.E.)">Masters of Engineering (M.E.)</option>
                                                        <hr />
                                                        <option value="Masters of Technology (M.Tech.)">Masters of Technology (M.Tech.)</option>
                                                        <hr />
                                                        <option value="Masters of Computer Applications (MCA)">Masters of Computer Applications (MCA)</option>
                                                        <hr />
                                                        <option value="Masters of Business Administration (MBA)">Masters of Business Administration (MBA)</option>
                                                        <hr />
                                                        <option value="Masters of Architecture (M.Arch.)">Masters of Architecture (M.Arch.)</option>
                                                        <hr />
                                                        <option value="Masters of Pharmacy (M.Pharm)">Masters of Pharmacy (M.Pharm)</option>
                                                        <hr />
                                                        <option value="Masters of Education (M.Ed.)">Mastersr of Education (M.Ed.)</option>
                                                        <hr />
                                                        <option value="Masters of Tourism">Masters of Tourism</option>
                                                        <hr />
                                                        <option value="Masters of IT">Masters of IT</option>
                                                        <hr />
                                                        <option value="Masters of Hotel Manangment">Masters of Hotel Manangment</option>
                                                        <hr />
                                                        <option value="Masters of Fashion Technology">Masters of Fashion Technology</option>
                                                        <hr />
                                                        <option value="Masters of Mass Communication">Masters of Mass Communication</option>
                                                        <hr />
                                                        <option value="Masters of Agriculture">Masters of Agriculture</option>

                                                        <hr />
                                                        <option value="Other">Other (please specify)</option>
                                                    </>
                                                    : ""
                                            }




                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Field === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherField']} required onChange={(e) => setUserData({...userData, "OtherField": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div></>
                            : ""
                    }
                    {/* under grad fields */}
                    {
                        userData.Field === "Masters of Engineering (M.E.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <hr />
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <hr />
                                            <option value="Electrical Engineering">Electrical Engineering</option>
                                            <hr />
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Chemical Engineering">Chemical Engineering</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biomedical Engineering">Biomedical Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Ceramic Engineering">Ceramic Engineering</option>
                                            <hr />
                                            <option value="Marine Engineering">Marine Engineering</option>
                                            <hr />
                                            <option value="Fire Engineering">Fire Engineering</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Field === "Masters of Technology (M.Tech.)"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Branch</label>
                                    <div className='customSelect'>
                                        <select value={userData['Branch']} required onChange={(e) => setUserData({...userData, "Branch": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Computer Science and Engineering (CSE)">Computer Science and Engineering (CSE)</option>
                                            <hr />
                                            <option value="Mechanical Engineering (ME)">Mechanical Engineering (ME)</option>
                                            <hr />
                                            <option value="Electrical Engineering (EE)">Electrical Engineering (EE)</option>
                                            <hr />
                                            <option value="Civil Engineering (CE)">Civil Engineering (CE)</option>
                                            <hr />
                                            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <hr />
                                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                                            <hr />
                                            <option value="Chemical Engineering (ChemE)">Chemical Engineering (ChemE)</option>
                                            <hr />
                                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                                            <hr />
                                            <option value="Biotechnology Engineering">Biotechnology Engineering</option>
                                            <hr />
                                            <option value="Automobile Engineering">Automobile Engineering</option>
                                            <hr />
                                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Environmental Engineering">Environmental Engineering</option>
                                            <hr />
                                            <option value="Industrial Engineering">Industrial Engineering</option>
                                            <hr />
                                            <option value="Agricultural Engineering">Agricultural Engineering</option>
                                            <hr />
                                            <option value="Petroleum Engineering">Petroleum Engineering</option>
                                            <hr />
                                            <option value="Mining Engineering">Mining Engineering</option>
                                            <hr />
                                            <option value="Metallurgical Engineering">Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <hr />
                                            <option value="Bioinformatics">Bioinformatics</option>
                                            <hr />
                                            <option value="Food Technology">Food Technology</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>
                                            {/* <hr />
                                                            <option value="B Tech">B Tech</option>
                                                            <hr />
                                                            <option value="BE">BE</option> */}


                                        </select>
                                        <span className="customArrow">
                                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                                        </span>
                                    </div>
                                    {
                                        userData.Branch === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherBranch']} required onChange={(e) => setUserData({...userData, "OtherBranch": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }

                </div>
                
                <div className='bottom'>
                    {
                        userData.Qualification === "Mphill"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Mphill']} required onChange={(e) => setUserData({...userData, "Mphill": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Phd"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Phd']} required onChange={(e) => setUserData({...userData, "Phd": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Proffessional"
                            ?
                            <>
                                <div className="indiDetails">

                                    <h5>
                                        Specify:
                                    </h5>
                                    <input type="text" value={userData['Prof']} required onChange={(e) => setUserData({...userData, "Prof": e.target.value})} name="name" id="name" />
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "Diploma"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['DipCourse']} required onChange={(e) => setUserData({...userData, "DipCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Diploma in Civil Engineering">Diploma in Civil Engineering</option>
                                            <hr />
                                            <option value="Diploma in Mechanical Engineering">Diploma in Mechanical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Electrical Engineering">Diploma in Electrical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Electronics and Communication Engineering">Diploma in Electronics and Communication Engineering</option>
                                            <hr />
                                            <option value="Diploma in Computer Science and Engineering">Diploma in Computer Science and Engineering</option>
                                            <hr />
                                            <option value="Diploma in Chemical Engineering">Diploma in Chemical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Automobile Engineering">Diploma in Automobile Engineering</option>
                                            <hr />
                                            <option value="Diploma in Instrumentation Engineering">Diploma in Instrumentation Engineering</option>
                                            <hr />
                                            <option value="Diploma in Mining Engineering">Diploma in Mining Engineering</option>
                                            <hr />
                                            <option value="Diploma in Petroleum Engineering">Diploma in Petroleum Engineering</option>
                                            <hr />
                                            <option value="Diploma in Textile Engineering">Diploma in Textile Engineering</option>
                                            <hr />
                                            <option value="Diploma in Metallurgical Engineering">Diploma in Metallurgical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Agricultural Engineering">Diploma in Agricultural Engineering</option>
                                            <hr />
                                            <option value="Diploma in Marine Engineering">Diploma in Marine Engineering</option>
                                            <hr />
                                            <option value="Diploma in Ceramic Engineering">Diploma in Ceramic Engineering</option>
                                            <hr />
                                            <option value="Diploma in Industrial Engineering">Diploma in Industrial Engineering</option>
                                            <hr />
                                            <option value="Diploma in Environmental Engineering">Diploma in Environmental Engineering</option>
                                            <hr />
                                            <option value="Diploma in Fire Engineering">Diploma in Fire Engineering</option>
                                            <hr />
                                            <option value="Diploma in Biomedical Engineering">Diploma in Biomedical Engineering</option>
                                            <hr />
                                            <option value="Diploma in Aerospace Engineering">Diploma in Aerospace Engineering</option>


                                            <hr />
                                            <option value="Other">Other (please specify)</option>

                                        </select>
                                        <span className="customArrow">

                                        </span>
                                    </div>
                                    {
                                        userData.DipCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherDipCourse']} required onChange={(e) => setUserData({...userData, "OtherDipCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                    {
                        userData.Qualification === "ITI"
                            ?
                            <>
                                <div className="indiDetails">
                                    <label htmlFor="email">Course</label>
                                    <div className='customSelect'>
                                        <select value={userData['ItiCourse']} required onChange={(e) => setUserData({...userData, "ItiCourse": e.target.value})}>
                                            <option value="">Select Option</option>
                                            <hr />
                                            <option value="Electrician">Electrician</option>
                                            <hr />
                                            <option value="Fitter">Fitter</option>
                                            <hr />
                                            <option value="Welder">Welder</option>
                                            <hr />
                                            <option value="Turner">Turner</option>
                                            <hr />
                                            <option value="Machinist">Machinist</option>
                                            <hr />
                                            <option value="Mechanic (Motor Vehicle)">Mechanic (Motor Vehicle)</option>
                                            <hr />
                                            <option value="Mechanic (Diesel)">Mechanic (Diesel)</option>
                                            <hr />
                                            <option value="Plumber">Plumber</option>
                                            <hr />
                                            <option value="Carpenter">Carpenter</option>
                                            <hr />
                                            <option value="Refrigeration and Air Conditioning Mechanic">Refrigeration and Air Conditioning Mechanic</option>
                                            <hr />
                                            <option value="Electronics Mechanic">Electronics Mechanic</option>
                                            <hr />
                                            <option value="Computer Operator and Programming Assistant (COPA)">Computer Operator and Programming Assistant (COPA)</option>
                                            <hr />
                                            <option value="Draughtsman (Civil/Mechanical)">Draughtsman (Civil/Mechanical)</option>
                                            <hr />
                                            <option value="Instrument Mechanic">Instrument Mechanic</option>
                                            <hr />
                                            <option value="Information Technology and Electronics System Maintenance (ITESM)">Information Technology and Electronics System Maintenance (ITESM)</option>
                                            <hr />
                                            <option value="Painter (General)">Painter (General)</option>
                                            <hr />
                                            <option value="Surveyor">Surveyor</option>
                                            <hr />
                                            <option value="Mason (Building Constructor)">Mason (Building Constructor)</option>
                                            <hr />
                                            <option value="Mechanic (Radio and Television)">Mechanic (Radio and Television)</option>
                                            <hr />
                                            <option value="Mechanic (Tractor)">Mechanic (Tractor)</option>

                                            <hr />
                                            <option value="Other">Other (please specify)</option>


                                        </select>
                                        <span className="customArrow">

                                        </span>
                                    </div>
                                    {
                                        userData.ItiCourse === "Other"
                                            ?
                                            <div className='other'>
                                                <h5>
                                                    Specify:
                                                </h5>
                                                <input type="text" value={userData['OtherItiCourse']} required onChange={(e) => setUserData({...userData, "OtherItiCourse": e.target.value})} name="name" id="name" />
                                            </div>
                                            : ""
                                    }
                                </div>
                            </>
                            : ""
                    }
                </div>
                

            </div>
            <hr />
            {/* rest */}
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