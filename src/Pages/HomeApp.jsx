import React from "react";
import { useUserContext } from "../Store/UserContext.jsx";
import "../Styles/HomeApp.css";
import profileImg from '../assets/img/9230383-newImage.webp'

function HomeApp() {
  const { userData } = useUserContext();

  return (
    <div className="homeAppScreen">
      <h5>SoftNote ™ </h5>
      <div className="userDetails">
        <div className="nameAndProfileImg display: flex gap-3">
          <img src={profileImg} alt="" />
          <span>
            {userData.firstName} {userData.lastName}
          </span>
        </div>
        <div className="ambassadorAndXpReward display: flex gap-5">
          <div className="ambassador">
            <h4>Ambassador   1/4 </h4>
            <hr />
          </div>
          <div className="reward">
            <h4>XP Reward</h4>
            <h5>400,345</h5>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default HomeApp;
