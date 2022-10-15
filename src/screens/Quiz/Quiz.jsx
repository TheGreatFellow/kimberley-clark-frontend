import "./Quiz.css";
import React, { useState } from "react";
import RashImage from "../../assets/images/rash.jpg";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "When is a baby's first diaper rash most likely to occur?",
      choices: [
        "1 to 3 weeks old",
        "1 to 6 months old",
        "7 to 12 months old",
        "13 to 24 months old",
      ],
      answer: 1,
    },
    {
      question: "What is the most common cause of diaper rash?",
      choices: [
        "Skin exposure to the pee and poo in a diaper",
        "Wet skin",
        "Diarrhea",
        "Skin reaction to a chemical",
      ],
      answer: 1,
    },
    {
      question: "What's the best way to prevent diaper rash?",
      choices: [
        "Change your baby's diaper every one to three hours and at least once a night",
        "Carefully clean his skin and apply a barrier cream with petroleum jelly or zinc-oxide after each change",
        "Let your baby have plenty of 'bare-bum' time",
        "All of the above",
      ],
      answer: 4,
    },
    {
      question: "Test your knowledge of barrier cream. Which answer is false?",
      choices: [
        "Petroleum jelly and zinc oxide cream help protect your baby’s skin from soiled diapers and from the friction caused by a wet diaper",
        "You do not need to wipe off all of the barrier cream with each change, only the soiled layer",
        "You should look for a barrier cream that contains vitamin A for your newborn",
        "You should not share diaper cream with other babies",
      ],
      answer: 3,
    },
    {
      picture: RashImage,
      question: "Name that rash: diaper rash or yeast infection",
      choices: ["Yeast infection", "Diaper rash"],
      answer: 1,
    },
    {
      question: "How long does the rash last?",
      choices: [
        "Maximum 3 days",
        "Maximum 6 days",
        "Maximum 9 days",
        "Maximum 12 days",
      ],
      answer: 1,
    },
  ];

  if (index === questions.length) {
    return (
      <div>
        <h1>{`Score: ${score}`}</h1>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <div className="quiz-top-container">
        <div className="quiz-header">
          <i className="fa-solid fa-xmark close"></i>
          <h1 className="quiz-title">Baby Skin Care</h1>
          <div className="empty"> </div>
          <div className="quiz-container">
            <img
              src="https://img.icons8.com/color/250/000000/cloud.png"
              className="cloud"
            />
            <img
              src="https://img.icons8.com/fluency/250/000000/sun.png"
              className="sun rotating"
            />
            <div className="quiz-top-container">
              <div className="quiz-header">
                <i className="fa-solid fa-xmark close"></i>
                <h1 className="quiz-title">Baby Skin Care</h1>
                <div className="empty"> </div>
              </div>
              <div className="progress-bar">
                <div className="progress"> </div>
              </div>
              <div className="quiz-question-container">
                <h1 className="question">
                  When is a baby's first diaper rash most likely to occur?
                </h1>
              </div>
            </div>

            <div className="options-container">
              <div className="option">1 to 3 weeks old</div>
              <div className="option">1 to 6 months old</div>
              <div className="option">1 to 6 months old</div>
              <div className="option selected">1 to 6 months old</div>
            </div>
            <button className="submit">Submit</button>
          </div>
          <div className="progress-bar">
            <div className="progress"> </div>
          </div>
          <div className="quiz-question-container">
            <h1 className="question">{questions[index].question}</h1>
          </div>
        </div>

        {questions[index].picture && (
          <img src={questions[index].picture} width="200px" height="200px" />
        )}

        <div className="options-container">
          {questions[index].choices.map((choice, i) => (
            <div
              key={i}
              className={`option ${selected == i ? "selected" : ""}`}
              onClick={() => {
                setSelected(i);
              }}
            >
              {choice}
            </div>
          ))}
        </div>
        <button
          className="submit"
          onClick={() => {
            if (selected !== null && questions[index].answer == selected + 1) {
              setScore(score + 1);
            }
            setIndex(index + 1);
            setSelected(null);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
