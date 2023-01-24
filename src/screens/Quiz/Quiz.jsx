import "./Quiz.css";
import React, { useState, useEffect } from "react";
import RashImage from "../../assets/images/rash.jpg";
import successGif from "../../assets/images/success.gif";
import { Link } from "react-router-dom";
import {
  getRoomProgress,
  updateProgress,
  updateScore,
} from "../../services/firebase";
const Quiz = ({ roomId, playerType }) => {
  const [index, setIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [partnerScore, setPartnerScore] = useState(0);
  var widthP = (100 * index) / 6 + "%";
  var widthPP = (100 * partnerIndex) / 6 + "%";

  useEffect(() => {
    const unsubscribe = getRoomProgress(roomId, (snapshot) => {
      const data = snapshot.data();
      if (playerType === "partner") {
        setIndex(data.creatorProgress);
        setPartnerIndex(data.partnerProgress);
        setScore(data.creatorScore);
        setPartnerScore(data.partnerScore);
      } else {
        setIndex(data.partnerProgress);
        setPartnerIndex(data.creatorProgress);
        setScore(data.partnerScore);
        setPartnerScore(data.creatorScore);
      }
    });
    return unsubscribe;
  }, [roomId, playerType, index, partnerIndex, score, partnerScore]);

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
      <div className="success">
        <img src={successGif} alt="success" width="80%" />
        <h1>{`Your Score: ${score}`}</h1>
        <h1>{`Partner Score: ${partnerScore}`}</h1>
        <Link to="/home">
          <button className="submit">Continue</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="quiz-header">
      <div className="top-bar">
        <div className="avatar">
          <h1>🧑</h1>
          <p>Adam</p>
        </div>
        <h1 className="quiz-title">Baby Skin Care</h1>
        <div className="avatar">
          <h1>🧑</h1>
          <p>Eve</p>
        </div>
      </div>

      <div className="empty"> </div>
      <div className="progress-container">
        <h1>{`${index}/6`}</h1>
        <div className="progress-bar-left">
          <div className="progress-left" style={{ width: widthP }}></div>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: widthPP }}></div>
        </div>
        <h1>{`${partnerIndex}/6`}</h1>
      </div>
      <div className="empty"> </div>
      <div className="quiz-question-container">
        <h1 className="question">{questions[index].question}</h1>
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
            if (playerType === "partner") {
              updateScore(roomId, "creatorScore", score + 1);
            } else {
              updateScore(roomId, "partnerScore", score + 1);
            }
          }
          if (playerType === "partner") {
            updateProgress(roomId, "creatorProgress", index + 1);
          } else {
            updateProgress(roomId, "partnerProgress", index + 1);
          }
          setSelected(null);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;
