import { useState } from "react";

function AboutExperiences({
  aboutMe,
  setAboutMe,
  experiences,
  setExperiences,
}) {
  
  const handleAboutMeChange = (e) => {
    const {name, value, files} = e.target;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        const fileDataUrl = reader.result;
        setAboutMe((prevAboutMe) => ({
          ...prevAboutMe, 
          [name]: fileDataUrl,
        }));
      };
      reader.readAsDataURL(selectedFile);
    }
    else {
    setAboutMe((prevAboutMe) => ({
      ...prevAboutMe, [name] : value,
    }));
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleExperiencesChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
  };

  const handleAddExperiences = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        date: "",
        companyName: "",
        experience: "",
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="aboutExpForm">
        <div>
          <div>
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={aboutMe.name}
              onChange={handleAboutMeChange}
            />
          </div>
          <div>
            <label htmlFor="profession">Enter Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={aboutMe.profession}
              onChange={handleAboutMeChange}
            />
          </div>
          <div>
            <label htmlFor="aboutMe">About Me</label>
            <textarea
              name="aboutMe"
              id="aboutMe"
              value={aboutMe.aboutMe}
              onChange={handleAboutMeChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="profilePic">Enter Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/*"
              onChange={handleAboutMeChange}
            />
          </div>
        </div>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <div>
                <label htmlFor="{`position-${index}`">Position</label>
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  id={`position-${index}`}
                  onChange={(e) => {
                    handleExperiencesChange(e, index);
                  }}
                />

                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  name="date"
                  value={experience.date}
                  onChange={(e) => {
                    handleExperiencesChange(e, index);
                  }}
                />
              </div>
              <div>
                <label htmlFor="companyName">Companies Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => {
                    handleExperiencesChange(e, index);
                  }}
                />
              </div>
              <div>
                <label htmlFor="experience">Experience</label>
              </div>
              <textarea
                name="experience"
                id="experience"
                value={experience.experience}
                onChange={(e) => {
                  handleExperiencesChange(e, index);
                }}
              ></textarea>
            </div>
          );
        })}
        <button type="button" onClick={handleAddExperiences}>
          +
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AboutExperiences;
