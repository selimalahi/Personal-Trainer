import React from "react";
import './AllReview.css';


const AllReview = ({ review }) => {
  const { customerImg, customer, message } = review;
  return (
    <div>
      
      <div className="name-review">
        <img className="w-16 h-16 img-review img-review " src={customerImg} alt="" />
        <h3>name : {customer}</h3>
      </div>
      <h3 className="text-xl mt-4 mb-4">{message}</h3>
    </div>
  );
};

export default AllReview;
