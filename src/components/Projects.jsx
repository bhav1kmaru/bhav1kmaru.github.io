import React from 'react'
import Tripster from './Tripster/Tripster';
import { motion } from "framer-motion";
import TripsterDashboard from './TripsterDashboard/TripsterDashboard';
import ApnaMall from './ApnaMall/ApnaMall';
import ApnaDashboard from './ApnaDashboard/apnaDashboard';
import TrackingTime from './TrackingTime/TrackingTime';

const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        marginTop: "100px",
        textAlign: "center",
        display: "grid",
        gap: "50px",
      }}
    >
      <h1>Projects</h1>
        <Tripster />
        <TripsterDashboard />
        <ApnaMall />
        <ApnaDashboard />
        <TrackingTime />
    </div>
  );
}

export default Projects