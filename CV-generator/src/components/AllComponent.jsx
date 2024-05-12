

export function handleChange(e, index) {
  const { name, value } = e.target;
  const updateEducation = [...education];
  updateEducation[index][name] = value;
  setEducation(updateEducation);
}
