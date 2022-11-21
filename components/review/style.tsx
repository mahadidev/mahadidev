import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { Card } from '../subComponents';

export const Section = styled('section')`
	width: 100%;
	padding: 7rem 0;
`;

export const TopContent = styled('div')`
	text-align: start;
	max-width: 500px;
	margin-bottom: 2rem;
`;
export const SectionTitle = styled('h1')`
	font-size: ${(props) => props.theme.fontSize.xl};
`;
export const SemiTitle = styled('p')`
	color: ${(props) => `rgb(${props.theme.color.secondary})`};
	font-weight: bold;
`;
export const Desc = styled('p')`
	font-weight: bold;
	color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
`;

export const Testimonials = styled('div')`
	.swiper {
		padding: 2rem 0;
	}
`;

export const Testimonial = styled(Card)``;

export const ParallaxWrapper = styled(Parallax)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
`;

export const ParallaxText = styled('h1')`
	font-size: 10vw;
	color: ${(props) => props.theme.colorPlate.gray};
`;

export const ReviewBottom = styled('div')`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 0.5rem;
	padding-top: 1rem;
`;

export const ReviewAvatarImg = styled('img')`
	width: 50px;
	border-radius: 100%;
	display: block;
	margin-bottom: 0.5rem;
`;

export const NameReview = styled('div')``;

export const ReviewQuote = styled('div')`
	position: absolute;
	right: 1rem;
	bottom: 1rem;
`;
