import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pt-10 pb-12">
        {services.map((service) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure> <img src={service.img} alt=""></img></figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <h2 className="card-title">Services Fee : {service.fee}</h2>
            <p> {service.description.slice(0, 100)}.....</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">Details</button>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-10">
        <Link to='/all-services' ><button className="btn btn-info btn-container w-1/2 ">See-All</button></Link>
      </div>
    </div>
  );
};

export default Home;
