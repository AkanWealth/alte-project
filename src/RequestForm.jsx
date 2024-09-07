import React from "react";
import { FaTimes } from "react-icons/fa";

function RequestForm({ onClose }) {
  return (
    <>
      <div className="quote-overlay">
        <section className="quote" id="quote">
          <form action="" method="">
            <h2 className="heading">
              Request a Free Quote{" "}
              <i onClick={onClose} className="fa-solid fa-square-xmark">
                <FaTimes />
              </i>
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
                  name="name"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div className="email-container">
                <p>Email Address*</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="email-container">
                <p>Phone Number</p>
                <input
                  type="text"
                  name="name"
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

              <div className="group">
                <input type="checkbox" id="check2" />
                <label htmlFor="check2">Mobile App Development</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check3" />
                <label htmlFor="check3">Product Discovery</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check4" />
                <label htmlFor="check4">Product Design</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check5" />
                <label htmlFor="check5">Research and Analysis</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check6" />
                <label htmlFor="check6">Pitch Desk Creation</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check7" />
                <label htmlFor="check7">Business Plan Development</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check8" />
                <label htmlFor="check8">Low Code App Development</label>
              </div>

              <div className="group">
                <input type="checkbox" id="check9" />
                <label htmlFor="check9">Others</label>
              </div>
            </div>

            <h4>If others, please specify</h4>

            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder=" "
            ></textarea>

            <h4>Tell about your business</h4>

            <textarea
              name="message"
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
                Drag & drop files or <button>Browse</button>
              </header>
              <input type="file" hidden />
              <p>
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
            </div>

            <div className="hero-links">
              <button id="button-form" onClick={onClose}>
                Cancel<i className="fa-solid fa-arrow-right"></i>
              </button>
              <button id="button-form2">
                Send Request<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default RequestForm;
