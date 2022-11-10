import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HealthyTips from "../HealthyTips/HealthyTips";
import NewsArticle from "../NewsArticle/NewsArticle";
import 'react-photo-view/dist/react-photo-view.css';
import "./Home.css";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pt-10 pb-12">
        {services.map((service) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src={service.img}>
              <img src={service.img} alt=""></img>
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <h2 className="card-title">Services Fee : {service.fee}</h2>
            <p> {service.description.slice(0, 100)}.....</p>
            <div className="card-actions justify-end">
              <Link><button className="btn btn-info">Details</button></Link>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mb-10">
        <Link to='/all-services' ><button className="btn btn-info btn-container w-1/2 ">See-All</button></Link>
      </div>
      <HealthyTips></HealthyTips>
      <NewsArticle></NewsArticle>
    </div>
  );
};

export default Home;
