import React, { useContext, useEffect } from 'react'
import Tripster from './Tripster/Tripster';
import { motion } from "framer-motion";
import TripsterDashboard from './TripsterDashboard/TripsterDashboard';
import ApnaMall from './ApnaMall/ApnaMall';
import ApnaDashboard from './ApnaDashboard/apnaDashboard';
import TrackingTime from './TrackingTime/TrackingTime';
import { useInView } from 'react-intersection-observer';
import { PageContext } from '../contexts/PageContext';

const Projects = () => {
   const { ref, inView } = useInView({threshold:0.1})
   const { setCurrentPage } = useContext(PageContext);
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
      <div ref={ref}>
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