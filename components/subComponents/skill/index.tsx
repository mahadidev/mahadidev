import React from 'react';
import styled from 'styled-components';
import { Icon } from '../index';

const Skill = ({ name, icon }: { name: string; icon: any }) => {
	const Wrapper = styled('div')`
		background: ${(props) => `rgb(${props.theme.color.primary} / 20%)`};
		padding: 2rem 1rem;
		border-radius: 0.5rem;
		transition: all 0.2s ease;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);
		}
	`;

	const Name = styled('h2')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => `rgb(${props.theme.color.black} / 70%)`};
		text-align: center;
	`;

	const IconWrapper = styled('div')`
		width: max-content;
		font-size: ${(props) => props.theme.fontSize.lg};
		color: ${(props) => `rgb(${props.theme.color.black})`};
		margin: auto;
	`;
	return (
		<Wrapper>
			<IconWrapper>
				<Icon name={icon} />
			</IconWrapper>
			<Name>{name}</Name>
		</Wrapper>
	);
};

export default Skill;
