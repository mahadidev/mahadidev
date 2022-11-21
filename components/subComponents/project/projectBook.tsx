import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from '../index';

const ProjectBook = ({
	data,
	width,
	margin,
}: {
	data: {
		thumbnail: string;
		name: string;
		tag: string[];
		visit: string | boolean;
		source: string | boolean;
	}[];
	width?: string;
	margin?: string;
}) => {
	const Grid = styled('div')`
		width: 100%;
		max-width: ${width ? width : '100%'};
		margin: ${margin};
		padding: 0 2rem;

		.swiper-slide {
			border-radius: 1rem;
		}
	`;

	return (
		<Grid>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				{data?.map((item: any, i: number) => (
					<SwiperSlide key={i}>
						<Project {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</Grid>
	);
};

export default ProjectBook;
