import React from 'react'
import {useUserContext } from "../src/Store/UserContext.jsx";
import "../Styles/HomeApp.css"

function HomeApp() {
  const { userData } = useUserContext();

  return (
    <div className='homeAppScreen'>
    <h2>User Profile</h2>
    <p>Username: {userData.username}</p>
    <p>First Name: {userData.firstName}</p>
    <p>Last Name: {userData.lastName}</p>
    {userData.profilePicUrl && <img src={userData.profilePicUrl} alt="Profile" />}

    </div>
  )
}

export default HomeApp