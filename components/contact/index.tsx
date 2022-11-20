import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import { Button, Card, Container, SectionTitle } from '../subComponents';

const Contact = () => {
	const Section = styled('section')`
		padding: 7rem 0;
		background-color: ${(props) => props.theme.color.primary};
	`;

	const TopContent = styled('div')`
		max-width: 500px;
		margin-bottom: 2rem;
	`;
	const SemiTitle = styled('p')`
		color: ${(props) => `rgb(${props.theme.color.primary})`};
		font-weight: bold;
	`;
	const Desc = styled('p')`
		font-weight: bold;
		color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
	`;

	const Testimonials = styled('div')`
		width: 48%;
	`;

	const ContactWrapper = styled('div')`
		max-width: 500px;
		width: 100%;
	`;

	const FormGroup = styled('div')`
		margin-bottom: 1rem;
	`;

	const FormInput = styled('input')`
		width: 100%;
		margin-top: 0.2rem;
		padding: 0.8rem;
		outline: none;
		border: none;
		background: ${(props) => `rgb(${props.theme.color.black} / 5%)`};
		font-size: ${(props) => props.theme.fontSize.base};

		&:active,
		&:focus {
			border-bottom: 2px solid rgb(${(props) => props.theme.color.primary});
		}
	`;

	const FormTextArea = styled('textarea')`
		width: 100%;
		margin-top: 0.2rem;
		padding: 0.8rem;
		outline: none;
		border: none;
		background: ${(props) => `rgb(${props.theme.color.black} / 5%)`};
		font-size: ${(props) => props.theme.fontSize.base};

		&:active,
		&:focus {
			border-bottom: 2px solid rgb(${(props) => props.theme.color.primary});
		}
	`;

	const siteState = useSelector((state: RootState) => state.site);
	const CarouselSetting = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};

	return (
		<Section>
			<Container>
				<SectionTitle
					title="Contact Me"
					description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
					align="left"
				/>
				<ContactWrapper>
					<FormGroup>
						<FormInput type="text" placeholder="Full Name" />
					</FormGroup>
					<FormGroup>
						<FormInput type="email" placeholder="Email Address" />
					</FormGroup>
					<FormGroup>
						<FormTextArea placeholder="message"></FormTextArea>
					</FormGroup>
					<Button>Send Messages</Button>
				</ContactWrapper>
			</Container>
		</Section>
	);
};

export default Contact;
