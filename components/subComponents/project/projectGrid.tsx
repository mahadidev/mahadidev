import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, Grid, Project } from '../index';

const ProjectGrid = ({
	data,
	grid,
}: {
	data: {
		thumbnail: string;
		name: string;
		tag: string[];
		visit: string | boolean;
		source: string | boolean;
	}[];
	grid?: any;
}) => {
	const Showcase = styled(Grid)`
		button {
			display: none;
			@media (max-width: 600px) {
				display: block;
			}
		}
	`;

	const Item = styled(Project)`
		@media (max-width: 600px) {
			&:nth-last-child(-n + 6) {
				display: none;
			}
		}
	`;

	return (
		<Showcase {...grid}>
			{data.map((item: any, i: number) => (
				<Item key={i} {...item} />
			))}

			<Button colorPlate="primary">VIEW ALL</Button>
		</Showcase>
	);
};

export default ProjectGrid;
