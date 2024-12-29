import React from 'react';

const Contact = () => {
  return (
    <div className="bg-light">
      <div className="my-5 px-4">
        <h2 className="fw-bold text-center">CONTACT US</h2>
        <div className="bg-dark mx-auto" style={{ height: '2px', width: '60px' }}></div>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Aperiam voluptas dolores at cum quasi unde explicabo iure quia in sed.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 px-4">
            <div className="bg-white rounded shadow p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.11234545853!2d77.30126027708287!3d12.953790190873264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720961747391!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              <h5 className="mt-4">Address</h5>
              <a
                href="https://maps.app.goo.gl/u4g5TGquKJdubvur6"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block text-decoration-none text-dark mb-2"
              >
                <i className="bi bi-geo-alt-fill"></i> XYZ, Bangalore, Karnataka
              </a>
              <h5 className="mt-4">Call us</h5>
              <a href="tel:+917778889991" className="d-block text-decoration-none text-dark mb-2">
                <i className="bi bi-telephone-fill"></i> +917778889991
              </a>
              <h5 className="mt-4">Email</h5>
              <a href="mailto:ask.sample123@gmail.com" className="d-block text-decoration-none text-dark">
                <i className="bi bi-envelope-fill"></i> ask.sample123@gmail.com
              </a>
              <h5 className="mt-4">Follow Us</h5>
              <a href="#" className="text-dark fs-5 me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark fs-5 me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 px-4">
            <div className="bg-white rounded shadow p-4">
              <form>
                <h5>Send a message</h5>
                <div className="mt-3">
                  <label className="form-label fw-bold">Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mt-3">
                  <label className="form-label fw-bold">Email address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mt-3">
                  <label className="form-label fw-bold">Subject</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mt-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea className="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
