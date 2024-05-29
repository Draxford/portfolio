
import React from "react";
import { useState } from "react";
import './globals.css';
import Header from "./components/header";
import AboutMe from "./components/about_me";
import Projects from "./components/projects";
import CallToAction from "./components/call_to_action";
import Footer from "./components/footer";
import Image from 'next/image';



const HomePage: React.FC = () =>{
  return (
    <div className="row1">
      <div className="sectionProfile">
     <div> <h1 className="pj">Hola, soy <strong> Diego</strong> </h1>
      <p className="pj_content">Desarrollador Web Full Stack</p> </div>
      <div> <img src="/profile.jpeg" className="imgs" alt="" /> </div>
      </div>
      <div className="page1">
      <div className="column1"> <AboutMe/> </div>
     
      <div  className="column2">
        
       <div> <Projects /> </div>
        </div>
</div>
     <div className="row2"> 
      <div> <CallToAction/> </div>
      </div>
     
    </div> 
   
  );
};
export default HomePage;


/*   <Image src="/public/image0_0.jpg" alt="Logo" width={50} height={50} /> */