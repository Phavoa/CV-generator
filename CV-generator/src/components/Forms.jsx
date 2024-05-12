import Education from "./Education";
import Contact from "./Contact";
import Skill from "./Skill";
import AboutExperiences from "./AboutExperiences";
import './styles/Forms.css'

function Forms({
  education,
  setEducation,
  contact,
  setContact,
  experiences,
  setExperiences,
  skills,
  setSkills,
  aboutMe,
  setAboutMe,
}) {
  return (
    <div className="forms">
      <h1>Personal Details</h1>
      <Contact contact={contact} setContact={setContact} />
      <Education education={education} setEducation={setEducation} />
      <Skill skills={skills} setSkills={setSkills} />
      <AboutExperiences
        aboutMe={aboutMe}
        setAboutMe={setAboutMe}
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
}

export default Forms;
