import styled from 'styled-components';

export const Grid = styled('div')<{
	width?: string;
	margin?: string;
	display?: string;
	column?: string;
	gap?: string;
	justifyContent?: string;
	alignItem?: string;
	xl?: {
		display?: string;
		column?: string;
		gap?: string;
	};
	lg?: {
		display?: string;
		column?: string;
		gap?: string;
	};
	md?: {
		display?: string;
		column?: string;
		gap?: string;
	};
	sm?: {
		display?: string;
		column?: string;
		gap?: string;
	};
}>`
	width: 100%;
	max-width: ${(props) => props.width};
	height: fit-content;
	margin: ${(props) => props.margin};
	display: ${(props) => (props.display ? props.display : 'grid')};
	gap: ${(props) => (props.gap ? props.gap : '1rem')};
	grid-template-columns: ${(props) => props.column};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItem};

	@media (max-width: 1280px) {
		display: ${(props) => (props.display ? props.xl?.display : 'grid')};
		grid-template-columns: ${(props) => props.xl?.column};
		gap: ${(props) => props.xl?.gap};
	}
	@media (max-width: 992px) {
		display: ${(props) => (props.display ? props.lg?.display : 'grid')};
		grid-template-columns: ${(props) => props.lg?.column};
		gap: ${(props) => props.lg?.gap};
	}
	@media (max-width: 768px) {
		display: ${(props) => (props.display ? props.md?.display : 'grid')};
		grid-template-columns: ${(props) => props.md?.column};
		gap: ${(props) => props.md?.gap};
	}
	@media (max-width: 600px) {
		display: ${(props) => (props.display ? props.sm?.display : 'grid')};
		grid-template-columns: ${(props) => props.sm?.column};
		gap: ${(props) => props.sm?.gap};
	}
`;

export const GridItem = styled('div')<{
	align?: 'start' | 'center' | 'end';
	margin?: string;
	xl?: {
		align?: 'start' | 'center' | 'end';
		margin?: string;
	};
	lg?: {
		align?: 'start' | 'center' | 'end';
		margin?: string;
	};
	md?: {
		align?: 'start' | 'center' | 'end';
		margin?: string;
	};
	sm?: {
		align?: 'start' | 'center' | 'end';
		margin?: string;
	};
}>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.align};
	margin: ${(props) => props.margin};

	@media (max-width: 1280px) {
		align-items: ${(props) => props.xl?.align};
		margin: ${(props) => props.xl?.margin};
	}
	@media (max-width: 992px) {
		align-items: ${(props) => props.lg?.align};
		margin: ${(props) => props.lg?.margin};
	}
	@media (max-width: 768px) {
		align-items: ${(props) => props.md?.align};
		margin: ${(props) => props.md?.margin};
	}
	@media (max-width: 600px) {
		align-items: ${(props) => props.sm?.align};
		margin: ${(props) => props.sm?.margin};
	}
`;

export const Section = styled('section')<{
	bg?: string;
	height?: string;
	margin?: string;
	align?: 'start' | 'center' | 'end';
}>`
	width: 100%;
	background: ${(props) => props.bg};
	margin: ${(props) => props.margin};
	padding: 7rem 0;
	min-height: ${(props) => props.height};
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => props.align};

	@media (max-width: 600px) {
		overflow-x: hidden;
	}
`;

const Container = styled('div')<{
	width?: string;
}>`
	max-width: ${(props) => (props.width === 'full' ? '100%' : '1400px')};
	width: 100%;
	display: inherit;
	justify-content: inherit;
	align-items: inherit;
	flex-direction: inherit;
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
	colorPlate?: 'primary' | 'secondary';
}>`
	background-color: ${(props) =>
		props.bg
			? props.bg
			: props.colorPlate === 'secondary'
			? `rgb(${props.theme.color.secondary})`
			: `rgb(${props.theme.color.primary})`};
	color: ${(props) =>
		props.color ? props.color : `rgb(${props.theme.color.white})`};
	font-weight: bold;
	display: ${(props) => props.display};
	margin: ${(props) => props.margin};
	padding: ${(props) => (props.padding ? props.padding : '1rem 1.5rem')};
	border: none;
	border-radius: 0.4rem;
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
				: props.colorPlate === 'secondary'
				? `rgb(${props.theme.color.secondary})`
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

export { default as Detail } from './detail';
export { default as DetailGrid } from './detail/detailGrid';
export { default as Form } from './form';
export { default as Icon } from './icon';
export { default as Info } from './info';
export { default as InfoGrid } from './info/infoGrid';
export { default as Profile } from './profile';
export { default as ProfileGrid } from './profile/profileGrid';
export { default as Project } from './project';
export { default as ProjectBook } from './project/projectBook';
export { default as ProjectGrid } from './project/projectGrid';
export { default as SectionTitle } from './sectionTitle';
export { default as Testimonial } from './testimonial';
export { default as TypingTitle } from './typingTitle';
export { Container, Button, Card };
