import React from 'react';
import styled from 'styled-components';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const ShowCase = () => {
	const Wrapper = styled('div')`
		width: 100%;
		height: 100vh;
		background: ${(props) => `rgb(${props.theme.color.primary} / 20%)`};
	`;

	const Item = styled('div')`
		width: 100%;
		height: 100vh;
		background: red;
	`;

	return (
		<Wrapper>
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				slidesPerView={1}
			>
				<SwiperSlide>
					<Item>Slide 1</Item>
				</SwiperSlide>
				<SwiperSlide>
					<Item>Slide 2</Item>
				</SwiperSlide>
				<SwiperSlide>
					<Item>Slide 3</Item>
				</SwiperSlide>
				<SwiperSlide>
					<Item>Slide 4</Item>
				</SwiperSlide>
			</Swiper>
		</Wrapper>
	);
};

export default ShowCase;
