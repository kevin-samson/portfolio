import React from "react";
import TechUsed from "../components/TechUsed";
import pic1 from "../assets/Java Banking App/1.png";
import pic2 from "../assets/Java Banking App/2.png";
import pic3 from "../assets/Java Banking App/3.png";

const JavaBankApp = () => {
  return (
    <div className="flex flex-col justify-start mb-20 h-auto">
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
        <div className="md:w-1/2 space-y-5">
          <h4 className="text-4xl">Java banking app </h4>
          <div className="flex space-x-2">
            <TechUsed tech={"Java"} />
            <TechUsed tech={"Swing"} />
            <TechUsed tech={"AWT"} />
          </div>
          <div className="flex flex-row space-x-6">
            <a
              className="rounded-sm bg-gradient-rainblue py-0.5 px-1 h-10 w-auto"
              href="https://github.com/kevin-samson/Java-banking-app"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-deep-blue font-roboto hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
                GitHub Repo
              </div>
            </a>
          </div>
          <p className="text-lg font-popins">
            Made using Java Swing and Java awt. Has a seperate Login page for
            Users and Admin <br /> <br /> User Side includes <br />
          </p>
          <ul className="list-disc list-inside">
            <li>Create a new user</li>
            <li>Withdraw or Deposit cash</li>
            <li>View all past Transactions</li>
          </ul>
          <br />
          Admin Side includes
          <ul className="list-disc list-inside">
            <li>View all users</li>
            <li>Delete users</li>
            <li>Modify Users</li>
          </ul>
          <br /> Made for year 2 sem 1 OOPS project
        </div>
        <div
          id="JavaBankApp"
          className="carousel slide relative h-96"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#JavaBankApp"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#JavaBankApp"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#JavaBankApp"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative overflow-hidden rounded-lg object-cover h-96 w-96 ">
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
            data-bs-target="#JavaBankApp"
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
            data-bs-target="#JavaBankApp"
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

export default JavaBankApp;
