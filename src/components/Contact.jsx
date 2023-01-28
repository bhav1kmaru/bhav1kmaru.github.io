import { Button, Input, Loading, Spacer, Text, Textarea } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useMediaQuery } from './useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { PageContext } from '../contexts/PageContext';

const Contact = () => {
    const isMd = useMediaQuery(960);
    const {ref,inView}=useInView({threshold:0.1})
    const {setCurrentPage}=useContext(PageContext)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      if(inView){
        setCurrentPage("contact")
      }
    },[inView])
    const sendMessage=async(name,email,message)=>{
      setLoading(true)
      const send={name,email,message}
      let response = await fetch(
        `https://portfolioqueries.vercel.app/messages`,{
          method:"POST",
          body:JSON.stringify(send),
          headers:{
            "Content-Type":"application/json"
          }
        }
      );
      setLoading(false);
      let data=await response.json()
      console.log(data)
      
    }
  return (
    <div
      id="contact"
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        marginTop: "350px",
        border: isMd ? "0px" : "1px solid",
        marginBottom: "100px",
        padding: isMd ? "0px" : "20px",
      }}
      ref={ref}
    >
      <h1>Interested to work together? {"Let's"} talk</h1>
      <div
        style={{
          display: isMd ? "grid" : "flex",
          textAlign: "center",
          justifyContent: "center",
          gap: "30px",
          gridTemplateColumns: "1fr 1fr",
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
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            clearable
            labelPlaceholder="Name"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            clearable
            labelPlaceholder="Email"
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="xl"
            labelPlaceholder="Enter your message"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={() => sendMessage(name, email, message)}
            ghost
            rounded
            color="gradient"
          >
            {loading ? <Loading /> : "Send Message"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact