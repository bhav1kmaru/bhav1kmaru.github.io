import { Button, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "../useMediaQuery";
import Link from "next/link";
import logo from "./apnaLogoFinal.png";
import apnaDashboardMain from './apnaDashboardMain.png';
import apnaDashboardDesktop from './apnaDashboardDesktop.png';
import apnaDashboardMobile from './apnaDashboardMobile.png'
import apnaDashboardTablet from './apnaDashboardTablet.png'

//4

const ApnaDashboard = () => {
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
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={logo} alt="logo" />
            <Text h1>Dashboard/Admin Panel</Text>
          </div>
          <div style={{ width: isMd ? "100%" : "50%", margin: "auto" }}>
            <Text p css={{ textAlign: "center" }}>
              Dashboard/Admin Panel of an e-commerce website with features like
              Sales/Revenue Monitoring, Adding/Deleting Products and Getting
              order updates.
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
                width="48"
                height="48"
                src="https://img.icons8.com/ultraviolet/48/null/react--v1.png"
                alt="react"
              />
              <Text h3 style={{ display: isMd ? "none" : "" }}>
                ReactJS |
              </Text>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/null/material-ui.png"
                alt="material"
              />
              <Text h3 style={{ display: isMd ? "none" : "" }}>
                Material UI |
              </Text>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/external-soft-fill-juicy-fish/48/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png"
                alt="json"
              />
              <Text h3 style={{ display: isMd ? "none" : "" }}>
                JSON Server |
              </Text>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/null/api-settings.png"
                alt="api"
              />
              <Text h3 style={{ display: isMd ? "none" : "" }}>
                Rest API
              </Text>
            </div>
          </div>
        </motion.div>
        <div>
          <Splide options={{ rewind: true, interval: 3000, loop: true }}>
            <SplideSlide>
              <Image
                src={apnaDashboardMain}
                style={{ height: isMd ? "200px" : "auto" }}
                alt="Image 0"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                style={{ height: "300px", width: "auto" }}
                src={apnaDashboardMobile}
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
                src={apnaDashboardDesktop}
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                style={{ height: isMd ? "200px" : "300px", width: "auto" }}
                src={apnaDashboardTablet}
                alt="Image 3"
              />
            </SplideSlide>
          </Splide>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button
            as={Link}
            href="https://github.com/bhav1kmaru/apnamalldashboard"
            auto
            ghost
            color="gradient"
          >
            Source Code 🖥️
          </Button>
          <Button
            as={Link}
            href="https://apnamalldashboard.netlify.app/"
            auto
            ghost
            color="gradient"
          >
            Live Demo 🚀
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ApnaDashboard;

// ReactJS |{" "}
//         <img src="https://img.icons8.com/color/48/null/chakra-ui.png" /> Chakra
//         UI | {" "}
//         <img src="https://img.icons8.com/external-soft-fill-juicy-fish/48/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png" />{" "}
//         JSON SERVER |
//         <img src="https://img.icons8.com/fluency/48/null/api-settings.png" />
//         REST API
