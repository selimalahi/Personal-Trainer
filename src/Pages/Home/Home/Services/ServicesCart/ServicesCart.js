import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../Banner/Banner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCart = ({ service }) => {
  const { _id, img, title, fee, description } = service;
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 pb-12">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
          <PhotoProvider>
              <PhotoView src={img}>
              <img src={img} alt=""></img>
              </PhotoView>
            </PhotoProvider>
            
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-title">Services Fee : {fee}</h2>
            <p> {description.slice(0, 100)}.....</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-info">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
