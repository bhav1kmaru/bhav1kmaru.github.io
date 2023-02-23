import { useTheme as useNextTheme } from "next-themes";
import { Button, Switch, Text, useTheme } from "@nextui-org/react";
import Bar from "./Bar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import Contact from "./Contact";
import next from "./next.svg";
import nextDark from "./nextDark.svg";
import bvk from './bvk.png'
import Image from "next/image";
import Link from "next/link";



const MainPage = () => {
  const {isDark}=useTheme()

  return (
    <div>
      <Bar />
      <About />
      <Projects />
      <Skills />
      <Stats />
      <Contact />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Text><img style={{height:"20px"}} src='https://em-content.zobj.net/source/microsoft-teams/337/heart-on-fire_2764-fe0f-200d-1f525.png' /> Built by Bhavik {"with "} </Text>
        <div>
          <Image height="10" src={isDark ? next : nextDark} />
        </div>
        <Text>&</Text>
        <Image
        className="App-logo"
          width="20"
          height="20"
          src="https://img.icons8.com/ultraviolet/48/null/react--v1.png"
          alt="react"
        />
        <Link href="https://github.com/bhav1kmaru/bhav1kmaru.github.io">
          {" "}
          | Source Code
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
