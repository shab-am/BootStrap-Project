import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid bg-white mt-5">
            <div className="row">
                <div className="col-lg-4 p-4">
                    <h3 className="h-font fw-bold fs-3 mb-2">OceanOasis Hotel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum cumque eaque! Illo, quibusdam expedita?</p>
                </div>
                <div className="col-lg-4 p-4">
                    <h5 className="mb-3">Links</h5>
                    <a href="#" className="d-inline-block mb-2 text-decoration-none text-dark">Home</a><br />
                    <a href="#" className="d-inline-block mb-2 text-decoration-none text-dark">Rooms</a><br />
                    <a href="#" className="d-inline-block mb-2 text-decoration-none text-dark">Facilities</a><br />
                    <a href="#" className="d-inline-block mb-2 text-decoration-none text-dark">Contact Us</a><br />
                    <a href="#" className="d-inline-block mb-2 text-decoration-none text-dark">About</a>
                </div>
                <div className="col-lg-4 p-4">
                    <h5 className="mb-3">Follow Us</h5>
                    <a href="#" className="d-inline-block text-decoration-none text-dark mb-2">
                        <i className="bi bi-twitter me-1"></i> Twitter
                    </a><br />
                    <a href="#" className="d-inline-block text-decoration-none text-dark mb-2">
                        <i className="bi bi-facebook me-1"></i> Facebook
                    </a><br />
                    <a href="#" className="d-inline-block text-decoration-none text-dark">
                        <i className="bi bi-instagram me-1"></i> Instagram
                    </a>
                </div>
            </div>
            <h6 className="text-center bg-dark text-white p-3 m-0">Designed and Developed by OceanOasis Hotel</h6>
        </footer>
    );
}

export default Footer;
