/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Result = () => {
  // const pets = samplePets;

  const { state } = useLocation();
  /* params */
  // location: "",
  // gender: "",
  // age: "",
  // size: "",
  // kids: "",
  // hairLength: "",
  const answers = state.state;
  const [pets, setPets] = useState(null);

  const getAnimals = async () => {
    let kids;
    answers.kids === "yes" ? (kids = 1) : (kids = 0);

    const fetch_url = `https://petfinder-api.onrender.com?&location=${answers.location}&gender=${answers.gender}&age=${answers.age}&size=${answers.size}&hairLength=${answers.hairLength}&kids=${kids}`;
    console.log(fetch_url);

    await fetch(fetch_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPets(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <div className="w-screen h-auto bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-screen flex justify-center items-center">
          <div className="block w-full max-w-screen-lg h-full text-center">
            <div className="sm:text-7xl text-5xl mb-20 pt-5 font-title">
              <h1>Pet Matching App</h1>
            </div>
            <div className="mb-10 h-3/4 flex justify-center items-center">
              {pets === null ? (
                <>Now Loading...</>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {pets?.animals.map((pet) => (
                      <a href={pet.url} target="_blank" rel="noreferrer" key={pet.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                <span className="text-gray-500 mr-1">Size:</span>
                                <span className="font-semibold">{pet.size}</span>
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
                </>
              )}
            </div>
            <div className="text-center">
              <button className="w-52 text-5xl p-3 rounded-2xl text-center font-fancy bg-gradient-to-r from-lime-500 to-lime-600">
                <Link to="/">Top</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
