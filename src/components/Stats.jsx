import { useTheme } from '@nextui-org/react';
import React, { useContext, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar';
import { useInView } from 'react-intersection-observer';
import { PageContext } from '../contexts/PageContext';
import { useMediaQuery } from './useMediaQuery';

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
    <div
      id="stats"
      style={{
        textAlign: "center",
        width: "80%",
        margin: "auto",
        marginTop: "100px",
      }}
      ref={ref}
    >
      <h1>Stats</h1>
      <h2 style={{ marginTop: "50px" }}>My GitHub Stats</h2>
      <img
        src={`https://github-readme-stats-bhav1kmaru.vercel.app/api?username=bhav1kmaru&hide=prs&count_private=true&show_icons=true&theme=${statTheme}`}
      />
      <h2 style={{ marginTop: "50px" }}>Top Languages</h2>
      <img
        src={`https://github-readme-stats-bhav1kmaru.vercel.app/api/top-langs/?username=bhav1kmaru&hide=prs&count_private=true&show_icons=true&theme=${statTheme}`}
      />
      <h2 style={{ marginTop: "50px" }}>Current Streak</h2>
      <img
        src={`https://github-readme-streak-stats.herokuapp.com?user=bhav1kmaru&theme=${statTheme}`}
        alt="bhav1kmaru"
      />
      <h2 style={{ marginTop: "50px" }}>GitHub Calendar</h2>
      <div style={{ marginLeft: isMd ? "" : "300px" }}>
        <GitHubCalendar username="bhav1kmaru" color="secondary" />
      </div>
    </div>
  );
}

export default Stats