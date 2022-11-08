import React from "react";
import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";
import img5 from "../../../assets/banner/book-min.png";
import "./Banner.css";



const Banner = () => {
  return (
    <div className="carousel w-full mt-10 mb-10 carousel-container ">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img src={img1} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full carousel-img">
        <img src={img4} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="grid grid-cols-2 pl-20">
            <img
              src={img5}
              style={{ width: "80%", paddingLeft: "20px" }}
              alt=""
            ></img>

            <div className="text-left ">
              
                <h2 className=" mt-10 text-green-500 text-3xl font-bold">
                  Happy, Healthy, Young & Beautiful.
                </h2>
                <p className="mt-10 text-lg">
                Start working on your body today, and with our individual
                fitness program, already in 90 days you will see a totally
                different girl in the mirror!
              </p>
            </div>
            {/* <h2 className="text-center">Happy, Healthy, Young & Beautiful.</h2> */}
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
