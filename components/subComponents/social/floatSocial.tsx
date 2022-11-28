import React from 'react';
import styled from 'styled-components';
import { RootState, useSelector } from '../../../redux';
import { Container, Social } from '../index';

const FloatSocial = () => {
	const themeState = useSelector((state: RootState) => state.theme);

	const Wrapper = styled('div')`
		width: max-content;
		height: fit-content;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
	`;

	const SocialContainer = styled(Container)``;

	const Line = styled('div')`
		width: 50px;
		height: 4px;
		background: ${(props) => `rgb(${props.theme.color.primary})`};
	`;

	return (
		<Wrapper>
			<Line />
			<Social
				text={false}
				padding="0.8rem"
				borderRadius="5rem"
				bg={`rgb(${themeState.color.primary})`}
				color={`rgb(${themeState.color.white})`}
				hover={{
					bg: `rgb(${themeState.color.white})`,
					color: `rgb(${themeState.color.primary})`,
				}}
			/>
		</Wrapper>
	);
};

export default FloatSocial;
