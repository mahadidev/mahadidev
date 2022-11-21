import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Info = ({
	title,
	value,
	icon,
}: {
	title: string;
	value?: string;
	icon?: string | ReactElement;
}) => {
	const Title = styled('h2')`
		color: ${(props) => props.theme.color.textLight};
		font-size: ${(props) => props.theme.fontSize.sm};
		text-align: center;

		@media (max-width: 390px) {
			font-size: ${(props) => props.theme.fontSize.xm};
		}
	`;

	const Description = styled('div')`
		color: ${(props) => props.theme.color.text};
		font-size: ${(props) => props.theme.fontSize.lg};
		text-align: center;
		font-weight: bold;
	`;

	const IconWrapper = styled('div')`
		width: max-content;
		margin: 0 auto 0.5rem auto;
		padding: 0.8rem;
		background: red;
		font-size: ${(props) => props.theme.fontSize.lg};
		display: flex;
		align-items: center;
		border-radius: 100%;
		color: ${(props) => `rgb(${props.theme.color.white})`};
		background: ${(props) => `rgb(${props.theme.color.primary})`};
	`;

	const Card = styled('div')`
		height: max-content;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		overflow: hidden;
		padding: 0.9rem 1rem;
		position: relative;
		border-radius: 0.5rem;
		transition: all 0.2s ease-in-out;

		&:hover {
			background: ${(props) => `rgb(${props.theme.color.secondary})`};
		}

		&:hover ${IconWrapper} {
			background: ${(props) => `rgb(${props.theme.color.white})`};
			color: ${(props) => `rgb(${props.theme.color.primary})`};
		}

		&:hover ${Title} {
			color: ${(props) => `rgb(${props.theme.color.white})`};
		}

		&:hover ${Description} {
			color: ${(props) => `rgb(${props.theme.color.white})`};
		}
	`;

	const Effect = styled('div')`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const effectElm = (
		<Effect>
			<svg
				width="218"
				height="109"
				style={{ marginLeft: 'auto' }}
				viewBox="0 0 218 109"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					opacity="0.05"
					cx="156.5"
					cy="-47.5"
					r="156.5"
					fill="white"
				></circle>
				<circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
			</svg>
			<svg
				width="23"
				height="32"
				viewBox="0 0 23 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="21.262"
					cy="1.12081"
					r="1.12081"
					transform="rotate(90 21.262 1.12081)"
					fill="white"
				></circle>
				<circle
					cx="21.262"
					cy="30.4863"
					r="1.12081"
					transform="rotate(90 21.262 30.4863)"
					fill="white"
				></circle>
				<circle
					cx="1.76005"
					cy="1.12081"
					r="1.12081"
					transform="rotate(90 1.76005 1.12081)"
					fill="white"
				></circle>
				<circle
					cx="1.76005"
					cy="30.4863"
					r="1.12081"
					transform="rotate(90 1.76005 30.4863)"
					fill="white"
				></circle>
				<circle
					cx="11.6228"
					cy="1.12081"
					r="1.12081"
					transform="rotate(90 11.6228 1.12081)"
					fill="white"
				></circle>
				<circle
					cx="11.6228"
					cy="30.4863"
					r="1.12081"
					transform="rotate(90 11.6228 30.4863)"
					fill="white"
				></circle>
				<circle
					cx="21.262"
					cy="10.9839"
					r="1.12081"
					transform="rotate(90 21.262 10.9839)"
					fill="white"
				></circle>
				<circle
					cx="1.76005"
					cy="10.9839"
					r="1.12081"
					transform="rotate(90 1.76005 10.9839)"
					fill="white"
				></circle>
				<circle
					cx="11.6228"
					cy="10.9839"
					r="1.12081"
					transform="rotate(90 11.6228 10.9839)"
					fill="white"
				></circle>
				<circle
					cx="21.262"
					cy="20.8469"
					r="1.12081"
					transform="rotate(90 21.262 20.8469)"
					fill="white"
				></circle>
				<circle
					cx="1.76005"
					cy="20.8469"
					r="1.12081"
					transform="rotate(90 1.76005 20.8469)"
					fill="white"
				></circle>
				<circle
					cx="11.6228"
					cy="20.8469"
					r="1.12081"
					transform="rotate(90 11.6228 20.8469)"
					fill="white"
				></circle>
			</svg>
		</Effect>
	);

	return (
		<Card>
			{/* {icon && <IconWrapper>{icon}</IconWrapper>} */}
			<Title>{title}</Title>
			<Description>{value}</Description>
			{effectElm}
		</Card>
	);
};

export default Info;
