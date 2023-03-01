import React, { useContext, useEffect } from "react";
import { Box, Button, Container, Grid, Row, Text } from "@nextui-org/react";
import Bhavik from "./bhavik.png";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "./useMediaQuery";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageContext } from "../contexts/PageContext";
import { FaBeer } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  const isMd = useMediaQuery(960);
  const { ref, inView } = useInView();
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    if (inView) {
      setCurrentPage("home");
    }
  }, [inView]);
  return (
    <Grid.Container
      justify="center"
      css={{ marginTop: isMd ? "" : "90px", width: "70%", margin: "auto" }}
      direction={isMd ? "column" : "row"}
      // alignContent="center"
      // alignItems="center"
      id="home"
      gap={3}
      ref={ref}
    >
      <Grid>
        <motion.div
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Bhavik}
            alt="bhavik"
            style={{
              height: isMd ? "200px" : "300px",
              width: isMd ? "200px" : "300px",
            }}
          />
        </motion.div>
      </Grid>
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
              marginTop:"-60px"
            }}
          >
            <img
              style={{ height: "50px" }}
              src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png"
            />
            <br />
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
            An ambitious Full Stack Developer who is comfortable working with
            both front-end and back-end technologies. 1200+ hours of coding and
            hands-on experience in developing various Web-Apps and programs
            using Vanilla JavaScript and ReactJS. Looking forward to working as
            an accountable and competent employee in an exciting tech company.
          </Text>

          {/* <Text p style={{ marginTop: "50px" }}>
            An ambitious Full Stack Developer who is comfortable working with
            both front-end and back-end technologies. 1200+ hours of coding and
            hands-on experience in developing various Web-Apps and programs
            using Vanilla JavaScript and ReactJS. Looking forward to working as
            an accountable and competent employee in an exciting tech company.
          </Text> */}
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
          <Button
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
          </Button>
        </motion.div>
      </Grid>
    </Grid.Container>
  );
};

export default Home;

//https://drive.google.com/u/1/uc?id=1iBR5xvNA5VWReQdgMquWYTKOk4q5WAQK&export=download
