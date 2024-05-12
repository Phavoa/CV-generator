import Education from "./Education";
import Contact from "./Contact";
import Skill from "./Skill";
import AboutExperiences from "./AboutExperiences";
import address from "../assets/svgs/address.svg";
import phone from "../assets/svgs/phone.svg";
import email from "../assets/svgs/email.svg";
import internet from "../assets/svgs/internet.svg";
import "./styles/Forms.css";
import "./styles/cv.css";


function Cv({
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
    <div className="mainContainer">
      <div className="left">
        <div>
          <div className="profileDiv">
            <img src={aboutMe.profilePic} alt="Profile Picture" />
          </div>
        </div>

        <div className="contact">
          <div>
            <h2>CONTACT ME</h2>
            <div>
              <img src={phone} className="contactSvg" alt="" />
              <p>{contact ? contact.phone : ""}</p>
            </div>
            <div>
              <img src={email} className="contactSvg" alt="" />
              <p>{contact ? contact.email : ""}</p>
            </div>
            <div>
              <img src={internet} className="contactSvg" alt="" />
              <p>{contact ? contact.website : ""}</p>
            </div>
            <div>
              <img src={address} className="contactSvg" alt="" />
              <p>{contact ? contact.address : ""}</p>
            </div>
          </div>
        </div>

        <div className="education">
          <div>
            <h2>EDUCATION</h2>
            {education.map((edu, index) => (
              <div key={index} id="educ">
                <p>{edu.date}</p>
                <p className="degree">{edu.degree}</p>
                <p>{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="skills">
          <div>
            <h2>SKILLS</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <p>{skill.skill}</p>
                <div className="rangeDiv">
                  <div
                    className="range"
                    style={{ width: `${skill.level}%`, height: "8px" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="aboutME">
        <div>
          <h1>{aboutMe.name}</h1>
          <h2>{aboutMe.profession}</h2>
        </div>

        <div className="aboutMe">
          <h3>ABOUT ME</h3>
          <p>{aboutMe.aboutMe}</p>
        </div>

        <div className="experience">
          <div>
            <h2>WORK EXPERIENCE</h2>
            {experiences.map((experience, index) => (
              <div key={index} className="exp">
                <div>
                  <h2>{experience.position}</h2>
                  <div>
                    <p>{experience.companyName}</p>
                    <p>{experience.date}</p>
                  </div>
                </div>

                <p>{experience.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
