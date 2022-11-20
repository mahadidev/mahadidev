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
	icon:
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
		| 'ios';
	title: string;
	description: string;
	buttonText: string;
	width?: string;
}) => {
	const Card = styled('div')`
		width: 100%;
		min-width: 100%;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		transition: all 0.2s ease-in-out;

		&:hover {
			box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);
		}

		button {
			display: block;
			margin: 1rem auto 0 auto;
		}
	`;

	const IconWrapper = styled('div')`
		width: max-content;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background: ${(props) => `rgb(${props.theme.color.primary})`};
		display: flex;
		align-items: center;
		color: ${(props) => `rgb(${props.theme.color.white})`};
		font-size: ${(props) => props.theme.fontSize.xl};
		margin: 0 auto 0.5rem auto;
	`;

	const Title = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.lg};
		text-align: center;
	`;

	const Paragraph = styled('p')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => `rgb(${props.theme.color.black} / 70%)`};
		margin-top: 0.5rem;
		text-align: center;
	`;

	return (
		<Card>
			<IconWrapper>
				<Icon name={icon} />
			</IconWrapper>
			<Title>{title}</Title>
			<Paragraph>{description}</Paragraph>
			<Button>{buttonText}</Button>
		</Card>
	);
};

export default Detail;
