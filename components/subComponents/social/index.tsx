import React from 'react';
import styled from 'styled-components';
import { RootState, useSelector } from '../../../redux';
import Icon from '../icon';

const Social = ({
	text = true,
	margin,
	width,
	padding,
	bg,
	color,
	borderRadius,
	hover,
}: {
	text?: boolean;
	margin?: string;
	width?: string;
	padding?: string;
	bg?: string;
	color?: string;
	borderRadius?: string;
	hover?: {
		bg: string;
		color: string;
	};
}) => {
	const siteState = useSelector((state: RootState) => state.site);

	const Wrapper = styled('div')`
		${
			width &&
			`
            width: ${width};
        `
		}
		max-width: 100%;
		display: flex;
		${width && `justify-content: space-between;`}
		gap: 0.5rem;
		flex-wrap: wrap;
		margin: ${margin};

		@media (max-width: 600px) {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr)); minmax(0, 1fr);
			justify-content: start;
		}
	`;

	const Item = styled('a')`
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: ${padding ? padding : '0.7rem'};
		background: ${(props) => (bg ? bg : `rgb(${props.theme.color.white})`)};
		color: ${(props) =>
			color ? color : `rgb(${props.theme.color.primary} / 70%)`};
		border-radius: ${borderRadius ? borderRadius : '0.5rem'};
		cursor: pointer;
		transition: all 0.2s ease-out;
		font-weight: bold;

		svg {
			font-size: ${(props) => props.theme.fontSize.lg};
		}

		${hover &&
		`
			&:hover {
				background: ${hover.bg};
				color: ${hover.color}
			}
		`}
	`;

	return (
		<Wrapper>
			{siteState?.social.map((item: any, i: number) => (
				<Item key={i} href={item.link} target="_blank">
					<Icon name={item.icon} /> {text && item.name}
				</Item>
			))}
		</Wrapper>
	);
};

export default Social;
