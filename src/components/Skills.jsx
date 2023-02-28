import { Card, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react'
import next from "./next.svg";
import nextDark from "./nextDark.svg";
import {motion} from 'framer-motion'
import { useMediaQuery } from './useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { PageContext } from '../contexts/PageContext';


const Skills = () => {
    const {isDark}=useTheme()
    const isMd = useMediaQuery(960);
    const frontEnd = [
      {
        title: "HTML",
        icon: "https://img.icons8.com/color/70/null/html-5--v1.png",
      },
      {
        title: "CSS",
        icon: "https://img.icons8.com/color/70/null/css3.png",
      },
      {
        title: "JavaScript",
        icon: "https://img.icons8.com/color/70/null/javascript--v1.png",
      },
      {
        title: "ReactJS",
        icon: "https://img.icons8.com/office/70/null/react.png",
      },
      {
        title: "TypeScript",
        icon: "https://img.icons8.com/fluency/70/null/typescript--v2.png",
      },
      {
        title: "Redux",
        icon: "https://img.icons8.com/color/70/null/redux.png",
      },
      {
        title: "NextJS",
        icon: isDark?next:nextDark,
      },
      {
        title: "Bootstrap",
        icon: "https://img.icons8.com/color/70/null/bootstrap.png",
      },
      {
        title: "Chakra UI",
        icon: "https://img.icons8.com/color/70/null/chakra-ui.png",
      },
      {
        title: "Rest API",
        icon: "https://img.icons8.com/material-outlined/70/07373B/api-settings.png",
      },
      {
        title: "Material UI",
        icon: "https://img.icons8.com/color/70/null/material-ui.png",
      },
    ];
    const backEnd = [
      {
        title: "Node.js",
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/70/null/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-color-tal-revivo.png",
      },
      {
        title: "Express.js",
        icon: "https://img.icons8.com/ios/70/07373B/express-js.png",
      },
      {
        title: "MongoDB",
        icon: "https://img.icons8.com/color/70/null/mongodb.png",
      },
    ];
    const {ref,inView}=useInView({threshold:0.5})
    const {setCurrentPage}=useContext(PageContext)

    useEffect(()=>{
      if(inView){
        setCurrentPage("skills")
      }
    },[inView])
  return (
    <motion.div
      style={{
        textAlign: "center",
        width: "80%",
        margin: "auto",
        marginTop: "100px",
      }}
      id="skills"
      ref={ref}
      whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
      transition={{ duration: 1 }}
    >
      <h1>Skills,Languages & Tools</h1>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginTop: "50px" }}>Front-End</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd
              ? "1fr 1fr 1fr"
              : "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
        >
          {frontEnd.map((el) => (
            <motion.div
              key={el.title}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray",
              }}
              style={{ cursor: "pointer" }}
            >
              <Image src={el.icon} alt={el.title} width="70" height="70" />
              <Text>{el.title}</Text>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginTop: "50px" }}>Back-End</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {backEnd.map((el) => (
            <motion.div
              key={el.title}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray",
              }}
              style={{ cursor: "pointer" }}
            >
              <Image src={el.icon} alt={el.title} width="70" height="70" />
              <Text>{el.title}</Text>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginTop: "50px" }}>Tools</h2>
        <div style={{ marginTop: "40px",display:"grid",gap:"20px",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr" }} align="center">
          <img
            src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
            align="center"
            alt="git"
          />
          <img
            src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
            align="center"
            alt="git"
          />
          <img
            src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=whit"
            align="center"
            alt="git"
          />
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            align="center"
            alt="github"
          />
          <img
            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
            align="center"
            alt="postman"
          />
          <img
            src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
            align="center"
            alt="npm"
          />
          <img
            src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"
            align="center"
            alt="vscode"
          />
          <br />
          <br />
          <img
            src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"
            align="center"
            alt="slack"
          />
          <img
            src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"
            align="center"
            alt="storybook"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills