import React from "react";
import TechUsed from "../components/TechUsed";
import pic1 from "../assets/FitnessApp/Picture1.png";
import pic2 from "../assets/FitnessApp/Picture2.png";
import pic3 from "../assets/FitnessApp/Picture3.png";

const FitnessApp = () => {
  return (
    <div className="flex flex-col justify-start mb-20 ">
      <div className="flex md:flex-row md:space-x-6 flex-col">
        <div className="md:w-1/2 space-y-5">
          <h4 className="text-4xl">FitFusion </h4>
          <div className="flex space-x-2">
            <TechUsed tech={"Flask"} />
            <TechUsed tech={"HTML"} />
            <TechUsed tech={"CSS"} />
            <TechUsed tech={"MySQL"} />
          </div>
          <div className="flex flex-row justify-start space-x-3">
            <a
              className="rounded-sm bg-gradient-rainblue py-0.5 px-1  h-auto w-auto"
              href="https://github.com/kevin-samson/FitFusion"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-deep-blue font-roboto hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 py-2 font-semibold">
                GitHub Repo
              </div>
            </a>
          </div>
          <p className="text-lg font-popins">
            We have used Python, MySql, HTML and Tailwind CSS Our website is a
            Fitness website. It has a sign-in and login page. After, logging in
            we have a member’s page that includes exercises and the amount of
            calories we burn doing the exercises with trainers who support us
            for the exercise. It helps us track our progress This includes a
            table that shows how many calories they burned during each workout.
            It also lets us track our water intake, food intake, and our BMI.
          </p>
        </div>
        <div
          id="fitfusuion"
          className="carousel slide relative md:w-1/2 pt-10"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#fitfusuion"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#fitfusuion"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#fitfusuion"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
            <div className="carousel-item active float-left w-full">
              <img src={pic1} className="block w-full" alt="Wild Landscape" />
            </div>
            <div className="carousel-item float-left w-full">
              <img src={pic2} className="block w-full" alt="Camera" />
            </div>
            <div className="carousel-item float-left w-full">
              <img src={pic3} className="block w-full" alt="Exotic Fruits" />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#fitfusuion"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#fitfusuion"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessApp;
