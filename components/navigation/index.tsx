import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styled, { ThemeProvider } from "styled-components";
import { RootState, setNavHeight, useDispatch, useSelector } from "../../redux";
import { Button, Container, Icon } from "../subComponents";
import Hamburger from "./hamburger";
import { Logo, Menu, MenuItem, Nav } from "./style";
import * as NextLink from "next/link";

const Navigation = () => {
  const siteState = useSelector((store: RootState) => store.site);
  const themeState = useSelector((store: RootState) => store.theme);
  const theme = themeState;

  const dispatch = useDispatch();
  const navRef = useRef(null as null | HTMLDivElement);
  useEffect(() => {
    if (navRef.current) {
      dispatch(setNavHeight(navRef.current?.clientHeight));
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav ref={navRef}>
        <Container className="nav__container">
          <Logo>
            <Icon name="code" /> MAHADI DEV
          </Logo>
          <Menu>
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
                >
                  <MenuItem>{item.name}</MenuItem>
                </Link>
              )
            )}
          </Menu>
          <NextLink.default href="./resume.pdf" target={"_blank"}>
            <Button>DOWNLOAD RESUME</Button>
          </NextLink.default>
        </Container>
        <Hamburger />
      </Nav>
    </ThemeProvider>
  );
};

export default Navigation;
