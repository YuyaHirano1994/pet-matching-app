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

    await fetch(fetch_url)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-screen flex justify-center items-center">
          <div className="block w-full max-w-screen-lg h-full text-center">
            <div className="sm:text-7xl text-5xl mb-20 pt-5 font-title">
              <h1>Pet Matching App</h1>
            </div>
            <div className="mb-10 h-3/4 flex justify-center items-center">
              {pets === null ? (
                <>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </>
              ) : pets.animals.length ? (
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
              ) : (
                <h2 className="font-bold text-lg">No Matching!</h2>
              )}
            </div>
            <div className="text-center">
              <button className="w-52 text-5xl p-3 mb-20 rounded-2xl text-center font-fancy bg-gradient-to-r from-lime-500 to-lime-600">
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
