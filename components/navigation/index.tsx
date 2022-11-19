import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { RootState, setNavHeight, useDispatch, useSelector } from '../../redux';
import { Button, Container, Icon } from '../subComponents';
import Hamburger from './hamburger';
import { Logo, Menu, MenuItem, Nav } from './style';

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
								<MenuItem key={i}>{item.name}</MenuItem>
							)
						)}
					</Menu>
					<Button>DOWNLOAD CV</Button>
				</Container>
				<Hamburger />
			</Nav>
		</ThemeProvider>
	);
};

export default Navigation;
