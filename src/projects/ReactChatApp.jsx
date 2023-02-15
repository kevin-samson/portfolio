import React from "react";
import TechUsed from "../components/TechUsed";
import pic1 from "../assets/React Chat App/1.png";
import pic2 from "../assets/React Chat App/2.png";
import pic3 from "../assets/React Chat App/3.png";

const ReactChatApp = () => {
  return (
    <div className="flex flex-col justify-start mb-20 ">
      <div className="flex md:flex-row md:space-x-6 flex-col">
        <div className="md:w-1/2 space-y-5">
          <h4 className="text-4xl">React chat app </h4>
          <div className="grid grid-cols-5 grid-rows-2 gap-3 w-10/12 items-center">
            <TechUsed tech={"React"} />
            <TechUsed tech={"Java Script"} />
            <TechUsed tech={"Tailwind"} />
            <TechUsed tech={"HTML"} />
            <TechUsed tech={"CSS"} />
            <TechUsed tech={"FireBase"} />
          </div>
          <div className="flex flex-row space-x-6">
            <a
              className="rounded-sm bg-gradient-rainblue py-0.5 px-1 h-10 w-auto"
              href="https://github.com/kevin-samson/react-chat-app"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-deep-blue font-roboto hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
                GitHub Repo
              </div>
            </a>
            <a
              href="https://chat-app-65bc6.web.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-gradient-rainblue py-0.5 px-1 h-10 w-auto"
            >
              <div className="bg-deep-blue font-roboto hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
                Website Link
              </div>
            </a>
          </div>
          <p className="text-lg font-popins">
            A web applcation made using react with firebase as server-side. The
            Firestore Databse lets me build rich, collaborative applications by
            allowing secure access to the database directly from client-side
            code. This website is also hosted on Firebase Hosting .
          </p>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide relative md:w-1/2"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden rounded-lg">
            <div class="carousel-item active float-left w-full">
              <img src={pic1} class="block w-full" alt="Wild Landscape" />
            </div>
            <div class="carousel-item float-left w-full">
              <img src={pic2} class="block w-full" alt="Camera" />
            </div>
            <div class="carousel-item float-left w-full">
              <img src={pic3} class="block w-full" alt="Exotic Fruits" />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
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

export default ReactChatApp;
