import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../services/firebase";
import { Navigate } from "react-router-dom";

const Landing = () => {
  // const navigate = useNavigate();
  const user = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    console.log(user);
    if (user) {
      setRedirect("/home");
    }
  }, [user]);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

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
