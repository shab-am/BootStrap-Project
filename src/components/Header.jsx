import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand me-5 fw-bold fs-3 h-font" to="/">
            OceanOasis Hotel
          </Link>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/rooms">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/facilities">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <button
                type="button"
                className="btn shadow-none me-lg-3 me-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-dark shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title d-flex align-items-center" id="loginModalLabel">
                <i className="bi bi-person-circle fs-3 me-2"></i> User Login
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control shadow-none" required />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control shadow-none" required />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button type="submit" className="btn btn-dark shadow-none">
                    LOGIN
                  </button>
                  <a href="#" className="text-secondary text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div
        className="modal fade"
        id="registerModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form id="register-form" method="POST" encType="multipart/form-data">
              <div className="modal-header">
                <h5 className="modal-title" id="registerModalLabel">
                  <i className="bi bi-person-lines-fill fs-3 me-2"></i> User Registration
                </h5>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <span className="badge rounded-pill text-bg-light text-wrap lh-base">
                  Note: Your details must match your ID (Aadhar card, passport, license, etc.)
                  required during check-in.
                </span>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Name</label>
                      <input name="name" type="text" className="form-control shadow-none" required />
                    </div>
                    <div className="col-md-6 p-0 mb-3">
                      <label className="form-label">Email</label>
                      <input name="email" type="email" className="form-control shadow-none" required />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        name="phonenum"
                        type="number"
                        className="form-control shadow-none"
                        required
                      />
                    </div>
                    <div className="col-md-12 p-0 mb-3">
                      <label className="form-label">Picture</label>
                      <input
                        name="profile"
                        type="file"
                        accept=".jpg, .jpeg, .png, .webp"
                        className="form-control shadow-none"
                        required
                      />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        name="address"
                        className="form-control shadow-none"
                        rows="1"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-6 p-0 mb-3">
                      <label className="form-label">Pin Code</label>
                      <input name="pincode" type="number" className="form-control shadow-none" required />
                    </div>
                    <div className="col-md-12 p-0 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input name="dob" type="date" className="form-control shadow-none" required />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Password</label>
                      <input
                        name="pass"
                        type="password"
                        className="form-control shadow-none"
                        required
                      />
                    </div>
                    <div className="col-md-6 p-0 mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        name="cpass"
                        type="password"
                        className="form-control shadow-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center my-1">
                  <button type="submit" className="btn btn-dark shadow-none">
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
