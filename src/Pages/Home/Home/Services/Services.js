import React, { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart/ServicesCart";
import Banner from './../../Banner/Banner';

const Services = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-services")
    .then((res) => res.json())
    .then((data) => setServices(data))
  }, []);
  return (
    <div>
        <div>
        <Banner></Banner>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-orange-600">Our Services</p>
        <p className=" w-1/2 m-auto my-4">
          Start working on your body today, and with our individual fitness
          program, already in 90 days you will see a totally different girl in
          the mirror!
        </p>
      </div>
      <div  className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart> )
                }
      </div>
    </div>
  );
};

export default Services;
