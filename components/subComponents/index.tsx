import styled from 'styled-components';

const Container = styled('div')<{
	width?: string;
}>`
	max-width: ${(props) => (props.width === 'full' ? '100%' : '1400px')};
	width: 100%;
	display: inherit;
	justify-content: inherit;
	align-items: inherit;
	margin-left: auto;
	margin-right: auto;
	padding-left: 1rem;
	padding-right: 1rem;
	text-align: inherit;
`;

const Button = styled('button')<{
	bg?: string;
	bgHover?: string;
	color?: string;
	colorHover?: string;
	margin?: string;
	padding?: string;
	display?: string;
}>`
	background-color: ${(props) =>
		props.bg ? props.bg : `rgb(${props.theme.color.primary})`};
	color: ${(props) =>
		props.color ? props.color : `rgb(${props.theme.color.white})`};
	font-weight: bold;
	display: ${(props) => props.display};
	margin: ${(props) => props.margin};
	padding: ${(props) => (props.padding ? props.padding : '1rem 1.5rem')};
	border: none;
	border-radius: 0.2rem;
	outline: none;
	cursor: pointer;
	box-shadow: 0 0 24px 0px rgb(0 149 255 / 5%);
	font-family: Nunito;
	transition: all 0.1s ease-in-out;

	&:hover {
		background: ${(props) =>
			props.bgHover ? props.bgHover : `rgb(${props.theme.color.white})`};
		color: ${(props) =>
			props.colorHover
				? props.colorHover
				: `rgb(${props.theme.color.primary})`};
	}
`;

const Card = styled('div')<{
	width?: string;
	maxWidth?: string;
	height?: string;
	bg?: string;
	color?: string;
	bgHover?: string;
	textHover?: string;
	margin?: string;
	padding?: string;
	borderSize?: string;
	isHover?: boolean;
	overflow?: string;
	overflowY?: string;
	overflowX?: string;
}>`
	width: ${(props) => props.width};
	max-width: ${(props) => props.maxWidth};
	height: ${(props) => props.height};
	background-color: ${(props) =>
		props.bg ? props.bg : `rgb(${props.theme.color.white})`};
	color: ${(props) =>
		props.color ? props.color : `rgb(${props.theme.color.white})`};
	margin: ${(props) => props.margin};
	padding: ${(props) => (props.padding ? props.padding : '1rem 1.5rem')};
	border-radius: 0.5rem;
	box-shadow: 0 0 24px 0px rgb(0 149 255 / 5%);
	position: relative;
	overflow: ${(props) => props.overflow};
	overflow-y: ${(props) => props.overflowY};
	overflow-x: ${(props) => props.overflowX};
	--borderWidth: ${(props) => (props.borderSize ? props.borderSize : '1px')};
	z-index: 1;

	&:hover {
		background-color: ${(props) => props.bgHover};
	}

	${(props) =>
		props.isHover &&
		`
		&:before {
			content: '';
			width: calc(100% + var(--borderWidth) * 2);
			height: calc(100% + var(--borderWidth) * 2);
			background: linear-gradient(
				60deg,
				#f79533,
				#f37055,
				#ef4e7b,
				#a166ab,
				#5073b8,
				#1098ad,
				#07b39b,
				#6fba82
			);
			position: absolute;
			z-index: 1;
			top: calc(-1 * var(--borderWidth));
			left: calc(-1 * var(--borderWidth));
			border-radius: 0.5rem;
			opacity: 0;
			transition: all 0.2s ease-in-out;
		}

		&:hover:before {
			opacity: 1;
		}
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: ${props.bg ? props.bg : `rgb(${props.theme.color.white})`};
			z-index: 1;
			border-radius: 0.5rem;
		}

		* {
			position: relative;
			z-index: 4;
		}
	`}
`;

export { default as Icon } from './icon';
export { default as SectionTitle } from './sectionTitle';
export { Container, Button, Card };
