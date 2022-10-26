import React from 'react';
import ProfilPic from '../../../assets/profil_pic.png';
import './aboutImg.scss'

function AboutImg({ onMenuClick }) {
    return (
        <img src={ProfilPic}
      onClick={onMenuClick} alt="Photo de présentation Ivanne" className="aboutImg"/>
   
  )
}

export default AboutImg