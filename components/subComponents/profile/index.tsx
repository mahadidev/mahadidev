import React from 'react';
import styled from 'styled-components';

const Profile = ({
	name,
	logo,
	link,
	borderRight,
}: {
	name: string;
	logo?: string;
	link?: string;
	borderRight?: string;
}) => {
	const Wrapper = styled('div')`
		width: max-content;
		padding: 4rem 8rem;
		text-align: center;
		transition: all 0.2s ease-out;
		cursor: pointer;
		${(props) =>
			borderRight &&
			`
			border-right: 1px solid rgb(${props.theme.color.primary});
		`}
		position: relative;
		z-index: 10;

		&:hover {
			background: ${(props) => `rgb(${props.theme.color.primary})`};
			color: ${(props) => `rgb(${props.theme.color.white})`};
		}

		&:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: ${(props) => `rgb(${props.theme.color.secondary})`};
			z-index: -1;
			opacity: 0;
			transition: all 0.2s ease-in-out;
		}

		&:hover:after {
			opacity: 1;
		}
	`;

	return <Wrapper>{name}</Wrapper>;
};

export default Profile;
