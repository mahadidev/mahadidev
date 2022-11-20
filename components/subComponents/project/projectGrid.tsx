import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Grid, Project } from '../index';

const ProjectGrid = ({
	data,
	grid,
}: {
	data: { name: string; value?: string; icon?: string | ReactElement }[];
	grid?: any;
}) => {
	return (
		<Grid {...grid}>
			{data.map((item: any, i: number) => (
				<Project key={i} {...item} />
			))}
		</Grid>
	);
};

export default ProjectGrid;
