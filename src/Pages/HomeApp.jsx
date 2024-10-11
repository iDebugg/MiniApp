import React from 'react'
import {useUserContext } from "../src/Store/UserContext.jsx";
import "../Styles/HomeApp.css"

function HomeApp() {
  const { userData } = useUserContext();

  return (
    <div className='homeAppScreen'>
    <p>{userData.firstName} {userData.lastName}</p>
    {userData.profilePicUrl && <img src={userData.profilePicUrl} alt="Profile" />}

    </div>
  )
}

export default HomeApp