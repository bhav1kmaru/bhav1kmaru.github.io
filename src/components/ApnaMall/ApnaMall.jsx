import { Button, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "../useMediaQuery";
import Link from "next/link";
import logo from './apnaLogoFinal.png'
import apnaMallDesktop from "./apnaMallDesktop.png"
import apnaMallMobile from "./apnaMallMobile.png"
import apnaMallTablet from "./apnaMallTablet.png"
import apnaMallMain from "./apnaMallMain.png"
import hero from './hero.png'
import next from './next.svg'
import nextDark from './nextDark.svg'
//4

const ApnaMall = () => {
  const isMd = useMediaQuery(960);
  const {isDark}=useTheme()
const ref = useRef(null);
const isInView = useInView(ref);
const animation = useAnimation();

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 360,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

useEffect(() => {
  if (isInView) {
    animation.start({
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    });
  }
  if (!isInView) {
    animation.start({ x: "-100vw" });
  }
  console.log("isInView", isInView);
}, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          textAlign: "center",
          display: "grid",
          gap: "20px",
          border: isMd ? "none" : "1px solid",
          padding: isMd ? "none" : "10px",
          borderRadius: "20px",
          width: isMd ? "100%" : "80%",
          margin: "auto",
        }}
        // initial={cardVariants.offscreen}
        // whileInView={cardVariants.onscreen}
        // viewport={{ once: true, amount: 0.8 }}
        animate={animation}
      >
        {/* <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        > */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: "60px", width: "120px" }}
            src={logo}
            alt="logo"
          />
        </div>
        <Splide options={{ rewind: true, interval: 3000, loop: true }}>
          <SplideSlide>
            <Image
              src={hero}
              style={{ height: isMd ? "200px" : "300px", width: "auto" }}
              alt="Image 0"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={apnaMallMain}
              style={{ height: isMd ? "200px" : "auto" }}
              alt="Image 0"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              style={{ height: "300px", width: "auto" }}
              src={apnaMallMobile}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              style={{
                height: isMd ? "200px" : "300px",
                width: "auto",
                margin: "auto",
              }}
              src={apnaMallDesktop}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              style={{ height: isMd ? "200px" : "300px", width: "auto" }}
              src={apnaMallTablet}
              alt="Image 3"
            />
          </SplideSlide>
        </Splide>
        <div style={{ width: isMd ? "100%" : "50%", margin: "auto" }}>
          <Text p css={{ textAlign: "start" }}>
            Apna Mall is an e-commerce website that allows users to shop for a
            wide range of products online. The website offers a vast collection
            of products, including electronics, fashion, home and kitchen
            appliances, beauty and personal care items, and more.
          </Text>
        </div>
        <div
          style={{
            alignItems: "center",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Text h3 style={{ display: isMd ? "none" : "" }}>
            Tech Stack :
          </Text>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="40"
              height="35"
              src={isDark ? next : nextDark}
              alt="next"
            />
            <Text h4 style={{ display: isMd ? "none" : "" }}>
              |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ultraviolet/30/null/react--v1.png"
              alt="react"
            />
            <Text h4 style={{ display: isMd ? "none" : "" }}>
              ReactJS |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/null/chakra-ui.png"
              alt="chakra"
            />
            <Text h4 style={{ display: isMd ? "none" : "" }}>
              Chakra UI |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/external-soft-fill-juicy-fish/30/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png"
              alt="json"
            />
            <Text h4 style={{ display: isMd ? "none" : "" }}>
              JSON Server |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/null/api-settings.png"
              alt="api"
            />
            <Text h4 style={{ display: isMd ? "none" : "" }}>
              Rest API
            </Text>
          </div>
        </div>
        {/* </motion.div> */}
        <div></div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button
            as={Link}
            href="https://github.com/bhav1kmaru/apnaMall"
            auto
            ghost
            color="gradient"
            target="_blank"
          >
            Source Code 🖥️
          </Button>
          <Button
            as={Link}
            href="https://apnamall.vercel.app/"
            auto
            ghost
            color="gradient"
            target="_blank"
          >
            Live Demo{" "}
            <img
              style={{ height: "20px" }}
              src="https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png"
            />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ApnaMall;

// ReactJS |{" "}
//         <img src="https://img.icons8.com/color/30/null/chakra-ui.png" /> Chakra
//         UI | {" "}
//         <img src="https://img.icons8.com/external-soft-fill-juicy-fish/30/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png" />{" "}
//         JSON SERVER |
//         <img src="https://img.icons8.com/fluency/30/null/api-settings.png" />
//         REST API
