import React from 'react';
import styled from 'styled-components';
import { Intro, Project, Services } from '../components';

const TestPage = () => {
	const Wrapper = styled(`section`)`
		width: 100%;
		height: 400vh;
		background: purple;
	`;
	const Title = styled(`div`)`
		z-index: 1;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	`;

	return (
		<>
			<Intro />
			<Services />
			<Project />
		</>
	);
};

export default TestPage;
