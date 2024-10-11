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
        <div className="nameAndProfileImg display: flex gap-2">
          <img src={profileImg} alt="" />
          <span>
            {userData.firstName} {userData.lastName}
          </span>
        </div>
       
      </div>
    </div>
  );
}

export default HomeApp;
