

function Contact({contact, setContact}) {

const handleChange = (e) => {
 const {name, value} = e.target;
//  setContact({[name]: value}); 
 setContact((prevContact) => ({
  ...prevContact,
   [name] : value}
 ));
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('form submitted');
  console.log(contact);
}

  return (
    <div className="contactDiv">
      <form onSubmit={handleSubmit} className="contactForm">
        <legend>CONTACT</legend>
          <div className="contactAddress">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={contact.address}
              onChange={handleChange}
              className="contactInput"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone </label>
            <input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              className="contactInput"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="contactInput"
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              name="website"
              value={contact.website}
              onChange={handleChange}
              className="contactInput"
            />
          </div>

          <button type="submit" className="contactSubmitButton">
            SUBMIT
          </button>
      </form>
    </div>
  );
}

export default Contact;