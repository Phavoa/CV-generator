// Education.jsx

import { useState } from "react";

function Education({education, setEducation}) {

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updateEducation = [...education];
    updateEducation[index][name] = value;
    setEducation(updateEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit(education);
    console.log("form submitted");
    console.log(education);
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", school: "", date: "" }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="educationForm">
          <legend>EDUCATION</legend>

          {education.map((edu, index) => {
            return (
              <div
                key={index}
                id={`education${index}`}
                className="educationInputs"
              >
                <div>
                  <label htmlFor="degree">Enter Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, index)}
                    className="educationInput"
                  />
                </div>
                <div>
                  <label htmlFor="school">Enter School</label>
                  <input
                    type="text"
                    name="school"
                    value={edu.school}
                    onChange={(e) => handleChange(e, index)}
                    className="educationInput"
                  />
                </div>
                <div>
                  <label htmlFor="date">Date Of Completion</label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={edu.date}
                    onChange={(e) => handleChange(e, index)}
                    className="educationInput"
                  />
                </div>
              </div>
            );
          })}

          <button onClick={handleAddEducation} type="button">
            +
          </button>
          <button type="submit">Submit</button>

      </form>

      {/* <div>
        <p>EDUCATION</p>
        <p>Degree: {education[0].degree}</p>
        <p>School: {education[0].school}</p>
        <p>Date of Completion: {education[0].date}</p>
      </div> */}
    </div>
  );
}

export default Education;
