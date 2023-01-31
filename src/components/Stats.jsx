import { useTheme } from '@nextui-org/react';
import React, { useContext, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar';
import { useInView } from 'react-intersection-observer';
import ReactTooltip from 'react-tooltip';
import { PageContext } from '../contexts/PageContext';
import { useMediaQuery } from './useMediaQuery';
import { motion } from "framer-motion";

const Stats = () => {
    const {isDark}=useTheme()
    const statTheme=isDark?'dark':"light"
    const isMd = useMediaQuery(960);
    const {ref,inView}=useInView({threshold:0.3})
    const {setCurrentPage}=useContext(PageContext)
    useEffect(()=>{
      if(inView){
        setCurrentPage("stats")
      }
    },[inView])
  
  return (
    <motion.div
      id="stats"
      style={{
        textAlign: "center",
        width: "80%",
        margin: "auto",
        marginTop: "100px",
      }}
      ref={ref}
      whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
      transition={{ duration: 1 }}
    >
      <h1>Stats</h1>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
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
          <h2>GitHub Stats</h2>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/star_2b50.png"
            style={{ height: "45px" }}
          />
        </div>
        <img
          src={`https://github-readme-stats-bhav1kmaru.vercel.app/api?username=bhav1kmaru&hide=prs&count_private=true&show_icons=true&theme=${statTheme}`}
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
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
          <h2>Top Languages</h2>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/bar-chart_1f4ca.png"
            style={{ height: "45px" }}
          />
        </div>
        <img
          src={`https://github-readme-stats-bhav1kmaru.vercel.app/api/top-langs/?username=bhav1kmaru&hide=prs&count_private=true&show_icons=true&theme=${statTheme}`}
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
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
          <h2>Current Streak</h2>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/fire_1f525.png"
            style={{ height: "45px" }}
          />
        </div>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=bhav1kmaru&theme=${statTheme}`}
          alt="bhav1kmaru"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
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
          <h2>GitHub Calendar</h2>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/spiral-calendar_1f5d3-fe0f.png"
            style={{ height: "45px" }}
          />
        </div>
        <div className="calendar">
          <GitHubCalendar
            username="bhav1kmaru"
            style={{ margin: "auto" }}
            blockSize={12}
            fontSize={15}
            blockMargin={8}
          >
            {" "}
            <div>
              <ReactTooltip delayShow={20} html />
            </div>
          </GitHubCalendar>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Stats