import React, { useState } from "react";

const Top = () => {
  const [val, setVal] = useState("vancouver");

  const handleChange = (e) => setVal(e.target.value);

  return (
    <div className="w-screen h-screen bg-blue-300 ">
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
                checked={val === "vancouver"}
              />
              <label
                htmlFor="vancouver"
                className="sm:w-80 w-52  block float-left sm:text-5xl text-3xl p-3 rounded-2xl text-center bg-yellow-200 cursor-pointer hover:bg-yellow-400 peer-checked:bg-green-200"
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
                checked={val === "toronto"}
              />
              <label
                htmlFor="toronto"
                className="sm:w-80 w-52  block float-left sm:text-5xl text-3xl p-3 rounded-2xl text-center bg-yellow-200 cursor-pointer hover:bg-yellow-400 peer-checked:bg-green-200"
              >
                Toronto
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="w-52 text-5xl p-3 rounded-2xl text-center font-fancy bg-emerald-500 hover:bg-emerald-800">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
