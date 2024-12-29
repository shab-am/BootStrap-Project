import React from "react";

const Facilities = () => {
  const facilities = [
    { id: 1, name: "Water Heater", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_27079.svg" },
    { id: 2, name: "Television", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_41622.svg" },
    { id: 3, name: "Wifi", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_43553.svg" },
    { id: 4, name: "Room Service", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_47816.svg" },
    { id: 5, name: "Air Conditioning", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_49949.svg" },
    { id: 6, name: "Radiator", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi ducimus reiciendis illo at sapiente dolorum!", icon: "./assets/images/facilities/IMG_96423.svg" },
  ];

  return (
    <div className="bg-light">
      <div className="my-5 px-4">
        <h2 className="fw-bold h-font text-center">OUR FACILITIES</h2>
        <div className="h-line bg-dark"></div>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Aperiam voluptas dolores at cum quasi unde explicabo iure quia in sed.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {facilities.map((facility) => (
            <div className="col-lg-4 col-md-6 mb-5 px-4" key={facility.id}>
              <div className="bg-white rounded shadow p-4 border-top border-4 border-dark pop">
                <div className="d-flex align-items-center mb-2">
                  <img src={facility.icon} width="40px" alt={facility.name} />
                  <h5 className="m-0 ms-3">{facility.name}</h5>
                </div>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
