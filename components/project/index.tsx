import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { RootState, useSelector } from '../../redux';
import {
	Container,
	ProjectGrid,
	Section,
	SectionTitle,
} from '../subComponents';

const Project = () => {
	const SiteState = useSelector((state: RootState) => state.site);

	return (
		<Section>
			<Container>
				<SectionTitle
					title="Recent Works"
					description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
					align="left"
				/>
				<ProjectGrid
					grid={{
						column: 'auto auto auto auto',
						gap: '0.5rem',
						'2xl': {
							column: 'auto auto auto',
							gap: '0.5rem',
						},
						lg: {
							column: 'auto auto',
							gap: '0.5rem',
						},
						sm: {
							column: 'auto',
							gap: '1rem',
						},
					}}
					data={SiteState.project}
				/>
			</Container>
		</Section>
	);
};

export default Project;
