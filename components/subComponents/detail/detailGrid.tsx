import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Detail, Grid } from '../index';

const DetailGrid = ({
	data,
	grid,
}: {
	data: {
		icon?:
			| 'code'
			| 'menu'
			| 'menuClose'
			| 'home'
			| 'project'
			| 'contact'
			| 'facebook'
			| 'github'
			| 'skype'
			| 'google'
			| 'freelancer'
			| 'user'
			| 'web'
			| 'design'
			| 'app'
			| 'wordpress'
			| 'android'
			| 'ios'
			| 'email'
			| 'phone'
			| 'location';
		title?: string;
		description?: string;
		buttonText?: string;
	}[];
	grid: any;
}) => {
	return (
		<Grid {...grid}>
			{data.map((item: any, i: number) => (
				<Detail key={i} {...item} />
			))}
		</Grid>
	);
};

export default DetailGrid;
