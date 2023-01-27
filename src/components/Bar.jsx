import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Switch,
  Button,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./NavbarIcons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from './Bar.module.css'
import Typewriter from "typewriter-effect";
import logo from './myMemoji.png'
import Image from "next/image";


// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";
//window?window.location.href.split('#')[1]==el.toLowerCase():false

const ThemeToggler = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Switch
      checked={isDark}
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      color="error"
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
    />
  );
};

export default function Bar() {
  const collapseItems = ["About", "Projects", "Skills", "Stats", "Contact"];
  const { isDark, type } = useTheme();
  const [currentPage,setCurrentPage]=useState("about")
  const router=useRouter()
  

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        {/* <Avatar
          bordered
          as="button"
          color="warning"
          size="md"
          src={logo}
        /> */}

        {/* <Typewriter
          options={{
            strings: ["Bhavik Maru","Bhavik Maru"],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <Text>Bhavik Maru</Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="default"
      >
        {/* <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link  href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link> */}
        {collapseItems.map((el) => (
          <>
            <Navbar.Link
              isActive={currentPage === el.toLowerCase()}
              href={`#${el.toLowerCase()}`}
              onClick={() => setCurrentPage(el.toLowerCase())}
            >
              {el}
            </Navbar.Link>
          </>
        ))}
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
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <ThemeToggler />
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            // css={{
            //   color: index === collapseItems.length - 1 ? "$error" : "",
            // }}
            // isActive={index === 2}
            isActive={currentPage == item.toLowerCase()}
            onClick={()=>{window.location.href=`/#${item.toLowerCase()}`
          window.location.reload()
          }}
          >
            {/* <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href='#'
              onClick={() => setCurrentPage(item.toLowerCase())}
            >
              {item}
            </Link> */}
            <Text>{item}</Text>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
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
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
