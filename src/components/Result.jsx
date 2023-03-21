import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import samplePets from "./animals";

const Result = () => {
  const pets = samplePets;

  const { state } = useLocation();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    setAnswers(state.state);
  }, []);

  console.log(answers);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="block w-full text-center">
          <div className="sm:text-7xl text-5xl mb-20 font-title">
            <h1>Pet Matching App</h1>
          </div>
          <div className="mb-10 flex justify-center items-center font-question">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {pets?.animals.map((pet) => (
                <a href={pet.url} target="_blank" rel="noreferrer">
                  <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={pet.photos[0]?.medium} alt={pet.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="font-bold text-lg">{pet.name}</h2>
                      <p className="text-gray-700">{pet.breeds.primary}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <span className="text-gray-500 mr-1">Gender:</span>
                          <span className="font-semibold">{pet.gender}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 mr-1">Age:</span>
                          <span className="font-semibold">{pet.age}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button className="w-52 text-5xl p-3 rounded-2xl text-center font-fancy bg-gradient-to-r from-lime-500 to-lime-600">
              <Link to="/">Top</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
