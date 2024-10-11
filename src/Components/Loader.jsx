import React from 'react'
import "../Styles/Loader.css"
import MASCOT from "../assets/img/MASCOT NORMAL.png"

function Loader() {
  return (
    <div className='loadingScreen'>
      <h5>SoftNote ™ </h5>
      <h4>-Rush By TECTUM-</h4>

      <img src={MASCOT} alt="" />
    </div>
  )
}

export default Loader