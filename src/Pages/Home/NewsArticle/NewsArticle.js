import React from "react";
import image1 from '../lat-blog-1.jpg';
import image2 from '../lat-blog-3.jpg';
import image3 from '../welcome.jpg';

const NewsArticle = () => {
  return (
    <div className="mt-20">
        <h2 className="text-5xl text-center mb-20">
        NEWS & ARTICLES
        </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mb-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Build an Athletic Body With In Eight Weeks Time
           
          </h2>
          <p>At Integrative Nutrition, we teach the concept of Primary Food which is everything that nourishes your life [...]</p>
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Stop Getting Annoyed If You Want Better Health
           
          </h2>
          <p>We teach the concept of Primary sed Food which that nourishes your life perspiciatis seds unde omniste [...]</p>
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Yoga and Healthy Food Making Your Family Happy
           
          </h2>
          <p>At Integrative Nutrition, we teach the concept of Primary Food which is everything that nourishes your life [...]</p>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsArticle;
