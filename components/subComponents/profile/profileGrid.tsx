import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Profile } from '../index';

const ProfileGrid = ({ data }: { data: any }) => {
	useEffect(() => {
		console.log(data);
	}, [data]);

	const GridWrapper = styled('div')`
		position: relative;
		width: max-content;
		margin: auto;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			border: 1px solid #fff;
		}
	`;

	return (
		<GridWrapper>
			<Grid
				column="repeat(auto-fill, minmax(0, 1fr)); minmax(0, 1fr)"
				gap={'0'}
			>
				{data.map(
					(item: { name: string; logo: string; link: string }, i: number) => (
						<Profile borderRight="1px" {...item} key={i} />
					)
				)}
			</Grid>
		</GridWrapper>
	);
};

export default ProfileGrid;
