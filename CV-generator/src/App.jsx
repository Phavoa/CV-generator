// App.jsx

import { useState } from "react";
import TopBar from "./components/Topbar";
import Forms from "./components/Forms";
import Cv from "./components/CV";
import "./App.css";

function App() {
  const [education, setEducation] = useState([
    {
      degree: "",
      school: "",
      date: "",
    },
  ]);

  const [contact, setContact] = useState({
    address: "",
    phone: "",
    email: "",
    website: "",
  });

  const [skills, setSkills] = useState([
    {
      skill: "",
      level: "",
    },
  ]);

  const [aboutMe, setAboutMe] = useState({
    name: "",
    profession: "",
    profilePic: "",
    aboutMe: "",
  });

  const [experiences, setExperiences] = useState([
    {
      position: "",
      date: "",
      companyName: "",
      experience: "",
    },
  ]);

  return (
    <div className="">
      <TopBar />
      <div className="main">
        <div>
          <Forms
            contact={contact}
            setContact={setContact}
            education={education}
            setEducation={setEducation}
            skills={skills}
            setSkills={setSkills}
            aboutMe={aboutMe}
            setAboutMe={setAboutMe}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>

        <div>
          <Cv
            contact={contact}
            setContact={setContact}
            education={education}
            setEducation={setEducation}
            skills={skills}
            setSkills={setSkills}
            aboutMe={aboutMe}
            setAboutMe={setAboutMe}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
