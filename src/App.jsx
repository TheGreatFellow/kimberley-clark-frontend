import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import Quiz from "./screens/Quiz";
import Games from "./screens/Games";
import Wordle from "./screens/Games/Wordle";
import Crossword from "./screens/Games/Crossword";
import Collect from "./screens/Games/Collect";
import Profile from "./screens/Profile";
import UserProvider from "./providers/UserProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/onboarding" element={<Onboarding />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/games">
              <Route index element={<Games />} />
              <Route path="wordle" element={<Wordle />} />
              <Route path="crossword" element={<Crossword />} />
              <Route path="collect" element={<Collect />} />
            </Route>
            <Route path="/quiz" element={<Quiz />}></Route>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
