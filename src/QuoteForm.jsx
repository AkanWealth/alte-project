// QuoteForm.js
import React from "react";

function QuoteForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <section className="quote" id="quote">
      <form>
        <h2 className="heading">
          Request a Free Quote
          <i onClick={onClose} className="fa-solid fa-square-xmark"></i>
        </h2>

        <h3 className="heading">1 of 3- Personal Details</h3>

        <div className="input-box">
          <div className="email-container">
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your first and last name"
              required
            />
          </div>

          <div className="email-container">
            <p>Business Name</p>
            <input
              type="text"
              name="businessName"
              placeholder="Enter your business name"
              required
            />
          </div>

          <div className="email-container">
            <p>Email Address*</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="email-container">
            <p>Phone Number</p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <h3 className="heading">2 of 3- Your Request</h3>

        <h4>Which Services are you interested in?</h4>

        <div className="flexbox">
          <div className="group">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">Website & Software Development</label>
          </div>
          {/* Add the remaining checkboxes similarly */}
          <div className="group">
            <input type="checkbox" id="check9" />
            <label htmlFor="check9">Others</label>
          </div>
        </div>

        <h4>If others, please specify</h4>
        <textarea
          name="otherServices"
          cols="30"
          rows="5"
          placeholder=" "
        ></textarea>

        <h4>Tell about your business</h4>
        <textarea
          name="businessDescription"
          cols="30"
          rows="5"
          placeholder="Brief description of the business"
        ></textarea>

        <h3>3 of 3- Upload Documents</h3>

        <div className="drag-area">
          <div className="drag-icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <header>
            Drag & drop files or <button type="button">Browse</button>
          </header>
          <input type="file" hidden />
          <p>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
        </div>

        <div className="hero-links">
          <button type="button" id="button-form" onClick={onClose}>
            Cancel<i className="fa-solid fa-arrow-right"></i>
          </button>
          <button type="submit" id="button-form2">
            Send Request<i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </section>
  );
}

export default QuoteForm;
