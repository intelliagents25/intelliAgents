import React, { useState } from 'react';
import "../globals.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (text) => {
    const { name, value } = text.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., API call or sending the message
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-lg">
        <div className="grid grid-cols-1 gap-4">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-md text-light">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-dark border-[1px] border-black"
                required
                placeholder="Start typing here..."
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-md text-light">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-dark border-[1px] border-black"
                required
                placeholder="Start typing here..."
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-md text-light">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-dark border-[1px] border-black"
              required
              placeholder="example@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-md text-light">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md text-dark border-[1px] border-black"
              required
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#9855D4] to-[#5AAAFA] text-white rounded-md roboto-font">Send message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;