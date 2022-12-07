import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllReview from "../AllReview/AllReview";
import "./DetailsPage.css";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const { _id,title, img, fee, description } = useLoaderData();

  const [reviews, setReviwes] = useState([]);
  
    useEffect(() => {
      fetch(`https://assignment-11-server-site-selimalahi.vercel.app/single-service-reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviwes(data))        
    },[]);

  return (
    <div>
      
      <Helmet>           
           <title>details page</title>          
       </Helmet>
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
        

      {
          reviews.map(review =><AllReview
          key={review._id}
          review={review}
          ></AllReview>)
        }
        
        <Link to={`/addreview/${_id}`}><button className="btn btn-active btn-accent">Add Review</button></Link>
      </div>
    </div>
  );
};

export default DetailsPage;
