import React, { useContext, useEffect } from 'react'
import Tripster from './Tripster/Tripster';
import { motion } from "framer-motion";
import TripsterDashboard from './TripsterDashboard/TripsterDashboard';
import ApnaMall from './ApnaMall/ApnaMall';
import ApnaDashboard from './ApnaDashboard/apnaDashboard';
import TrackingTime from './TrackingTime/TrackingTime';
import { useInView } from 'react-intersection-observer';
import { PageContext } from '../contexts/PageContext';
import { Container } from '@nextui-org/react';
import { useTheme } from '@nextui-org/react';
import "@splidejs/splide/css/skyblue";

const Projects = () => {
   const { ref, inView } = useInView({threshold:0.1})
   const { setCurrentPage } = useContext(PageContext);
   const {theme}=useTheme()
   useEffect(()=>{
    if(inView){
      setCurrentPage("projects")
    }
   },[inView])
  return (
    <div
      id="projects"
      style={{
        marginTop: "350px",
        textAlign: "center",
        display: "grid",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: "50px",
          gap: "10px",
        }}
      >
        {" "}
        <h1>Projects</h1>
        <img
          src="https://em-content.zobj.net/source/microsoft-teams/337/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png"
          style={{ height: "70px" }}
        />
      </div>
      <div ref={ref} style={{ display: "grid", gap: "50px" }}>
        <Tripster />
        <TripsterDashboard />
        <ApnaMall />
        <ApnaDashboard />
        <TrackingTime />
      </div>
    </div>
  );
}

export default Projects