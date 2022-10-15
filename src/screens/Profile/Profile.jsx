import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (
    <div className="profile-container">
      <div className="profile-top-container">
        <div className="personal-details-container">
          <div className="details-container">
            <h1 className="name">Cherie</h1>
            <p className="username">@thegreatfellow</p>
            <p className="bio">
              Lorem ipsum deta ich. sic munde. Lorem ipsum deta ich. sic munde
            </p>
          </div>
          <Link to="/quiz/partner">
            <div className="profile-image-container">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
                alt=""
                className="profile-image"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="seperator"></div>
      <h1 className="heading">Statistics</h1>
      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon-container">
            <i className="logo fa-solid fa-bolt"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">1729</p>
            <p className="statistics-heading">Total XP</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-fire"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">3</p>
            <p className="statistics-heading">Streaks</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-trophy"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">5</p>
            <p className="statistics-heading">top 3 Finishes</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-skull-crossbones"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">21</p>
            <p className="statistics-heading">Partner surpass</p>
          </div>
        </div>
      </div>
      <h1 className="heading">Partner Stats</h1>
      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon-container">
            <i className="logo fa-solid fa-bolt"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">2109</p>
            <p className="statistics-heading">Total XP</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-fire"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">15</p>
            <p className="statistics-heading">Streaks</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-trophy"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">2</p>
            <p className="statistics-heading">top 3 Finishes</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-icon-container">
            <i class="logo fa-solid fa-skull-crossbones"></i>
          </div>
          <div className="stats-text-container">
            <p className="statistics-value">5</p>
            <p className="statistics-heading">Partner surpass</p>
          </div>
        </div>
      </div>
      <h1 className="heading">Achievements</h1>
      <div className="achievements-section">
        <div className="achievement-card">
          <div className="achievement-icon-container">
            <img
              src="https://assets.materialup.com/uploads/d2ab50e4-c3e2-4d4a-a702-d921050238b9/preview.png"
              alt="achievments"
              className="achievement-icon"
            />
          </div>
          <div className="achievement-text-container">
            <p className="achievement-name">First Win</p>
            <p className="achievement-description">Win your first quiz</p>
          </div>
        </div>
        <div className="achievement-card">
          <div className="achievement-icon-container">
            <img
              src="https://assets.materialup.com/uploads/d2ab50e4-c3e2-4d4a-a702-d921050238b9/preview.png"
              alt="achievments"
              className="achievement-icon"
            />
          </div>
          <div className="achievement-text-container">
            <p className="achievement-name">Wildfire</p>
            <p className="achievement-description">Reach 10 day streak</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
