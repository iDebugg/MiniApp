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
        <div className="display: flex gap-2">
          <img src={profileImg} alt="" />
          <p>
            {userData.firstName} {userData.lastName}
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default HomeApp;
