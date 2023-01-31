import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { RootState, setSidebar, useDispatch, useSelector } from "../../redux";
import { Button, Container, Icon } from "../subComponents";
import {
  HamburgerButtons,
  HamburgerIcon,
  HamburgerWrapper,
  Logo,
  Menu,
  MenuItem,
} from "./style";
import * as NextLink from "next/link";

const Hamburger = () => {
  const siteState = useSelector((store: RootState) => store.site);
  const themeState = useSelector((store: RootState) => store.theme);
  const dispatch = useDispatch();

  return (
    <HamburgerWrapper>
      <Container className="hamburger_container">
        <Logo>
          <Icon name="code" /> MAHADI DEV
        </Logo>
        <HamburgerIcon
          onClick={() => {
            dispatch(setSidebar(!siteState.isSidebar));
          }}
        >
          <Icon name={siteState.isSidebar ? "menuClose" : "menu"} />
        </HamburgerIcon>
      </Container>
      <motion.div
        className="sidebar"
        initial={{
          transform: siteState.isSidebar
            ? "translateX(0%)"
            : "translateX(100%)",
        }}
        animate={{
          transform: siteState.isSidebar
            ? "translateX(0%)"
            : "translateX(100%)",
        }}
      >
        <Menu hamburger={true}>
          {siteState.menu?.map(
            (
              item: {
                name: string;
                link: string;
                icon: string;
              },
              i: number
            ) => (
              <Link
                key={i}
                activeClass="active"
                to={item.name}
                spy={true}
                smooth={true}
                offset={-(siteState?.navHeight ? siteState?.navHeight : 100)}
                duration={500}
                onSetActive={() => {
                  dispatch(setSidebar(false));
                }}
              >
                <MenuItem>{item.name}</MenuItem>
              </Link>
            )
          )}
        </Menu>
        <HamburgerButtons>
          <NextLink.default href="./mahadidev.resume.pdf" target={"_blank"}>
            <Button
              bg={`rgb(${themeState.color.primary})`}
              color={`rgb(${themeState.color.white})`}
            >
              Download RESUME
            </Button>
          </NextLink.default>
        </HamburgerButtons>
      </motion.div>
    </HamburgerWrapper>
  );
};

export default Hamburger;
