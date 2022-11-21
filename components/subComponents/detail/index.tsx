import React from 'react';
import styled from 'styled-components';
import { Button } from '..';
import Icon from '../icon';

const Detail = ({
	title,
	description,
	icon,
	buttonText,
	width,
}: {
	icon?:
		| 'code'
		| 'menu'
		| 'menuClose'
		| 'home'
		| 'project'
		| 'contact'
		| 'facebook'
		| 'github'
		| 'skype'
		| 'google'
		| 'freelancer'
		| 'user'
		| 'web'
		| 'design'
		| 'app'
		| 'wordpress'
		| 'android'
		| 'ios'
		| 'email'
		| 'phone'
		| 'location';
	title?: string;
	description?: string;
	buttonText?: string;
	width?: string;
}) => {
	const Card = styled('div')`
		width: 100%;
		min-width: 100%;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);

		button {
			display: block;
			margin: 1rem auto 0 auto;
		}

		a {
			color: ${(props) => `rgb(${props.theme.color.primary})`};
			display: block;
			text-decoration: underline;
			cursor: pointer;
			text-align: center;
			margin: 1rem auto 0 auto;
		}
	`;

	const IconWrapper = styled('div')`
		width: max-content;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		display: flex;
		align-items: center;
		color: ${(props) => props.theme.color.text};
		font-size: ${(props) => props.theme.fontSize.xl};
		margin: 0 auto 0.5rem auto;
	`;

	const Title = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => props.theme.color.text};
		text-align: center;
		text-transform: uppercase;
	`;

	const Paragraph = styled('p')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => props.theme.color.textLight};
		margin-top: 0.5rem;
		text-align: center;

		@media (max-width: 600px) {
			font-size: ${(props) => props.theme.fontSize.sm};
		}
	`;

	return (
		<Card>
			{icon && (
				<IconWrapper>
					<Icon name={icon} />
				</IconWrapper>
			)}
			{title && <Title>{title}</Title>}
			{description && <Paragraph>{description}</Paragraph>}
			{buttonText && (
				<a
					href={'https://www.freelancer.com/u/mahadihasan0636'}
					target="_blank"
					rel="noreferrer"
				>
					{buttonText}
				</a>
			)}
		</Card>
	);
};

export default Detail;
