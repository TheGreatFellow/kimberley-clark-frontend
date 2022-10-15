import React from "react";
import { Link } from "react-router-dom";
import "./Onboarding.css";
const Onboarding = () => {
  return (
    <div>
      <h1 className="welcome">Complete your profile</h1>
      <div className="input-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Gender" />
        <input type="text" placeholder="Partner's username" />
        <input type="text" placeholder="Baby's Age" />
        <div className="toggle-container">
          <p className="q">First time parent?</p>
          <div class="toggle-button-cover">
            <div class="button-cover">
              <div class="button r" id="button-3">
                <input type="checkbox" class="checkbox" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
          <Link to="/collect">
            <button className="submit">Submit</button>
          </Link>
        </div>
      </div>
      <Link to="/home">
        <button
          className="submit"
          onClick={() => {
            fetch("http://localhost:3000/postUserProfile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                uid: "123",
                name: "test",
                username: "test",
                age: "test",
                firstTimeParent: "test",
                motherOrFather: "test",
                partnerUsername: "test",
                genderOfBaby: "test",
                ageOfBaby: "test",
              }),
            }).then((data) => {
              console.log(data);
            });
          }}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Onboarding;
