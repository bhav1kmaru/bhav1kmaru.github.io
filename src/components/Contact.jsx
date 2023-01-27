import { Text } from '@nextui-org/react';
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useMediaQuery } from './useMediaQuery';

const Contact = () => {
    const isMd = useMediaQuery(960);
  return (
    <div
      id="contact"
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h1>Interested to work together? {"Let's"} talk</h1>
      <div
        style={{
          display:isMd?"grid":"flex",
          textAlign: "center",
          justifyContent: "center",
          gap: "30px",
          gridTemplateColumns:"1fr 1fr"
        }}
      >
        <Link href="https://www.linkedin.com/in/bhavik-maru-9b52b31b9/">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
            style={{ cursor: "pointer" }}
          >
            <img src="https://img.icons8.com/fluency/70/null/linkedin.png" />
            <Text>LinkedIn</Text>
          </motion.div>
        </Link>
        <Link href="https://github.com/bhav1kmaru">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
            style={{ cursor: "pointer" }}
          >
            <img src="https://img.icons8.com/ios-filled/70/0078d4/github.png" />
            <Text>GitHub</Text>
          </motion.div>
        </Link>
        <Link href="mailto:bhavik.m01@gmail.com">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
            style={{ cursor: "pointer" }}
          >
            <img src="https://img.icons8.com/ios-filled/70/fcca3d/mail.png" />
            <Text>bhavik.m01@gmail.com</Text>
          </motion.div>
        </Link>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
          style={{ cursor: "pointer" }}
        >
          <img src="https://img.icons8.com/color/70/null/ringer-volume.png" />
          <Text>+91 9867513869</Text>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact