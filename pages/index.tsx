import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Contact, Intro, Project, Services } from '../components';
import { RootState, useSelector } from '../redux';

const HomePage = () => {
	const themeState = useSelector((store: RootState) => store.theme);
	const theme = themeState;
	const GlobalStyle = createGlobalStyle`
		body {
			overflow-x: hidden;
			transition: all 0.2s ease-in-out;
			background: ${theme.bg}
		}

		h1, h2, h3, h4, h5, h6{
			color: rgb(${themeState.color.black})
		}

		div, p, span {
			color: rgb(${themeState.color.black})
		}
	`;
	useEffect(() => {
		console.log(themeState);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Intro />
			<Services />
			<Project />
			<Contact />
		</ThemeProvider>
	);
};

export default HomePage;
