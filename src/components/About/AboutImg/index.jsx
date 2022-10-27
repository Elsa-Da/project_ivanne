import React from 'react';
import ProfilPic from '../../../assets/profil_pic.png';
import arrowAbout from '../../../assets/arrow_about.png';
import './aboutImg.scss'

function AboutImg({ onMenuClick }) {
    return (
        <div><img src={ProfilPic}
      onClick={onMenuClick} alt="Photo de présentation Ivanne" className="aboutImg"/>  <img src={arrowAbout} alt="fleche" className="aboutArrow" /></div>
   
  )
}

export default AboutImg