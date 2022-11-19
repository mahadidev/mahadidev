import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Rating } from 'react-simple-star-rating';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import { Card, Container } from '../subComponents';
// import {
// 	Desc,
// 	NameReview,
// 	ParallaxText,
// 	ParallaxWrapper,
// 	ReviewAvatarImg,
// 	ReviewBottom,
// 	ReviewQuote,
// 	Section,
// 	SectionTitle,
// 	SemiTitle,
// 	Testimonial,
// 	Testimonials,
// 	TopContent,
// } from './style';

const Review = () => {
	const themeState = useSelector((state: RootState) => state.theme);
	const siteState = useSelector((state: RootState) => state.site);
	const dispatch = useDispatch();
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		onChange(inView, entry) {
			if (inView) {
				dispatch(setBg({ bg: `rgb(${themeState.color.white})` }));
			} else {
				dispatch(setBg({ bg: `rgb(${themeState.color.white})` }));
			}
		},
	});

	const Section = styled('section')`
		width: 100%;
		padding: 7rem 0;

		.slick-slide {
			padding: 0.5rem;
		}
	`;

	const TopContent = styled('div')`
		text-align: start;
		max-width: 500px;
		margin-bottom: 2rem;
	`;

	const SectionTitle = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.xl};
	`;

	const SemiTitle = styled('p')`
		color: ${(props) => `rgb(${props.theme.color.primary})`};
		font-weight: bold;
	`;

	const Desc = styled('p')`
		font-weight: bold;
		color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
	`;

	const Testimonial = styled(Card)`
		position: relative;
		box-shadow: none;
	`;

	const ReviewText = styled('p')`
		margin-bottom: 1rem;
	`;

	const ReviewBottom = styled('div')`
		display: flex;
		align-items: center;
		gap: 0.5rem;
	`;

	const ReviewAvatarImg = styled('img')`
		width: 100%;
		max-width: 50px;
		height: fit-content;
		border-radius: 0.5rem;
	`;

	const NameReview = styled('div')``;

	const ClientName = styled('h1')``;

	const ReviewQuote = styled('div')`
		position: absolute;
		right: 1rem;
		bottom: 1rem;
	`;

	const CarouselSetting = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div ref={ref}>
			<Section>
				<Container>
					<TopContent>
						<SemiTitle>REVIEW</SemiTitle>
						<SectionTitle>What client says.</SectionTitle>
						<Desc>
							We are a global group of young professionals passionate about web
							development and design. Our mission is to help you grow your
							business
						</Desc>
					</TopContent>
					<Slider {...CarouselSetting}>
						{siteState.review?.map((item: any, i: number) => (
							<Testimonial key={i}>
								<ReviewText>{item.feedback}</ReviewText>
								<ReviewBottom>
									<ReviewAvatarImg
										src={item.client.avatar}
										alt="Client Image"
									/>
									<NameReview>
										<ClientName>{item.client.name}</ClientName>
										<Rating
											initialValue={item.star}
											SVGstyle={{ width: '20px', height: '20px' }}
											readonly
										/>
									</NameReview>
								</ReviewBottom>
								<ReviewQuote>
									<svg
										width="51"
										height="29"
										viewBox="0 0 51 29"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g opacity="0.15">
											<path
												d="M12.4311 0.00142075C7.14984 -0.0798293 2.35609 3.33267 1.21859 7.96392C0.568593 10.8077 1.13734 13.6514 2.84359 15.9264C4.63109 18.3639 7.39359 19.9077 10.4811 20.3139L13.3248 27.3014C13.6498 28.0327 14.3811 28.5202 15.1936 28.5202C16.0061 28.5202 16.7373 28.0327 17.0623 27.3014C17.5498 26.0827 18.1186 24.7827 18.6873 23.5639C20.0686 20.4764 21.4498 17.3077 22.5061 14.0577C23.6436 10.6452 23.1561 6.98892 21.2061 4.22642C19.2561 1.54517 16.1686 0.0826707 12.4311 0.00142075ZM19.8248 13.2452C18.7686 16.3327 17.3873 19.5014 16.0873 22.5077C15.8436 23.1577 15.5186 23.7264 15.2748 24.3764L12.5123 17.7139L11.6186 17.6327C9.01859 17.4702 6.58109 16.1702 5.19984 14.3014C3.98109 12.6764 3.57484 10.6452 4.06234 8.69517C4.87484 5.36392 8.36859 2.92642 12.3498 2.92642H12.4311C15.1936 2.92642 17.4686 4.06392 18.9311 6.01392C20.3123 7.96392 20.6373 10.7264 19.8248 13.2452Z"
												fill="#4A6CF7"
											></path>
											<path
												d="M49.0747 4.30772C47.1247 1.54522 44.0372 0.00146484 40.2997 0.00146484C40.2185 0.00146484 40.2185 0.00146484 40.1372 0.00146484C34.9372 0.00146484 30.2247 3.41397 29.0872 7.96397C28.4372 10.8077 29.006 13.6515 30.7122 16.0077C32.4997 18.4452 35.2622 19.989 38.3497 20.3952L41.1935 27.3827C41.5185 28.114 42.2497 28.6015 43.0622 28.6015C43.8747 28.6015 44.606 28.114 44.931 27.3827C45.4185 26.164 45.9872 24.864 46.556 23.6452C47.9372 20.5577 49.3185 17.389 50.3747 14.139C51.5122 10.8077 51.0247 7.07022 49.0747 4.30772ZM47.6935 13.2452C46.6372 16.3327 45.256 19.5015 43.956 22.5077C43.7122 23.1577 43.3872 23.7265 43.1435 24.3765L40.381 17.714L39.4872 17.6327C36.8872 17.4702 34.4497 16.1702 33.0685 14.3015C31.8497 12.6765 31.4435 10.6452 31.931 8.61397C32.7435 5.28272 36.2372 2.84521 40.2185 2.84521H40.2997C43.0622 2.84521 45.3372 3.98272 46.7997 5.93272C48.181 7.96397 48.506 10.7265 47.6935 13.2452Z"
												fill="#4A6CF7"
											></path>
										</g>
									</svg>
								</ReviewQuote>
							</Testimonial>
						))}
					</Slider>
				</Container>
			</Section>
		</div>
	);
};

export default Review;
