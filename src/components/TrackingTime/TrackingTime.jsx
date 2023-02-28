import { Button, Text, useTheme,css } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "../useMediaQuery";
import Link from "next/link";
import main from './trackingTime.gif'


//4

const TrackingTime = () => {
  const isMd = useMediaQuery(960);
  const { isDark } = useTheme();

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
            src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
            alt="logo"
            height="100"
            width="300"
          />
        </div>
        <div>
          <Image
            style={{ height: "auto", width: "auto" }}
            src={main}
            alt="main"
          />
        </div>
        <div style={{ width: isMd ? "100%" : "50%", margin: "auto" }}>
          <Text p css={{ textAlign: "start" }}>
            TrackingTime is a web-based time tracking and productivity tool
            designed to help individuals and teams manage their work hours,
            projects, and tasks. With TrackingTime, users can easily monitor and
            record their time spent on various activities, and generate detailed
            reports and analytics to analyze their productivity and progress.
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
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/null/html-5--v1.png"
              alt="html"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              HTML |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/null/css3.png"
              alt="css"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              CSS |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/null/javascript--v1.png"
              alt="js"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              JavaScript
            </Text>
          </div>
        </div>
        {/* </motion.div> */}

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button
            as={Link}
            href="https://github.com/bhav1kmaru/trackingTime"
            auto
            ghost
            color="gradient"
            target="_blank"
          >
            Source Code 🖥️
          </Button>
          <Button
            as={Link}
            href="https://sunny-salamander-51a37f.netlify.app/index.html"
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

export default TrackingTime;

// ReactJS |{" "}
//         <img src="https://img.icons8.com/color/30/null/chakra-ui.png" /> Chakra
//         UI | {" "}
//         <img src="https://img.icons8.com/external-soft-fill-juicy-fish/30/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png" />{" "}
//         JSON SERVER |
//         <img src="https://img.icons8.com/fluency/30/null/api-settings.png" />
//         REST API

{/* <img src='https://img.icons8.com/color/30/null/html-5--v1.png' /> HTML | <img src='https://img.icons8.com/color/30/null/css3.png' />
          CSS | <img src='https://img.icons8.com/color/30/null/javascript--v1.png' /> JavaScript */}