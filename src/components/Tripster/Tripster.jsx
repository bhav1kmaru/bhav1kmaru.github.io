import { Button, Text } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logo from './tripsterBag.png'
import { motion, useAnimation, useInView } from "framer-motion";
import tripsterMobile from './tripsterMobile.png'
import tripsterDesktop from './tripsterDesktop.png'
import tripsterTablet from './tripsterTablet.png'
import tripsterMain from './tripsterMain.png'
import hero from './hero.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from '../useMediaQuery';
import Link from 'next/link';
//4

const Tripster = () => {

  const isMd=useMediaQuery(960)
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
        // intial={{ width: 0 }}
        // animate={{ width: "80%" }}
        // exit={{ x: '100%' }}
        // initial={{x:'-100vw'}}
        animate={animation}
        // transition={{type:"spring",duration:1,bounce:0.3}}
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
          <Image src={logo} alt="logo" />
          <Text h2 css={{ marginTop: "20px" }}>
            Tripster
          </Text>
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
              src={tripsterMain}
              style={{ height: isMd ? "200px" : "auto" }}
              alt="Image 0"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              style={{ height: "300px", width: "152px" }}
              src={tripsterMobile}
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
              src={tripsterDesktop}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              style={{ height: isMd ? "200px" : "300px", width: "auto" }}
              src={tripsterTablet}
              alt="Image 3"
            />
          </SplideSlide>
        </Splide>
        <div style={{ width: isMd ? "100%" : "50%", margin: "auto" }}>
          <Text p css={{ textAlign: "start" }}>
            Tripster is an online travel website and mobile app with
            user-generated content and a comparison shopping website. It also
            offers online hotel reservations and bookings for transportation,
            lodging, travel experiences, and restaurants.
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
            href="https://github.com/bhav1kmaru/tripster"
            auto
            ghost
            color="gradient"
            target="_blank"
          >
            Source Code 🖥️
          </Button>
          <Button
            as={Link}
            href="https://tripster5891.netlify.app/"
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
}

export default Tripster

// ReactJS |{" "}
//         <img src="https://img.icons8.com/color/30/null/chakra-ui.png" /> Chakra
//         UI | {" "}
//         <img src="https://img.icons8.com/external-soft-fill-juicy-fish/30/null/external-json-microservices-soft-fill-soft-fill-juicy-fish.png" />{" "}
//         JSON SERVER |
//         <img src="https://img.icons8.com/fluency/30/null/api-settings.png" />
//         REST API