import { Button, Text, useTheme, css } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "../useMediaQuery";
import Link from "next/link";
import logo from './violeta.png'
import main from './main.png'

//4

const Violeta = () => {
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
            src={logo}
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
          <Text h2 css={{ marginTop: "20px" }}>
            Violeta
          </Text>
        </div>
        <div>
          <Image
            style={{ height: isMd ? "200px" : "300px", width: "auto" }}
            src={main}
            alt="main"
          />
        </div>
        <div style={{ width: isMd ? "100%" : "50%", margin: "auto" }}>
          <Text p css={{ textAlign: "center" }}>
            Violeta is an Indian online beauty and personal care platform. It
            offers a wide range of beauty and personal care products, including
            skincare, haircare, makeup, fragrances, and wellness items. The
            platform also provides personalized beauty services and fast
            shipping, ensuring a convenient shopping experience for its
            customers.
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
              src="https://img.icons8.com/ultraviolet/30/null/react--v1.png"
              alt="react"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
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
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              Chakra UI |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/null/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-color-tal-revivo.png"
              alt="node"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              Node.js |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ios/30/07373B/express-js.png"
              alt="express"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              Express |
            </Text>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/color/70/null/mongodb.png"
              alt="mongo"
            />
            <Text h3 style={{ display: isMd ? "none" : "" }}>
              MongoDB |
            </Text>
          </div>
        </div>
        {/* </motion.div> */}

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button
            as={Link}
            href="https://github.com/shivshankar0965/violeta"
            auto
            ghost
            color="gradient"
            target="_blank"
          >
            Source Code 🖥️
          </Button>
          <Button
            as={Link}
            href="https://violeta-app.netlify.app/"
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

export default Violeta;

// ReactJS |{" "}
//         <img src="https://img.icons8.com/color/30/null/chakra-ui.png" /> Chakra
//         UI | {" "}
//         <img src="https://img.icons8.com/external-soft-fill-juicy-fish/30/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png" />{" "}
//         JSON SERVER |
//         <img src="https://img.icons8.com/fluency/30/null/api-settings.png" />
//         REST API

{
  /* <img src='https://img.icons8.com/color/30/null/html-5--v1.png' /> HTML | <img src='https://img.icons8.com/color/30/null/css3.png' />
          CSS | <img src='https://img.icons8.com/color/30/null/javascript--v1.png' /> JavaScript */
}
