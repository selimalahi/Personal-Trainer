import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { _id,title, img, fee, description } = useLoaderData();
  return (
    <div>
      <div>
        <div className="card w-full h-94 bg-base-100 shadow-xl">
          <figure>
            <img className="img-img" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className=" text-4xl text-center text-orange-500 ">
              {title}              
            </h2>
            <div className="font-bold text-4xl mt-10">Services Fee : {fee }</div>
            <p className="text-xl mt-10">{description}</p>
           
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        
        <Link to={`/addreview/${_id}`}><button className="btn btn-active btn-accent">Add Review</button></Link>
      </div>
    </div>
  );
};

export default DetailsPage;
