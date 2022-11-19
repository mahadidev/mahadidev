import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { RootState, useSelector } from '../../redux';
import { Container } from '../subComponents';

const Project = () => {
	const SiteState = useSelector((state: RootState) => state.site);

	const Section = styled('section')`
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 4rem 0;
	`;

	const ProjectWrapper = styled('div')`
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 1rem;

		@media (max-width: 768px) {
			grid-template-columns: auto auto;
		}

		@media (max-width: 600px) {
			grid-template-columns: auto;
		}
	`;

	const Item = styled('div')`
		width: 100%;
		height: max-content;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 1rem;
		border-radius: 1rem;
		transition: all 0.2s ease;

		&:hover {
			box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);
		}
	`;

	const Thumbnail = styled('div')`
		background: #ebebeb;
		border-radius: 0.5rem;
		overflow: hidden;

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
		<Section>
			<Container>
				<ProjectWrapper>
					{SiteState.project.map((item: any, i: number) => (
						<Item key={i}>
							<Thumbnail>
								<img src={item.thumbnail} alt={'Project Thumbnail'} />
							</Thumbnail>
							<Title>{item.title}</Title>
							<TagWrapper>
								{item.tag.map((tagItem: string, tagI: number) => (
									<Tag key={tagI}>{tagItem},</Tag>
								))}
							</TagWrapper>
						</Item>
					))}
				</ProjectWrapper>
			</Container>
		</Section>
	);
};

export default Project;
