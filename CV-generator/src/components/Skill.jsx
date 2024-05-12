import { useState } from "react";

function Skill({ skills, setSkills }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("skills submitted");
    console.log(skills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: "", level: 0 }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="skillForm">
        {skills.map((skill, index) => (
          <div key={index}>
            <label htmlFor={`skill-${index}`}>Skills</label>
            <input
              type="text"
              name="skill"
              value={skill.skill}
              onChange={(e) => handleChange(e, index)} // Pass event and index
            />
            <label htmlFor={`lLevel-${index}`}>level</label>
            <input
              min={0}
              max={100}
              type="number"
              name="level"
              value={skill.level}
              onChange={(e) => handleChange(e, index)} // Pass event and index
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>
          +
        </button>{" "}
        {/* Use onClick for adding a new skill */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Skill;
