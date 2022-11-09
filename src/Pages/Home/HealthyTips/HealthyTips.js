import React from "react";
import logof from "../food.jpg";
import logo from "../download.jfif";
import logo3 from "../download (1).jfif";
import { FaBicycle, FaHandsWash } from "react-icons/fa";

const HealthyTips = () => {
  return (
    <div className="mt-14 mb-10">
      <div>
        <h2 className="text-5xl text-center">TIPS FOR HEALTHY LIFE</h2>

        <p className="text-2xl text-center mt-5">
          Organizations regulating organic products may choose to restrict the
          use of certain pesticides and fertilizers in farming. In general,
          irradiation, industrial solvents or synthetic food additives.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 ">
        <div className="card w-96 bg-base-100 shadow-xl mt-10 ">
          <figure>
            <img className="w-20 h-20" src={logof} alt="Shoes" />
          </figure>
          <div className="card-body mt-10">
            <h2 className="card-title">Eat healthy</h2>
            <p>
              Eating habits should be regulated and controlled – only natural
              organic food will make our body healthy and strong.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <FaBicycle className="w-20 h-20 pt-3"></FaBicycle>
          </figure>
          <div className="card-body mt-10">
            <h2 className="card-title">Workout hard</h2>
            <p>
              Diet is not the only ingredient of a long happy life. Physical
              excercise is also important for your health and beauty.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img className="w-24 h-24" src={logo} alt="Shoes" />
          </figure>
          <div className="card-body mt-10">
            <h2 className="card-title">Avoiding Bad Habits</h2>
            <p>
              Expounds the actual teaching that great explorer of there levelon
              builder won.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img className="w-20 h-20" src={logo3} alt="Shoes" />
          </figure>
          <div className="card-body mt-10">
            <h2 className="card-title">Enjoy your life</h2>
            <p>
              See how your life becomes a pleasant adventure, full of bright
              colors and fun activities. Meet new friends as well.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <FaHandsWash className="w-20 h-20 pt-3"></FaHandsWash>
          </figure>
          <div className="card-body mt-10">
            <h2 className="card-title">Follow Good Hygiene</h2>
            <p>
              Denouncing pleasure praising pain born will completed of the
              system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyTips;
