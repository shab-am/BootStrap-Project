import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const roomsData = [
  {
    id: 1,
    image: `./assets/images/rooms/IMG_11892.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 200,
  },
  {
    id: 2,
    image: `./assets/images/rooms/IMG_39782.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 300,
  },
  {
    id: 3,
    image: `./assets/images/rooms/IMG_42663.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 400,
  },
  {
    id: 4,
    image: `./assets/images/rooms/IMG_65019.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 500,
  },
  {
    id: 5,
    image: `./assets/images/rooms/IMG_67761.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 600,
  },
  {
    id: 6,
    image: `./assets/images/rooms/IMG_70583.png`,
    name: 'Simple Room Name',
    features: ['2 Rooms', '2 Balcony', '1 BathRoom', '3 Sofa Rooms'],
    facilities: ['Wifi', 'A/C', 'Room Heater', 'Television'],
    guest: { adult: 5, children: 4 },
    price: 700,
  },
];

const RoomCard = ({ room }) => (
  <div className="card mb-4 border-0 shadow">
    <div className="row g-0 p-3 align-items-center">
      <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
        <img src={room.image} className="img-fluid rounded-start" alt="Room" />
      </div>
      <div className="col-md-5 px-lg-3 px-0">
        <h5 className="mb-1">{room.name}</h5>
        <div className="features mb-3">
          <h6 className="mb-1">Features</h6>
          {room.features.map((feature, index) => (
            <span key={index} className="badge rounded-pill bg-light text-dark lh-base text-wrap me-1">
              {feature}
            </span>
          ))}
        </div>
        <div className="facilities mb-3">
          <h6 className="mb-1">Facilities</h6>
          {room.facilities.map((facility, index) => (
            <span key={index} className="badge rounded-pill bg-light text-dark lh-base text-wrap me-1">
              {facility}
            </span>
          ))}
        </div>
        <div className="guest mb-4">
          <h6 className="mb-1">Guest</h6>
          <span className="badge rounded-pill bg-light text-dark lh-base text-wrap me-1">
            {room.guest.adult} Adult
          </span>
          <span className="badge rounded-pill bg-light text-dark lh-base text-wrap me-1">
            {room.guest.children} Children
          </span>
        </div>
      </div>
      <div className="col-md-2 text-center">
        <h6 className="mb-4">₹{room.price} per night</h6>
        <a href="#" className="btn btn-sm text-white custom-bg shadow-none mb-2 w-100">
          Book Now
        </a>
        <a href="#" className="btn btn-sm btn-outline-dark shadow-none w-100">
          More Details
        </a>
      </div>
    </div>
  </div>
);

const Rooms = () => (
  <>
    <div className="my-4 px-4">
      <h2 className="fw-bold h-font text-center">OUR ROOMS</h2>
      <div className="h-line bg-dark"></div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-lg-0 mb-4 px-lg-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
            <div className="container-fluid flex-lg-column align-items-stretch">
              <h4 className="mt-2">FILTERS</h4>
              <button
                className="navbar-toggler shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filterDropdown"
                aria-controls="filterDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse flex-column mt-2 align-items-stretch" id="filterDropdown">
                <div className="border bg-light p-2 rounded mb-3">
                  <h5 className="mb-3" style={{ fontSize: '18px' }}>
                    CHECK AVAILABILITY
                  </h5>
                  <label className="form-label">Check-in</label>
                  <input type="date" className="form-control shadow-none mb-3" />
                  <label className="form-label">Check-out</label>
                  <input type="date" className="form-control shadow-none" />
                </div>
                <div className="border bg-light p-2 rounded mb-3">
                  <h5 className="mb-3" style={{ fontSize: '18px' }}>
                    FACILITIES
                  </h5>
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="mb-2">
                      <input type="checkbox" id={`f${index}`} className="form-check-input shadow-none" />
                      <label htmlFor={`f${index}`} className="form-check-label">
                        Facility {index + 1}
                      </label>
                    </div>
                  ))}
                </div>
                <h5 className="mb-3" style={{ fontSize: '18px' }}>
                  GUEST
                </h5>
                <div className="d-flex">
                  <div className="me-2">
                    <label className="form-label">Adult</label>
                    <input type="number" className="form-control shadow-none" />
                  </div>
                  <div>
                    <label className="form-label">Children</label>
                    <input type="number" className="form-control shadow-none" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-9 col-md-12 px-4">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Rooms;
