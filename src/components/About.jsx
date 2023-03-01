import React, { useContext, useEffect } from 'react'
import {Box, Button, Container, Grid, Row, Text} from '@nextui-org/react'
import Bhavik from './bhavik.png'
import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import Typewriter from "typewriter-effect";
import { useMediaQuery } from './useMediaQuery'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { PageContext } from '../contexts/PageContext'
import { FaBeer } from "react-icons/fa";
import {BsDownload} from "react-icons/bs"
import aboutme from './about.png'

const About = () => {
  const isMd=useMediaQuery(960)
  const { ref, inView } = useInView();
  const {setCurrentPage}=useContext(PageContext)
  useEffect(()=>{
    if(inView){
      setCurrentPage("about")
    }
  },[inView])
  return (
    <Grid.Container
      justify="center"
      css={{ marginTop: isMd ? "" : "350px", width: "70%", margin: "auto" }}
      direction={isMd ? "column" : "row"}
      // alignContent="center"
      // alignItems="center"
      id="about"
      gap={2}
    >
      <Grid css={{ width: isMd ? "100%" : "50%" }}>
        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <Text
            h2
            css={{
              gap: "10px",
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
            About Me
          </Text>

          <Text p ref={ref}>
            As a MERN stack developer, my expertise lies in creating robust,
            dynamic, and scalable web applications using MongoDB, Express,
            React, and Node.js. With a strong foundation in front-end and
            back-end development, I specialize in building full-stack web
            applications with a focus on delivering exceptional user
            experiences. <br /> <br />
            In my portfolio, you will find examples of my work, including
            full-stack web applications that demonstrate my skills in front-end
            and back-end development, API integration, and database management.
            I am passionate about creating high-quality, user-friendly web
            applications that solve real-world problems and look forward to
            working with you on your next project.
          </Text>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{ display: "flex", gap: "10px", marginTop: "10px" }}
        >
          {/* <Button
            auto
            flat
            as={Link}
            color="secondary"
            href="https://drive.google.com/uc?export=download&id=1S5FN2i71HJzDNz48__EjI53F472zLVaT"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1S5FN2i71HJzDNz48__EjI53F472zLVaT/view?usp=sharing",
                "_blank"
              );
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <BsDownload />
              Resume
            </div>
          </Button>
          <Button auto flat as={Link} href="#contact" color="gradient">
            <img
              style={{ height: "30px" }}
              src="https://em-content.zobj.net/source/microsoft-teams/337/love-letter_1f48c.png"
            />
            Contact
          </Button> */}
        </motion.div>
      </Grid>
      <Grid>
        <motion.div
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <Image
            src={aboutme}
            alt="bhavik"
            style={{
              height: isMd ? "200px" : "400px",
              width: isMd ? "200px" : "400px",
            }}
          />
        </motion.div>
      </Grid>
    </Grid.Container>
  );
}

export default About


//https://drive.google.com/u/1/uc?id=1iBR5xvNA5VWReQdgMquWYTKOk4q5WAQK&export=download