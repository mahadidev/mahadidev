import React, { ReactElement } from 'react';
import { Grid, Info } from '../index';

const InfoGrid = ({
	data,
	width,
	margin,
}: {
	data: { title: string; value?: string; icon?: string | ReactElement }[];
	width?: string;
	margin?: string;
}) => {
	return (
		<Grid column="auto auto" width={width} margin={margin}>
			{data.map((item: any, i: number) => (
				<Info key={i} {...item} />
			))}
		</Grid>
	);
};

export default InfoGrid;
