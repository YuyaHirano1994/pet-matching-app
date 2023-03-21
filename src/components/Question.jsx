import React, { useState } from "react";
import { Link } from "react-router-dom";

const Question = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked, setChecked] = useState(true);

  const disabledButton = "w-auto text-5xl p-5 rounded-2xl text-center font-fancy bg-zinc-500";
  const enabledButton =
    "w-auto text-5xl p-5 rounded-2xl text-center font-fancy bg-gradient-to-r from-lime-500 to-lime-600";
  const style = checked ? disabledButton : enabledButton;

  const questions = [
    {
      id: 1,
      title: "Gender?",
      options: ["Male", "Female"],
      key: "gender",
    },
    {
      id: 2,
      title: "Age?",
      options: ["Puppy", "Young", "Adult", "Senior"],
      key: "age",
    },
    {
      id: 3,
      title: "Size?",
      options: ["Small", "Medium", "Large", "Extra Large"],
      key: "size",
    },
    {
      id: 4,
      title: "Good with Children?",
      options: ["Yes", "Don't mind"],
      key: "children",
    },
    {
      id: 5,
      title: "coat?",
      options: ["short", "medium", "long", "wire", "hairless", "curly"],
      key: "hairLength",
    },
  ];

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
    setChecked(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setChecked(true);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2>{answers?.gender}</h2>
        <h2>{answers?.age}</h2>
        <h2>{answers?.size}</h2>
        <h2>{answers?.children}</h2>
        <h2>{answers?.hairLength}</h2>
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="block w-full text-center">
            <div className="sm:text-7xl text-5xl mb-20 font-title">
              <h1>Pet Matching App</h1>
            </div>
            <div className="sm:text-7xl text-5xl mb-5 font-question">
              <h2>{questions[currentQuestion].title}</h2>
            </div>
            <div className="mb-10 flex justify-center items-center font-question">
              <div className="grid gap-4 grid-cols-2 grid-rows-3">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option}>
                    <input
                      type="radio"
                      className="hidden peer"
                      id={option}
                      name={questions[currentQuestion].key}
                      value={option}
                      onChange={handleAnswerChange}
                    />
                    <label
                      htmlFor={option}
                      className="sm:w-80 w-52 block float-left sm:text-5xl text-3xl p-3 rounded-2xl text-center bg-zinc-500  cursor-pointer hover:bg-yellow-400 peer-checked:bg-yellow-400"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              {currentQuestion < questions.length - 1 ? (
                <button className={style} onClick={handleNextQuestion} disabled={checked}>
                  Next
                </button>
              ) : (
                <button className={style} onClick={() => console.log(answers)}>
                  <Link to={"/result"} state={{ state: answers }}>
                    Go to Result
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
