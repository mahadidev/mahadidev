import React from 'react';
import { Grid, Skill } from '../index';

const SkillGrid = ({ data, grid }: { data: any; grid?: any }) => {
	return (
		<Grid {...grid} gap={'0'} flexWrap={'wrap'}>
			{data?.map((item: any, i: number) => (
				<Skill key={i} {...item} />
			))}
		</Grid>
	);
};

export default SkillGrid;
