import React from 'react';
import { RootState, useSelector } from '../../redux';
import { Container, Section, SectionTitle, SkillGrid } from '../subComponents';

const Skill = () => {
	const siteState = useSelector((state: RootState) => state.site);
	const themeState = useSelector((state: RootState) => state.theme);

	return (
		<Section bg={`rgb(${themeState.color.primary} / 30%)`}>
			<Container>
				<SectionTitle
					title="Skills"
					description="I am a young professionals passionate about web development and design. My mission is to help you grow your business"
					align="left"
				/>
				<SkillGrid
					data={siteState.skill}
					grid={{
						column: `repeat(8, minmax(0, 1fr)); minmax(0, 1fr)`,
						'2xl': {
							column: `repeat(6, minmax(0, 1fr)); minmax(0, 1fr)`,
						},
						lg: {
							column: `repeat(5, minmax(0, 1fr)); minmax(0, 1fr)`,
						},
						md: {
							column: `repeat(4, minmax(0, 1fr)); minmax(0, 1fr)`,
						},
						sm: {
							column: `repeat(2, minmax(0, 1fr)); minmax(0, 1fr)`,
						},
					}}
				/>
			</Container>
		</Section>
	);
};

export default Skill;
