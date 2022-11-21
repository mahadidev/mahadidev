import React from 'react';
import styled from 'styled-components';

const Profile = ({
	name,
	logo,
	link,
}: {
	name: string;
	logo?: string;
	link?: string;
}) => {
	const Wrapper = styled('div')`
		width: max-content;
		padding: 4rem 8rem;
		text-align: center;
		transition: all 0.2s ease-out;
		cursor: pointer;
		border: 1px solid rgb(${(props) => props.theme.color.secondary});
		position: relative;
		z-index: 10;

		&:hover {
			background: ${(props) => `rgb(${props.theme.color.secondary})`};
			color: ${(props) => `rgb(${props.theme.color.white})`};
		}

		&:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: ${(props) => `rgb(${props.theme.color.primary})`};
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
