import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SwiperCore from "swiper";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const SwiperSection = () => (
    <div className="container-fluid px-0 mt-3">
        <Swiper
            spaceBetween={0}  // Remove space between slides
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="swiper-container"
        >
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_40905.png" className="w-100" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_62045.png" className="w-100" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_93127.png" className="w-100" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_99736.png" className="w-100" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_15372.png" className="w-100" alt="Slide 5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./assets/images/carousel/IMG_55677.png" className="w-100" alt="Slide 6" />
            </SwiperSlide>
        </Swiper>
    </div>
);

const TestimonialCard = ({ name, text }) => (
    <div className="bg-white p-4">
        <div className="profile d-flex align-items-center p-4">
            <h6 className="m-0 ms-2">{name}</h6>
        </div>
        <p>{text}</p>
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill text-warning"></i>
            ))}
        </div>
    </div>
);

const Testimonials = () => (
    <div className="container mt-5">
        <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">TESTIMONIALS</h2>
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="swiper-testimonial"
        >
            <SwiperSlide>
                <TestimonialCard name="Aman" text="Booking a hotel through this website was incredibly easy and seamless. The interface is user-friendly, and I found exactly what I was looking for." />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard name="Rahil" text="The website offers a wide range of options and detailed information on each hotel. It made choosing the perfect place for my trip effortless." />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard name="Amit" text="I loved how fast and responsive the booking process was. The customer service was excellent, making my experience even better." />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard name="Priya" text="The search filters were very helpful in finding exactly what I wanted—whether it was budget, location, or amenities." />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard name="Vivek" text="This platform makes hotel booking stress-free. I appreciate the detailed reviews and ratings that helped me make informed decisions." />
            </SwiperSlide>
            {/* Add more SwiperSlides if needed */}
        </Swiper>
    </div>
);

const AvailabilityForm = () => (
    <div className="container availability-form">
        <div className="row">
            <div className="col-lg-12 bg-white shadow p-4 rounded">
                <h5 className="mb-4">Check Booking Availability</h5>
                <form id="book-room-form" action="../ajax/book_room.php" method="POST" enctype="multipart/form-data">
                    <div className="row align-items-end">
                        <div className="col-lg-3 mb-3">
                            <label className="form-label" style={{ fontWeight: 500 }}>Check-in</label>
                            <input name="checkin_date" type="date" className="form-control shadow-none" required />
                        </div>
                        <div className="col-lg-3 mb-3">
                            <label className="form-label" style={{ fontWeight: 500 }}>Check-out</label>
                            <input name="checkout_date" type="date" className="form-control shadow-none" required />
                        </div>
                        <div className="col-lg-3 mb-3">
                            <label className="form-label" style={{ fontWeight: 500 }}>Adult</label>
                            <select name="adult" className="form-select shadow-none" required>
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <label className="form-label" style={{ fontWeight: 500 }}>Children</label>
                            <select name="children" className="form-select shadow-none" required>
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-lg-1 mb-lg-3 mt-2">
                            <button type="submit" className="btn text-white shadow-none custom-bg">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

const RoomCard = ({ image, name, price, features, facilities, guests, rating }) => (
    <div className="col-lg-4 col-md-6 my-3">
        <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5>{name}</h5>
                <h6 className="mb-4">${price} per night</h6>
                <div className="features mb-4">
                    <h6 className="mb-1">Features</h6>
                    {features.map((feature, index) => (
                        <span key={index} className="badge rounded-pill bg-light text-dark text-wrap">
                            {feature}
                        </span>
                    ))}
                </div>
                <div className="facilities mb-4">
                    <h6 className="mb-1">Facilities</h6>
                    {facilities.map((facility, index) => (
                        <span key={index} className="badge rounded-pill bg-light text-dark text-wrap">
                            {facility}
                        </span>
                    ))}
                </div>
                <div className="guests mb-4">
                    <h6 className="mb-1">Guests</h6>
                    <span className="badge rounded-pill bg-light text-dark text-wrap">{guests.adults} Adults</span>
                    <span className="badge rounded-pill bg-light text-dark text-wrap">{guests.children} Children</span>
                </div>
                <div className="rating mb-4">
                    <h6 className="mb-1">Rating</h6>
                    <span className="badge rounded-pill bg-light">
                        {Array.from({ length: rating }).map((_, i) => (
                            <i key={i} className="bi bi-star-fill text-warning"></i>
                        ))}
                    </span>
                </div>
                <div className="d-flex justify-content-evenly mb-2">
                    <a href="#" className="btn btn-sm text-white custom-bg shadow-none">Book Now</a>
                    <a href="#" className="btn btn-sm btn-outline-dark shadow-none">More Details</a>
                </div>
            </div>
        </div>
    </div>
);

const RoomsSection = () => (
    <div className="container">
        <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">OUR ROOMS</h2>
        <div className="row">
            <RoomCard
                image="./assets/images/rooms/IMG_11892.png"
                name="Simple Room Name"
                price={200}
                features={["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofa"]}
                facilities={["Wifi", "Television", "AC", "Room Heater"]}
                guests={{ adults: 5, children: 4 }}
                rating={4}
            />
            <RoomCard
                image="./assets/images/rooms/IMG_39782.png"
                name="Simple Room Name"
                price={200}
                features={["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofa"]}
                facilities={["Wifi", "Television", "AC", "Room Heater"]}
                guests={{ adults: 5, children: 4 }}
                rating={4}
            />
            <RoomCard
                image="./assets/images/rooms/IMG_67761.png"
                name="Simple Room Name"
                price={200}
                features={["2 Rooms", "1 Bathroom", "1 Balcony", "3 Sofa"]}
                facilities={["Wifi", "Television", "AC", "Room Heater"]}
                guests={{ adults: 5, children: 4 }}
                rating={4}
            />
            {/* Add more RoomCard components as needed */}
        </div>
        <div className="col-lg-12 text-center mt-5">
            <a href="/rooms" className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none">More Rooms &gt;&gt;&gt;</a>
        </div>
    </div>
);

const Facilities = () => {
    const facilities = [
        { img: "./assets/images/facilities/IMG_27079.svg", label: "Water Heater" },
        { img: "./assets/images/facilities/IMG_41622.svg", label: "Television" },
        { img: "./assets/images/facilities/IMG_96423.svg", label: "Radiator" },
        { img: "./assets/images/facilities/IMG_43553.svg", label: "Wi-Fi" },
        { img: "./assets/images/facilities/IMG_47816.svg", label: "Room Service" },
        { img: "./assets/images/facilities/IMG_49949.svg", label: "AC" },
    ];

    return (
        <div>
            <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">OUR FACILITIES</h2>
            <div className="container">
                <div className="row justify-content-evenly px-lg-0 px-md-0 px-5">
                    {facilities.map((facility, index) => (
                        <div key={index} className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                            <img src={facility.img} width="40px" alt={`${facility.label} Icon`} />
                            <h5 className="mt-3">{facility.label}</h5>
                        </div>
                    ))}
                </div>
                <div className="col-lg-12 text-center mt-5">
                    <a href="/facilities" className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none">
                        More facilities &gt;&gt;&gt;
                    </a>
                </div>
            </div>
        </div>
    );
};

const ReachUs = () => (
    <>
        <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">REACH US</h2>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
                    <iframe
                        className="w-100 rounded"
                        height="320px"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0770643920673!2d77.56053246968297!3d13.030764359199834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dedd4dcca9%3A0x6075bd8d8aed97ab!2sRamaiah%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1719762267580!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map Location"
                    ></iframe>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="bg-white p-4 rounded mb-4">
                        <h5>Call Us</h5>
                        <a href="tel:+914536437657" className="d-inline-block mb-2 text-decoration-none text-dark">
                            <i className="bi bi-telephone-fill"></i> +91 4536437657
                        </a>
                        <br />
                        <a href="tel:+914536437657" className="d-inline-block mb-2 text-decoration-none text-dark">
                            <i className="bi bi-telephone-fill"></i> +91 4536437657
                        </a>
                    </div>
                    <div className="bg-white p-4 rounded mb-4">
                        <h5>Follow Us</h5>
                        <a href="#" className="d-inline-block mb-3">
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-twitter me-1"></i> Twitter
                            </span>
                        </a>
                        <br />
                        <a href="#" className="d-inline-block mb-3">
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-facebook me-1"></i> Facebook
                            </span>
                        </a>
                        <br />
                        <a href="#" className="d-inline-block">
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-instagram me-1"></i> Instagram
                            </span>
                        </a>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h5>Email Us</h5>
                        <a href="mailto:info@domain.com" className="d-inline-block text-decoration-none text-dark">
                            <i className="bi bi-envelope-fill"></i> info@domain.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const App = () => (
    <>
        <SwiperSection />
        <AvailabilityForm />
        <RoomsSection />
        <Facilities />
        <Testimonials />
        <ReachUs />
    </>
);

export default App;