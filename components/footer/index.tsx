import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { RootState, useSelector } from '../../redux';
import { Container, Social } from '../subComponents';

const Footer = () => {
	const themeState = useSelector((store: RootState) => store.theme);

	const Wrapper = styled('div')`
		width: 100%;
		padding: 1rem 0;
		background: ${(props) => `rgb(${props.theme.color.purple})`};
		color: ${(props) => props.theme.color.text};
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	`;

	const CopyRightText = styled('p')`
		width: 100%;
		color: ${(props) => `rgb(${props.theme.color.white} / 80%)`};
	`;

	return (
		<ThemeProvider theme={themeState}>
			<Wrapper>
				<Container>
					<CopyRightText>All Right reversed by Mahadi Hasan</CopyRightText>
					<Social
						bg={'none'}
						padding={'0.5rem'}
						color={`rgb(${themeState.color.white} / 80%)`}
						text={false}
					/>
				</Container>
			</Wrapper>
		</ThemeProvider>
	);
};

export default Footer;
