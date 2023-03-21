import React, { useState } from "react";
import { Link } from "react-router-dom";

const Top = () => {
  const [location, setLocation] = useState("vancouver");

  const handleChange = (e) => setLocation(e.target.value);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="block w-full text-center">
          <div className="sm:text-7xl text-5xl mb-20 font-title">
            <h1>Pet Matching App</h1>
          </div>
          <div className="sm:text-5xl text-3xl mb-5 font-question">
            <h1>Choose Your Location</h1>
          </div>
          <div className="mb-10 flex justify-center items-center font-question">
            <div className="w-96 flex justify-center items-center">
              <input
                type="radio"
                id="vancouver"
                value="vancouver"
                className="hidden peer"
                onChange={handleChange}
                checked={location === "vancouver"}
              />
              <label
                htmlFor="vancouver"
                className="sm:w-80 w-52  block float-left sm:text-5xl text-3xl p-3 rounded-2xl text-center bg-zinc-500  cursor-pointer hover:bg-yellow-400 peer-checked:bg-yellow-400"
              >
                Vancouver
              </label>
            </div>
            <div className="w-96 flex justify-center items-center">
              <input
                type="radio"
                id="toronto"
                value="toronto"
                className="hidden peer"
                onChange={handleChange}
                checked={location === "toronto"}
              />
              <label
                htmlFor="toronto"
                className="sm:w-80 w-52  block float-left sm:text-5xl text-3xl p-3 rounded-2xl text-center bg-zinc-500  cursor-pointer hover:bg-yellow-400 peer-checked:bg-yellow-400"
              >
                Toronto
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="w-52 text-5xl p-3 rounded-2xl text-center font-fancy bg-gradient-to-r from-lime-500 to-lime-600">
              <Link to={"/question"} state={{ state: location }}>
                START
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
