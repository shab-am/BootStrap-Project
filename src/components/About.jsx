import React from 'react';

const About = () => {
  return (
    <div className="bg-light">
      <div className="container mt-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <h3 className="mb-3">Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque aliquam quis officiis a eaque ipsa molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque aliquam quis officiis a eaque ipsa molestias.
            </p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <img src="./assets/images/about/about.jpg" alt="About Us" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-primary text-center">
              <img src="./assets/images/about/hotel.svg" width="70" alt="Rooms" />
              <h4 className="mt-3">100+ ROOMS</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-primary text-center">
              <img src="./assets/images/about/customers.svg" width="70" alt="Customers" />
              <h4 className="mt-3">200+ CUSTOMERS</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-primary text-center">
              <img src="./assets/images/about/rating.svg" width="70" alt="Reviews" />
              <h4 className="mt-3">150+ REVIEWS</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-primary text-center">
              <img src="./assets/images/about/staff.svg" width="70" alt="Staffs" />
              <h4 className="mt-3">200+ STAFFS</h4>
            </div>
          </div>
        </div>
      </div>

      <h3 className="my-5 fw-bold text-center">MANAGEMENT TEAM</h3>
      <div className="container px-4">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper mb-5">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="swiper-slide bg-white text-center overflow-hidden rounded"
                >
                  <img
                    src="./assets/images/about/team.jpg"
                    alt="Team Member"
                    className="w-100"
                  />
                  <h5 className="mt-2">Random Name</h5>
                </div>
              ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
