import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState, useSelector } from '../../redux';

const Projects = () => {
	const siteState = useSelector((state: RootState) => state.site);

	const Project = styled('div')`
		width: 100%;
		height: max-content;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 1rem;
		border-radius: 1rem;
		transition: all 0.2s ease;
		overflow-x: hidden;

		&:hover {
			box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);
		}
	`;

	const Thumbnail = styled('div')`
		background: #ebebeb;
		border-radius: 0.5rem;

		img {
			width: 100%;
		}
	`;

	const Title = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.lg};
		margin-top: 1rem;
	`;

	const TagWrapper = styled('div')`
		display: flex;
		gap: 0.3rem;
	`;

	const Tag = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.sm};
		color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
	`;

	return (
		<>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				{siteState.project?.map((item: any, i: number) => (
					<SwiperSlide key={i}>
						<Project>
							<Thumbnail>
								<img src={item.thumbnail} alt={'Project Thumbnail'} />
							</Thumbnail>
							<Title>{item.title}</Title>
							<TagWrapper>
								{item.tag.map((tagItem: string, tagI: number) => (
									<Tag key={tagI}>{tagItem},</Tag>
								))}
							</TagWrapper>
						</Project>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Projects;
