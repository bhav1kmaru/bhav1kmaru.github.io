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
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import logo from './myMemoji.png'
import Image from "next/image";
import { PageContext } from "../contexts/PageContext";
import { BsDownload } from "react-icons/bs";



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
  const collapseItems = ["Home","About", "Projects", "Skills", "Stats", "Contact"];
  const { isDark, type } = useTheme();
  const {currentPage}=useContext(PageContext)
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
        <Navbar.Content>
          <Navbar.Link href="#home">
            <img
              style={{ height: "30px" }}
              src="https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png"
            />
            <Text
              css={{
                cursor: "pointer",
                "&:hover": {
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                },
              }}
            >
              Bhavik Maru
            </Text>
          </Navbar.Link>
        </Navbar.Content>
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
              // onClick={() => setCurrentPage(el.toLowerCase())}
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
            onClick={() => {
              window.location.href = `/#${item.toLowerCase()}`;
              window.location.reload();
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
