import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import Bar from "./Bar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import Contact from "./Contact";


const MainPage = () => {


  return (
    <div>
      <Bar />
      <About />
      <Projects />
      <Skills />
      <Stats />
      <Contact />
    </div>
  );
};

export default MainPage;
