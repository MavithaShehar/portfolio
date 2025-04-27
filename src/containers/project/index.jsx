import React from 'react';
import './styles.scss';
import Button from "../../componets/buttons/index";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import Headrs from '../../componets/headers/index';

import expo from "../../assets/imgs/expo.png";
import midwife from "../../assets/imgs/midwife.png";
import pos from "../../assets/imgs/pos.png";
import shoe from "../../assets/imgs/shoe.png";
import portfolio from "../../assets/imgs/portfolio.png";
import img06 from "../../assets/imgs/img06.jpeg";
import rsWeb from "../../assets/imgs/rsWeb.png";

function Projects() {
  const projectData = [
    {
      title: "IKMAN.LK CLONE",
      description: " A mobile e-commerce application featuring a shopping cart . Developed with React Native and Expo, utilizing CSS for responsive and engaging design.",
      image: expo,
      linke: "https://github.com/MavithaShehar/ikman-clone"
    },
    {
      title: "MID WIFE MANAGEMENT SYSTEM",
      description: "A comprehensive management system for midwives featuring user profiles, appointment scheduling, and patient management. Built using JavaFX for the front end and MySQL for data storage.",
      image: midwife,
      linke: "https://github.com/MavithaShehar/1st_sem_last_project_REBUILD_with_Layer_Architect"
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "A dynamic portfolio website to showcase projects, skills, and experience, built with React for interactivity, SCSS for styling, and Mail.js for email functionality.",
      image: portfolio,
      linke: "https://github.com/MavithaShehar/portfolio"
    }
    ,
    {
      title: "SKY SHOE",
      description: "An e-commerce platform for footwear built with JavaScript, HTML, CSS, and Bootstrap for the frontend, and Spring Boot with MySQL for the backend. It utilizes JWT for secure authentication.",
      image: shoe,
      linke: "https://github.com/MavithaShehar/SKY-SHOE-shope"
    }
    ,
    {
      title: "S M K FOOD CITY",
      description: "A restaurant management system built with Java EE for the backend and HTML, CSS, JavaScript, Bootstrap, and AJAX for a responsive frontend.",
      image: pos,
      linke: "https://github.com/MavithaShehar/internet_technology_Assignment_11-Back_End-with-Java_EE"
    }
    ,
    {
      title: "Rose jasmine E-comes WEB",
      description: "Rose Jasmine E-commerce web system created using the MERN stack and JWT authentication. It is an e-commerce website for selling flowers, cakes, and gifts.",
      image: rsWeb,
      linke: "https://github.com/MavithaShehar/Rose_Jasmine-Flower_Shop-web.git"
    }


  ];

  return (
    
    <div>
       <Headrs headerName="My Projects" />
    <div className='project-section'>
      {projectData.map((project, index) => (
        <div className='project-section__card__card-body' key={index}>
          <div
            className='project-section__card__card-body__img'
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
              height: "80%"
            }}
          ></div>
          <div className='project-section__card__card-body__info-body'>
            <div className='project-section__card__card-body__info-body__info'>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <div className='project-section__card__card-body__info-body__butn'>
              <a href={project.linke} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Projects;
