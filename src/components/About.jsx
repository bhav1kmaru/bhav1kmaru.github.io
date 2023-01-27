import React from 'react'
import {Box, Button, Container, Grid, Row, Text} from '@nextui-org/react'
import Bhavik from './bhavik.png'
import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import Typewriter from "typewriter-effect";
import { useMediaQuery } from './useMediaQuery'
import Link from 'next/link'
import { motion } from "framer-motion";

const About = () => {
  const isMd=useMediaQuery(960)
  return (
    <Grid.Container
      justify="center"
      css={{ marginTop:isMd?"": "150px", width: "70%", margin: "auto", }}
      direction={isMd ? "column" : "row"}
      // alignContent="center"
      // alignItems="center"
      id="about"
      gap={2}
    >
      <Grid css={{ width: isMd ? "100%" : "50%" }}>
        <Text
          h2
          css={{
            gap: "10px",
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          Hey folks, I am
          <Typewriter
            options={{
              strings: ["Bhavik Maru", "A Full Stack Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
        <Text p>
          An ambitious Full Stack Developer who is comfortable working with both
          front-end and back-end technologies. 1200+ hours of coding and
          hands-on experience in developing various Web-Apps and programs using
          Vanilla JavaScript and ReactJS. Looking forward to working as an
          accountable and competent employee in an exciting tech company.
        </Text>
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
          <Button
          auto
            flat
            as={Link}
            color="secondary"
            href="https://drive.google.com/u/1/uc?id=1iBR5xvNA5VWReQdgMquWYTKOk4q5WAQK&export=download"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1iBR5xvNA5VWReQdgMquWYTKOk4q5WAQK/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Resume
          </Button>
          <Button auto flat as={Link} href="#contact" color="gradient">
            Contact
          </Button>
        </motion.div>
      </Grid>

      <Grid>
        <Image
          src={Bhavik}
          alt="bhavik"
          style={{
            height: isMd ? "200px" : "300px",
            width: isMd ? "200px" : "300px",
          }}
        />
      </Grid>
    </Grid.Container>
  );
}

export default About