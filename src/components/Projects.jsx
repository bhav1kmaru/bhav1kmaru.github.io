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
      <h1>Projects</h1>
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