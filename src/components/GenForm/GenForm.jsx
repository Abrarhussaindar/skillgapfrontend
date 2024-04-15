import React, { useContext, useState } from "react";
import "../style.css";
import { multiStepContext } from "../../StepContext";

function GenForm() {

    const { userData, setUserData } = useContext(multiStepContext);

    // console.log("userData", userData);



    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [pinCode, setPinCode] = useState("");
    // const [dob, setDob] = useState("");

    // const [dis, setDis] = useState();
    // const [division, setDiv] = useState();
    // const [block, setBlock] = useState();
    // const [gender, setGen] = useState();

    // const [mariStatus, setMariStatus] = useState();
    // const [religion, setReligion] = useState();
    // const [OtherReligion, setOtherReligion] = useState();

    // const [clas, setClas] = useState();
    // const [socialClas, setSocailClas] = useState();
    // const [ageGroup, setAgeGroup] = useState();
    // const [monthlyIncome, setMonthlyIncome] = useState();
    // const [pinArea, setPinArea] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [adhNumber, setAdhNumber] = useState("")
    // const [otherArea, setOtherArea] = useState("")
    // console.log(phoneNumber);
    // const changePhoneFoucs = (target, index) => {
    //     if (isNaN(target.value)) {
    //         return false
    //     }
    //     setUserData({ ...userData, "PhoneNumber": phoneNumber })
    //     setPhoneNumber([...phoneNumber.map((v, ind) => (ind === index ? target.value : v))])
    //     if (target.nextSibling) {
    //         target.nextSibling.focus();
    //     }
    //     // value={userData['Division']} required onChange={(e) => setUserData({...userData, "Division": e.target.value})}

    // }
    // if (phoneNumber.length === 10 && phoneNumber[phoneNumber.length] === " ") {

    // }
    // const changeAdhFoucs = (target, index) => {
    //     if (isNaN(target.value)) {
    //         return false
    //     }
    //     setAdhNumber([...adhNumber.map((v, ind) => (ind === index ? target.value : v))])
    //     if (target.nextSibling) {
    //         target.nextSibling.focus();
    //     }
    //     setUserData({ ...userData, "AdhaarNumber": adhNumber })
    // }

    // console.log(pinCode);


    // const [email, setEmail] = useState("");

    const [pinCodes, setPinCodes] = useState({
        "184104": ["Mini Sect. (Kathua)"],
        "181205": ["Muthi"],
        "185151": ["Noashera"],
        "184121": ["Samba"],
        "180019": ["Sidhara Housing Colony"],
        "185202": ["Solki", "Kalakote"],
        "185153": ["Sunderbani"],
        "184120": ["Vijaypur"],
        "182121": ["Garhi", "Pampore"],
        "184101": ["Kathua"],
        "182301": ["Katra"],
        "185155": ["Bhawani"],
        "185233": ["Budhal"],
        "185135": ["Darhal Malkan"],
        "185111": ["D. Mendhar"],
        "185132": ["Jawaharnagar"],
        // "185202": ["Kalakote"],
        "185156": ["Kangri"],
        "185152": ["Lamberi"],
        "185102": ["Mandi"],
        // "185151": ["Humhama"],
        "185101": ["Poonch"],
        "185131": ["Rajouri"],
        "185121": ["Samote"],

        // "185153": ["Humhama"],
        "185212": ["Thanamandi"],
        "182311": ["Reasi"],
        "182125": ["Roan"],
        "182101": ["Udhampur"],
        "192122": ["Awantipora"],
        "190018": ["Bemina-Chowk"],
        "190004": ["Batwara"],
        "190020": ["Buchpora"],
        "191111": ["Budgam"],
        "191201": ["Ganderbal"],
        "190021": ["Humhama"],
        "190014": ["Hyderpora"],

        "190008": ["Jawahar Nagar"],
        "192304": ["Kakpora"],
        "190010": ["Karan Nagar"],
        "190006": ["Kashmir University"],
        "192102": ["Khanabal"],
        "193103": ["Khawaja-Bagh"],
        "190015": ["Natipora"],
        "190011": ["Naushara"],
        "190009": ["New Secretariat"],
        "191101": ["Pantha Chowk"],
        "190017": ["Parimpora"],
        "190003": ["Rainawari"],
        "190007": ["SKAirport"],
        "190002": ["SRGanj"],
        "190005": ["Sanat Nagar"],
        "190012": ["Zainakote"],
        "192101": ["Anantnag"],
        "193101": ["Baramulla"],
        "192124": ["Bijbehara"],
        // "182121": ["Pampore"],
        "193121": ["Pattan"],
        "192301": ["Pulwama"],
        "193201": ["Sopore"],
        "180001": ["A.G.office", "Bakshinagar", "Darbargarh", "Dhounthly Bazar", "Jammu", "Kachi Chowni", "Link Road", "New Sectt.jammu", "O.h.Road", "Peermitha", "Raghunath Bazar", "Shaheedi Chowk Jammu", "Shaktinagar Jammu"],
        "180002": ["Talab Tillo", "Akalpur", "Bhadrod", "Gol Gujral", "Sangrampur", "Suryavihar"],
        // "180002": ["Humhama"],
        "180003": ["Industrial Estate", "Jammu Cantt", "Makwal Branch Office", "Mandal Branch Office", "Natc Sub Office", "Sohanjana Branch Office"],
        "180004": ["Gandhinagar Head Office", "Guru Nanak Nagar Sub Office", "Transport Yard Sub Office"],
        "180005": ["Kotli Colony", "Puran Nagar", "Rehari Mohalla", "Subash Nagar Jammu"],
        // "180005": ["Rehari Mohalla"],
        // "180006": ["Humhama"],
        "180006": ["New University Campus", "Bain Bajalta Branch Office", "Qilla Bahu Sub Office"],
        "180007": ["Janipur"],
        "180009": ["Bhour Camp Branch Office"],
        "180010": ["Gangyal Sub Office", "Kalu Chak Branch Office"],
        // "180011": ["Humhama"],
        "180011": ["Sainik Colony", "Chowadi Branch Office", "Sunjwan Branch Office"],
        "180012": ["Railway Station", "New Fruit Market", "Trikuta Nagar Sub Office"],
        // "180012": ["Humhama"],
        "180013": ["Roop Nagar"],
        // "180013": ["Humhama"],
        "180015": ["Channi Himat"],
        "180016": ["Vinaik Bazar", "General Bus Stand", "Krishna Nagar", "University Campus"],
        // "180016": ["Humhama"],
        "180017": ["Aitham Branch Office", "Kanachirgal Branch Office", "Surinsar Branch Office"],
        "181008": ["Gho Manhasan Branch Office"],
        "181101": ["Miran Sahib Sub Office", "Gadigarh Branch Office", "Kirpind Branch Office", "Langotian Branch Office", "Rattisn Branch Office"],
        // "181101": ["Humhama"],
        "181102": ["R S Pura", "R.S.Pura Adda Sub Office", "R.S.Pura Sub Office", "Agra Chak Branch Office",
            "Chakrohi", "Chohala", "Faloura Branch Office", "Jassore Branch Office", "Kotlishah Daula Branch Office", "Rangpur Malania Branch Office", "Satrayan Branch Office", "Shamka Branch Office", "Suchetgarh Branch Office"
        ],
        // "181102": ["Humhama"],
        "181103": ["Badyal Brahmna"],
        "181104": ["Simble Camp"],
        "181111": ["Dablehar Sub Office", "Goondla Branch Office", "Magowali Branch Office", "Rathana Branch Office", "Salehar Branch Office"],
        // "181121": ["Humhama"],
        "181121": ["Paloura", "Topsherkhania"],
        "181122": ["Baran Branch Office", "Bhalwal", "Gharota", "Jandial", "Kot Branch Office", "Rabta Branch Office", "Ranjan Branch Office", "Sarote Branch Office", "Seri Panditan"],
        "181123": ["Bantalab", "Raipur"],
        "181124": ["Bsf Camp Paloura"],
        "181131": ["Arnia Sub Office"],
        "181132": ["Banachak Branch Office", "Bishnah Adda Sub Office", "Bishnah Sub Office", "Chak Umrah", "Darap Branch Office", "Deoli Branch Office", "Kanhal Branch Office", "Kheri Branch Office", "Kotli Mian Fateh Branch Office", "Palli Branch Office", "Pandorian Manhasan Branch Office", "Rehal Branch Office"],
        "181133": ["Adlehar Branch Office", "Allah Branch Office", "Kalyana Branch Office", "Kool Kalan Branch Office", "Parlah Branch Office", "Pindicharka Kalan Branch Office", "Rangpur Trewa Branch Office", "Sai Kalan Branch Office"],
        "181151": ["Raika"],
        // "181201": ["Humhama"],
        "181201": ["Akhnoor", "Akhnoor Sub Office", "Ambaran", "Bala Branch Office", "Bamal Colony", "Brui Branch Office", "Gandharwan Branch Office", "Gharatal", "Gurha Brahmna", "Kaink Jagir", "Kathar", "Lehar Branch Office", "Mandarian", "Mawa Brahmna", "Pacca Danga Akhnoor", "Sungal"],
        "181202": ["Bakore Branch Office", "Bhalwal Brahmna Branch Office", "Chak Kirpalpur Branch Office", "Datial Branch Office", "Devipur Branch Office", "Dhoke Khalsa Branch Office", "Jourian", "Maira Branch Office"],
        "181203": ["Chak Malal", "Danwal", "Gigrial Branch Office", "Kaleetg Branch Office", "Kharah", "Khour", "Naryana", "Nathal", "Nikkian", "Sainth"],
        // "181204": ["Humhama"],
        "181204": ["Pallan-Walla", "Bardoh", "Kot Maira"],
        // "181205": ["Humhama"],
        "181206": ["Batehra", "Chak Shama", "Domana", "Gajanso Branch Office", "Garkhal Branch Office", "Kanachak", "Kangrial Branch Office", "Karloop", "Mishriwala", "Nagbani Branch Office", "Paryal"],
        "181207": ["Gurah Manhasan", "Pargwal"],
        "181208": ["Halqa Branch Office"],
        "181209": ["Hamirpur Sidhar Branch Office"],
        "181221": ["Jhajjar kotli", "Jagti Branch Office", "Kandoli Nagrota", "Nadore Branch Office", "Panjgrain", "Shiba Branch Office"],
        "181224": ["Bhatyari Branch Office", "Dansal", "Jindrah Branch Office", "Kanyala Branch Office", "Kishanpur Branch Office", "Kothar", "Tahra Branch Office"]
    })
    const [filteredAreas, setFilteredAreas] = useState([]);

    const handleDigitInput = (event) => {
        const digit = event.target.value;
        filterAreas(digit);
        setPinCodes(prevPinCodes => ({
            ...prevPinCodes, "0": "a"
        }))
    };

    const filterAreas = (digit) => {
        const filteredAreas = Object.keys(pinCodes)
            .filter(pinCode => pinCode.includes(digit))
            .reduce((acc, pinCode) => acc.concat(pinCodes[pinCode]), []);

        setFilteredAreas(filteredAreas);
        setUserData({ ...userData, "FilteredAreas": filteredAreas, "PinCode": digit })
    };

    // const [age, setAge] = useState('');
    const handleDOBChange = (event) => {
        // const dummuy = event.target.value
        calculateAge(event.target.value);
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // setAge(age)
        setUserData({ ...userData, "DOB": dob, "Age": age });
        // setUserData({ ...userData, "Age": age });
    };
    const handleAdhaarInput = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        const adValue = value.slice(0, 12)
        setAdhNumber(adValue); // Limit to 10 digits
        setUserData({ ...userData, "AdhaarNumber": adValue })
    };
    const handlePhoneInput = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        const phValue = value.slice(0, 10)
        setPhoneNumber(phValue); // Limit to 10 digits
        setUserData({ ...userData, "PhoneNumber": phValue })
    };

    // calculateAge()
    console.log(filteredAreas);
    // const logo = require("../Decent Arcadia type 4.jpg");  
    // const arrow = require("../arrow-down-sign-to-navigate.png");
    // const user = require("./user.png");
    return (
        <>
            <div className="topIndi">
                <div className="indiDetails">
                    <label htmlFor="name">First Name</label>
                    <input type="text" value={userData['FirstName']} required onChange={(e) => setUserData({ ...userData, "FirstName": e.target.value })} name="name" id="name" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" value={userData['LastName']} required onChange={(e) => setUserData({ ...userData, "LastName": e.target.value })} name="name" id="name" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="desig">Address</label>
                    <input type="text" value={userData['Address']} required onChange={(e) => setUserData({ ...userData, "Address": e.target.value })} name="desig" id="desig" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Gender</label>
                    <div className="customSelect">
                        <select value={userData['Gender']} required onChange={(e) => setUserData({ ...userData, "Gender": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Male">Male</option>
                            <hr />
                            <option value="Female">Female</option>
                            <hr />
                            <option value="Transgender">Transgender</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>

                <div className="indiDetails">
                    <label htmlFor="dob">DOB</label>
                    <input className="dob" type="date" value={userData['DOB']} required onChange={handleDOBChange} name="dob" id="dob" />
                    {/* <input className="dob" type="date" value={userData['DOB']} required onChange={(e) => setUserData({ ...userData, "DOB": e.target.value })} name="dob" id="dob" /> */}
                </div>

                <div className="indiDetails">
                    <label htmlFor="dob">Age</label>
                    {userData && <p>{userData.Age} Years Old</p>}
                    {/* <input className="dob" type="date" value={dob} required onChange={(e) => setDob(e.target.value)} name="dob" id="dob" /> */}
                </div>




            </div>
            <div className="indiDetails">
                <label htmlFor="email">Email ID</label>
                <input className="email" type="email" value={userData['Email']} required onChange={(e) => setUserData({ ...userData, "Email": e.target.value })} name="email" id="email" />
            </div>
            <div className="bottomIndi">
                <div className="indiDetails">
                    <label htmlFor="age">Division</label>
                    <div className="customSelect">

                        <select value={userData['Division']} required onChange={(e) => setUserData({ ...userData, "Division": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Jammu">Jammu</option>
                            <hr />
                            <option value="Kashmir">Kashmir</option>

                        </select>
                        <span className="customArrow">
                            {/* <img className="logo" src={arrow} alt="arrow" /> */}
                        </span>
                    </div>
                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                </div>
                <div className="indiDetails">
                    <label htmlFor="age">District</label>
                    <div className="customSelect">
                        <select value={userData['District']} required onChange={(e) => setUserData({ ...userData, "District": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            {
                                userData.Division === "Jammu"
                                    ?
                                    <>
                                        <option value="Doda">Doda</option>
                                        <hr />
                                        <option value="Jammu">Jammu</option>
                                        <hr />
                                        <option value="Kathua">Kathua</option>
                                        <hr />
                                        <option value="Kishtwar">Kishtwar</option>
                                        <hr />
                                        <option value="Poonch">Poonch</option>
                                        <hr />
                                        <option value="Rajouri">Rajouri</option>
                                        <hr />
                                        <option value="Ramban">Ramban</option>
                                        <hr />
                                        <option value="Reasi">Reasi</option>
                                        <hr />
                                        <option value="Samba">Samba</option>
                                        <hr />
                                        <option value="Udhampur">Udhampur</option>
                                    </>
                                    : ""
                            }

                            {
                                userData.Division === 'Kashmir'
                                    ?
                                    <>
                                        <option value="Anantnag">Anantnag</option>
                                        <hr />
                                        <option value="Bandipora">Bandipora</option>
                                        <hr />
                                        <option value="Baramullah">Baramullah</option>
                                        <hr />
                                        <option value="Budgam">Budgam</option>
                                        <hr />
                                        <option value="Gandarbal">Gandarbal</option>
                                        <hr />
                                        <option value="Kulgam">Kulgam</option>
                                        <hr />
                                        <option value="Kupwara">Kupwara</option>
                                        <hr />
                                        <option value="Pulwama">Pulwama</option>
                                        <hr />
                                        <option value="Sopian">Sopian</option>
                                        <hr />
                                        <option value="Srinagar">Srinagar</option>

                                    </>
                                    : ""
                            }

                        </select>
                        <span className="customArrow"></span>
                    </div>
                    {/* <input type="number" value={age} required onChange={handleAgeInputChange} name="age" id="age" /> */}
                </div>
                <div className="indiDetails">
                    <label htmlFor="age">Block</label>
                    <div className="customSelect">
                        <select value={userData['Block']} required onChange={(e) => setUserData({ ...userData, "Block": e.target.value })}>
                            <option value="">Select Option</option>

                            {/* Jammu District Blocks */}
                            {
                                userData.District === "Jammu"
                                    ?
                                    <>
                                        <option value="Akhnoor">Akhnoor</option>
                                        <hr />
                                        <option value="Bhalwal">Bhalwal</option>
                                        <hr />
                                        <option value="Bishnah">Bishnah</option>
                                        <hr />
                                        <option value="Dansal">Dansal</option>
                                        <hr />
                                        <option value="Jammu East">Jammu East</option>
                                        <hr />
                                        <option value="Jammu West">Jammu West</option>
                                        <hr />
                                        <option value="Marh">Marh</option>
                                        <hr />
                                        <option value="Nagrota">Nagrota</option>
                                        <hr />
                                        <option value="Nowshera">Nowshera</option>
                                        <hr />
                                        <option value="Pargwal">Pargwal</option>
                                        <hr />
                                        <option value="R.S. Pura">R.S. Pura</option>
                                        <hr />
                                        <option value="R. S. Pura Khour">R. S. Pura Khour</option>
                                        <hr />
                                        <option value="Satwari">Satwari</option>
                                        <hr />
                                        <option value="Sohanjana">Sohanjana</option>
                                        <hr />
                                        <option value="Suchetgarh">Suchetgarh</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Doda"
                                    ?
                                    <>
                                        <option value="Assar">Assar</option>
                                        <hr />
                                        <option value="Bhaderwah">Bhaderwah</option>
                                        <hr />
                                        <option value="Bhagwah">Bhagwah</option>
                                        <hr />
                                        <option value="Bharath">Bharath</option>
                                        <hr />
                                        <option value="Bhalla">Bhalla</option>
                                        <option value="Chiralla">Chiralla</option>
                                        <hr />
                                        <option value="Dessa">Dessa</option>
                                        <hr />
                                        <option value="Doda">Doda</option>
                                        <hr />
                                        <option value="Gandoh">Gandoh</option>
                                        <hr />
                                        <option value="Ghat">Ghat</option>
                                        <hr />
                                        <option value="Gundana">Gundana</option>
                                        <hr />
                                        <option value="Kahara">Kahara</option>
                                        <hr />
                                        <option value="Kastigarh">Kastigarh</option>
                                        <hr />
                                        <option value="Marmat">Marmat</option>
                                        <hr />
                                        <option value="Thathri">Thathri</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Kathua"
                                    ?
                                    <>
                                        <option value="Basholi">Basholi</option>
                                        <hr />
                                        <option value="Billawar">Billawar</option>
                                        <hr />
                                        <option value="Bani">Bani</option>
                                        <hr />
                                        <option value="Barnoti">Barnoti</option>
                                        <hr />
                                        <option value="Basohli">Basohli</option>
                                        <hr />
                                        <option value="Duggan">Duggan</option>
                                        <hr />
                                        <option value="Hiranagar">Hiranagar</option>
                                        <hr />
                                        <option value="Kathua">Kathua</option>
                                        <hr />
                                        <option value="Lohai-Malhar">Lohai-Malhar</option>
                                        <hr />
                                        <option value="Mahanpur">Mahanpur</option>
                                        <hr />
                                        <option value="Malhar">Malhar</option>
                                        <hr />
                                        <option value="Nagri-Parole">Nagri-Parole</option>
                                        <hr />
                                        <option value="Rajbagh">Rajbagh</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Ramban"
                                    ?
                                    <>
                                        <option value="Banihal">Banihal</option>
                                        <hr />
                                        <option value="Batote">Batote</option>
                                        <hr />
                                        <option value="Gool">Gool</option>
                                        <hr />
                                        <option value="Khari">Khari</option>
                                        <hr />
                                        <option value="Ramban">Ramban</option>
                                        <hr />
                                        <option value="Ramsoo">Ramsoo</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Reasi"
                                    ?
                                    <>
                                        <option value="Arnas">Arnas</option>
                                        <hr />
                                        <option value="Dharmari">Dharmari</option>
                                        <hr />
                                        <option value="Gulabgarh">Gulabgarh</option>
                                        <hr />
                                        <option value="Katra">Katra</option>
                                        <hr />
                                        <option value="Mahore">Mahore</option>
                                        <hr />
                                        <option value="Pouni">Pouni</option>
                                        <hr />
                                        <option value="Reasi">Reasi</option>
                                        <hr />
                                        <option value="Thuroo">Thuroo</option>
                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Kishtwar"
                                    ?
                                    <>
                                        <option value="Bounjwah">Bounjwah</option>
                                        <hr />
                                        <option value="Chatroo">Chatroo</option>
                                        <hr />
                                        <option value="Drabshalla">Drabshalla</option>
                                        <hr />
                                        <option value="Inderwal">Inderwal</option>
                                        <hr />
                                        <option value="Kishtwar">Kishtwar</option>
                                        <hr />
                                        <option value="Marwah">Marwah</option>
                                        <hr />
                                        <option value="Nagseni">Nagseni</option>
                                        <hr />
                                        <option value="Paddar">Paddar</option>
                                        <hr />
                                        <option value="Warwan">Warwan</option>
                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Poonch"
                                    ?
                                    <>
                                        <option value="Buffliaz">Buffliaz</option>
                                        <hr />
                                        <option value="Hajira">Hajira</option>
                                        <hr />
                                        <option value="Loran">Loran</option>
                                        <hr />
                                        <option value="Mandi">Mandi</option>
                                        <hr />
                                        <option value="Mendhar">Mendhar</option>
                                        <hr />
                                        <option value="Surankote">Surankote</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Rajouri"
                                    ?
                                    <>
                                        <option value="Budhal">Budhal</option>
                                        <hr />
                                        <option value="Darhal">Darhal</option>
                                        <hr />
                                        <option value="Kalakote">Kalakote</option>
                                        <hr />
                                        <option value="Nowshera">Nowshera</option>
                                        <hr />
                                        <option value="Rajouri">Rajouri</option>
                                        <hr />
                                        <option value="Sunderbani">Sunderbani</option>
                                        <hr />
                                        <option value="Thanamandi">Thanamandi</option>
                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Udhampur"
                                    ?
                                    <>
                                        <option value="Basantgarh">Basantgarh</option>
                                        <hr />
                                        <option value="Chenani">Chenani</option>
                                        <hr />
                                        <option value="Dudu">Dudu</option>
                                        <hr />
                                        <option value="Ghordi">Ghordi</option>
                                        <hr />
                                        <option value="Jib">Jib</option>
                                        <hr />
                                        <option value="Majalta">Majalta</option>
                                        <hr />
                                        <option value="Panchari">Panchari</option>
                                        <hr />
                                        <option value="Ramnagar">Ramnagar</option>
                                        <hr />
                                        <option value="Reasi">Reasi</option>
                                        <hr />
                                        <option value="Moungri">Moungri</option>
                                        <hr />
                                        <option value="Udhampur">Udhampur</option>
                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Samba"
                                    ?
                                    <>
                                        <option value="Bari Brahmana">Bari Brahmana</option>
                                        <hr />
                                        <option value="Ghagwal">Ghagwal</option>
                                        <hr />
                                        <option value="Nud">Nud</option>
                                        <hr />
                                        <option value="Purmandal">Purmandal</option>
                                        <hr />
                                        <option value="Ramgarh">Ramgarh</option>
                                        <hr />
                                        <option value="Samba">Samba</option>
                                        <hr />
                                        <option value="Vijaypur">Vijaypur</option>

                                    </>
                                    : ""
                            }

                            {/* Kashmir District Blocks */}
                            {
                                userData.District === "Srinagar"
                                    ?
                                    <>
                                        <option value="Batamaloo">Batamaloo</option>
                                        <hr />
                                        <option value="Brein">Brein</option>
                                        <hr />
                                        <option value="Braine">Braine</option>
                                        <hr />
                                        <option value="Chattabal">Chattabal</option>
                                        <hr />
                                        <option value="Eidgah">Eidgah</option>
                                        <hr />
                                        <option value="Fateh Kadal">Fateh Kadal</option>
                                        <hr />
                                        <option value="Harwan">Harwan</option>
                                        <hr />
                                        <option value="Hazratbal">Hazratbal</option>
                                        <hr />
                                        <option value="Khanyar">Khanyar</option>
                                        <hr />
                                        <option value="Lal Bazaar">Lal Bazaar</option>
                                        <hr />
                                        <option value="Lal Ded">Lal Ded</option>
                                        <hr />
                                        <option value="Nawakadal">Nawakadal</option>
                                        <hr />
                                        <option value="Nishat">Nishat</option>
                                        <hr />
                                        <option value="Nowgam">Nowgam</option>
                                        <hr />
                                        <option value="Pantha Chowk">Pantha Chowk</option>
                                        <hr />
                                        <option value="Parimpora">Parimpora</option>
                                        <hr />
                                        <option value="Rainawari">Rainawari</option>
                                        <hr />
                                        <option value="Shalimar">Shalimar</option>
                                        <hr />
                                        <option value="Soura">Soura</option>
                                        <hr />
                                        <option value="Zadibal">Zadibal</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Anantnag"
                                    ?
                                    <>
                                        <option value="Achabal">Achabal</option>
                                        <hr />
                                        <option value="Aishmuqam">Aishmuqam</option>
                                        <hr />
                                        <option value="Bijbehara">Bijbehara</option>
                                        <hr />
                                        <option value="Breng">Breng</option>
                                        <hr />
                                        <option value="Dachnipora">Dachnipora</option>
                                        <hr />
                                        <option value="Dooru">Dooru</option>
                                        <hr />
                                        <option value="Kokernag">Kokernag</option>
                                        <hr />
                                        <option value="Larnoo">Larnoo</option>
                                        <hr />
                                        <option value="Pahalgam">Pahalgam</option>
                                        <hr />
                                        <option value="Qazigund">Qazigund</option>
                                        <hr />
                                        <option value="Sallar">Sallar</option>
                                        <hr />
                                        <option value="Seer Hamdan">Seer Hamdan</option>
                                        <hr />
                                        <option value="Shangus">Shangus</option>
                                        <hr />
                                        <option value="Vailoo">Vailoo</option>


                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Pulwama"
                                    ?
                                    <>
                                        <option value="Awantipora">Awantipora</option>
                                        <hr />
                                        <option value="Kakapora">Kakapora</option>
                                        <hr />
                                        <option value="Pampore">Pampore</option>
                                        <hr />
                                        <option value="Pulwama">Pulwama</option>
                                        <hr />
                                        <option value="Rajpora">Rajpora</option>
                                        <hr />
                                        <option value="Tral">Tral</option>



                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Kupwara"
                                    ?
                                    <>
                                        <option value="Handwara">Handwara</option>
                                        <hr />
                                        <option value="Karnah">Karnah</option>
                                        <hr />
                                        <option value="Kralpora">Kralpora</option>
                                        <hr />
                                        <option value="Langate">Langate</option>
                                        <hr />
                                        <option value="Lolab">Lolab</option>
                                        <hr />
                                        <option value="Ramhall">Ramhall</option>
                                        <hr />
                                        <option value="Sogam">Sogam</option>
                                        <hr />
                                        <option value="Tangdar">Tangdar</option>



                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Sopian"
                                    ?
                                    <>
                                        <option value="Shopian">Shopian</option>
                                        <hr />
                                        <option value="Keller">Keller</option>
                                        <hr />
                                        <option value="Hermain">Hermain</option>
                                        <hr />
                                        <option value="Zainapora">Zainapora</option>
                                        <hr />
                                        <option value="Chitragam">Chitragam</option>
                                        <hr />
                                        <option value="Ramnagri">Ramnagri</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Gandarbal"
                                    ?
                                    <>
                                        <option value="Ganderbal">Ganderbal</option>
                                        <hr />
                                        <option value="Kangan">Kangan</option>
                                        <hr />
                                        <option value="Lar">Lar</option>
                                        <hr />
                                        <option value="Wakoora">Wakoora</option>
                                        <hr />
                                        <option value="Gund">Gund</option>
                                        <hr />
                                        <option value="Tullamulla">Tullamulla</option>

                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Bandipora"
                                    ?
                                    <>
                                        <option value="Bandipora">Bandipora</option>
                                        <hr />
                                        <option value="Hajin">Hajin</option>
                                        <hr />
                                        <option value="Sonawari">Sonawari</option>
                                        <hr />
                                        <option value="Sumbal">Sumbal</option>


                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Baramullah"
                                    ?
                                    <>
                                        <option value="Baramulla">Baramulla</option>
                                        <hr />
                                        <option value="Boniyar">Boniyar</option>
                                        <hr />
                                        <option value="Kreeri">Kreeri</option>
                                        <hr />
                                        <option value="Pattan">Pattan</option>
                                        <hr />
                                        <option value="Rafiabad">Rafiabad</option>
                                        <hr />
                                        <option value="Sangrama">Sangrama</option>
                                        <hr />
                                        <option value="Sopore">Sopore</option>
                                        <hr />
                                        <option value="Tangmarg">Tangmarg</option>
                                        <hr />
                                        <option value="Uri">Uri</option>
                                        <hr />
                                        <option value="Watergam">Watergam</option>


                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Budgam"
                                    ?
                                    <>
                                        <option value="Beerwah">Beerwah</option>
                                        <hr />
                                        <option value="Budgam">Budgam</option>
                                        <hr />
                                        <option value="Charar-i-Sharief">Charar-i-Sharief</option>
                                        <hr />
                                        <option value="Chadoora">Chadoora</option>
                                        <hr />
                                        <option value="Khag">Khag</option>
                                        <hr />
                                        <option value="Magam">Magam</option>
                                        <hr />
                                        <option value="Nagam">Nagam</option>
                                        <hr />
                                        <option value="Soibug">Soibug</option>



                                    </>
                                    : ""
                            }
                            {
                                userData.District === "Kulgam"
                                    ?
                                    <>
                                        <option value="Kulgam">Kulgam</option>
                                        <hr />
                                        <option value="Devsar">Devsar</option>
                                        <hr />
                                        <option value="Frisal">Frisal</option>
                                        <hr />
                                        <option value="Homeshalibugh">Homeshalibugh</option>
                                        <hr />
                                        <option value="Qaimoh">Qaimoh</option>

                                    </>
                                    : ""
                            }

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>




            </div>
            <div className="pin">
                <div className="indiDetails">
                    <label htmlFor="desig">Pin Code</label>
                    {/* onChange={(e) => setPinCodes(e.target.value)} */}
                    {/* <input type="text" value={""} maxLength={6} required name="desig" id="desig" /> */}
                    <div className="innerDiv">

                        <input className="pinInput" type="text" value={userData["PinCode"]} required onChange={handleDigitInput} maxLength={6} placeholder="Enter a digit" />
                        {
                            filteredAreas.length === 0
                                ?
                                <>

                                    <h4>Please Specify Area:</h4>
                                    <input type="txt" value={userData["OtherPinArea"]} required onChange={(e) => setUserData({ ...userData, "OtherPinArea": e.target.value })} />


                                </>
                                : <div className="innerInnerDiv">
                                    <h4>Filtered Areas:</h4>
                                    <div className="customSelect">
                                        <select className="pincode" value={userData['PinArea']} required onChange={(e) => setUserData({ ...userData, "PinArea": e.target.value })}>
                                            <option value="">Select Option</option>
                                            {
                                                filteredAreas.map(area => (
                                                    <option key={area}>{area}</option>
                                                ))
                                            }

                                        </select>

                                        <span className="customArrow"></span>
                                    </div>

                                </div>
                        }


                    </div>
                </div>

                <div className="indiDetails">
                    <label htmlFor="desig">Area</label>


                    <p>

                        {
                            userData.PinArea 
                            ?   userData.PinArea 
                            :   userData.OtherPinArea 
                                ? userData.OtherPinArea
                                : ""
                        }
                    </p>

                </div>
            </div>
            <div className="bet">

                <div className="indiDetails">
                    <label htmlFor="phone">Phone Number (+91)</label>
                    <div>
                        <input maxLength={10} type="number" value={phoneNumber} required onChange={handlePhoneInput} />
                        {/* <input maxLength={10} type="Number" value={userData['PhoneNumber']} required onChange={(e) => setUserData({ ...userData, "PhoneNumber": e.target.value })} /> */}
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="adh">Adhaar Number</label>
                    <input maxLength={12} type="number" value={adhNumber} required onChange={handleAdhaarInput} />
                    {/* <input maxLength={12} type="Number" value={userData['AdhaarNumber']} required onChange={(e) => setUserData({ ...userData, "AdhaarNumber": e.target.value })} /> */}
                </div>
            </div>


            <div className="lowerDetails">
                <div className="indiDetails">
                    <label htmlFor="email">Marital Status</label>
                    <div className="customSelect">
                        <select value={userData['MaritalStatus']} required onChange={(e) => setUserData({ ...userData, "MaritalStatus": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Married">Married</option>
                            <hr />
                            <option value="UnMarried">UnMarried</option>
                            <hr />
                            <option value="Widowed">Widowed</option>
                            <hr />
                            <option value="Separated">Separated</option>
                            <hr />
                            <option value="Divorced">Divorced</option>


                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Religion</label>
                    <div className="customSelect">
                        <select value={userData['Religion']} required onChange={(e) => setUserData({ ...userData, "Religion": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Islam">Islam</option>
                            <hr />
                            <option value="Hinduism">Hinduism</option>
                            <hr />
                            <option value="Christianity">Christianity</option>
                            <hr />
                            <option value="Sikhism">Sikhism</option>
                            <hr />
                            <option value="Buddhism">Buddhism</option>
                            <hr />
                            <option value="Judaism">Judaism</option>
                            <hr />
                            <option value="Other">Other</option>


                        </select>
                        <span className="customArrow"></span>
                    </div>
                    {
                        userData.Religion === "Other"
                            ?
                            <div className='other'>
                                <h5>
                                    Specify:
                                </h5>
                                <input type="text" value={userData['OtherReligion']} required onChange={(e) => setUserData({ ...userData, "OtherReligion": e.target.value })} name="name" id="name" />
                            </div>
                            : ""
                    }
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Category</label>
                    <div className="customSelect">
                        <select value={userData['Category']} required onChange={(e) => setUserData({ ...userData, "Category": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Urban">Urban</option>
                            <hr />
                            <option value="Rural">Rural</option>


                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Social Class</label>
                    <div className="customSelect">
                        <select className="sc" value={userData['SocailClass']} required onChange={(e) => setUserData({ ...userData, "SocailClass": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Gen">General (Gen)</option>
                            <hr />
                            <option value="SC">Scheduled Castes (SC)</option>
                            <hr />
                            <option value="ST">Scheduled Tribes (ST)</option>
                            <hr />
                            <option value="OBC">Other Backward Classes (OBC)</option>
                            <hr />
                            <option value="EWS">Economically Weaker Sections (EWS)</option>
                            <hr />
                            <option value="SEBC">Socially and Educationally Backward Classes (SEBC)</option>
                            <hr />
                            <option value="PHWD">Physically Challenged (Physically Handicapped/Persons with Disabilities)</option>
                            <hr />
                            <option value="DU">Destitute/Underprivileged</option>
                            <hr />
                            <option value="BPL">Below Poverty Line (BPL)</option>
                            <hr />
                            <option value="WMC">Women, particularly in marginalized communities</option>
                            <hr />
                            <option value="Min">Minority communities such as Muslims, Sikhs, Christians, Buddhists, etc.</option>
                            <hr />
                            <option value="TRANS">Transgender persons</option>
                            <hr />
                            <option value="XSER">Ex-Servicemen</option>
                            <hr />
                            <option value="REF">Refugees (depending on the context, such as refugees from Pakistan-administered Kashmir)</option>
                            <hr />
                            <option value="AGRI">Farmers, agricultural workers, and rural laborers</option>
                            <hr />
                            <option value="UPH">Urban poor and homeless</option>
                            <hr />
                            <option value="APL">Above Poverty Line</option>
                            <hr />

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Age Group</label>
                    <div className="customSelect">
                        <select value={userData['AgeGroup']} required onChange={(e) => setUserData({ ...userData, "AgeGroup": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Below 15">Below 15</option>
                            <hr />
                            <option value="15-18">15-18</option>
                            <hr />
                            <option value="19-24">19-24</option>
                            <hr />
                            <option value="25-30">25-30</option>
                            <hr />
                            <option value="30-35">30-35</option>
                            <hr />
                            <option value="35-40">35-40</option>
                            <hr />
                            <option value="40 Above">40 Above</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Mon. Fam. Income</label>
                    <div className="customSelect">
                        <select value={userData['MFI']} required onChange={(e) => setUserData({ ...userData, "MFI": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="Below 5000">Below 5000</option>
                            <hr />
                            <option value="5000-10000">5000-10000</option>
                            <hr />
                            <option value="10000-15000">10000-15000</option>
                            <hr />
                            <option value="15000-30000">15000-30000</option>
                            <hr />
                            <option value="30000-50000">30000-50000</option>
                            <hr />
                            <option value="50000-100000">50000-100000</option>
                            <hr />
                            <option value="above 100000">above 100000</option>
                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenForm;