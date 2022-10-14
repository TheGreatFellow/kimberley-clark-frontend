import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../services/firebase";

const Landing = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div>Landing(Will contain some intro about the site as well)</div>
      <button className="login-button" onClick={signInWithGoogle}>
        Login
      </button>
    </>
  );
};

export default Landing;
