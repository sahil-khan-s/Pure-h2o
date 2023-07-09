import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if the fields are not empty
    if (name && email && message) {
      console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',   background: 'linear-gradient(to top right, #213158 38%, #8bb6f7 100%)'  }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: 'transparent', color: 'white' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Contact Us</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label style={{ fontWeight: 'bold' }} htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ color: 'white', backgroundColor: 'transparent', width: '100%', borderRadius: '10px', border: '2px solid white', padding: '5px' }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 'bold', marginTop: '30px' }} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: 'white', backgroundColor: 'transparent', width: '100%', borderRadius: '10px', border: '2px solid white', padding: '5px' }}
            />
          </div>
          <div style={{ marginTop: '30px' }}>
            <label style={{ fontWeight: 'bold' }} htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ color: 'white', backgroundColor: 'transparent', width: '100%', borderRadius: '10px', border: '2px solid white', padding: '5px' }}
            />
          </div>
          <button type="submit" style={{ color: 'white', backgroundColor: 'transparent', padding: '5px', marginTop: '30px', width: '100%' , border:'2px solid white', borderRadius:'10px' }}>Submit</button>

        </form>
      </div>
      {showPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', zIndex: '9999' }}>
          <p>Thanks for contacting us! We will get back to you soon.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
