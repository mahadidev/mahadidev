import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ShowCase from './showcase';

const Project = () => {
	const [titleSize, setTitleSize] = useState<number | undefined>();
	const [isTitle, setIsTitle] = useState<any>(true);
	const projectRef = useRef<any>();

	useEffect(() => {
		addEventListener('scroll', () => {
			setTitleSize(window.pageYOffset - projectRef.current.offsetTop);
			if (window.pageYOffset - projectRef.current.offsetTop >= 170) {
				setIsTitle(false);
			} else {
				setIsTitle(true);
			}

			console.log(window.pageYOffset - projectRef.current.offsetTop);
		});
	}, []);

	const Section = styled('section')`
		width: 100%;
		height: calc(150vh + ${170}px);
	`;

	const Content = styled('div')`
		width: 100%;
		height: 100vh;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1;
		overflow: hidden;
	`;

	const Title = styled('div')`
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #fff;
		transition: all 0.2s ease;
		opacity: ${isTitle ? '1' : '0'};
		z-index: ${isTitle ? '3' : '0'};
	`;

	const Text = styled('h1')`
		background: url(https://hblimg.mmtcdn.com/content/hubble/img/kasol/mmt/destination/m_destination-kasol-landscape_l_400_640.jpg);
		background-size: cover;
		background-attachment: fixed;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		font-size: clamp(10vw, ${titleSize ? titleSize : 1 * 10}px, 500vw);
		transition: all 0.2s ease;
	`;

	const ProjectShowcase = styled('div')`
		width: 100%;
		height: 100vh;
		display: block;
		position: relative;
		z-index: 2;
	`;

	return (
		<Section ref={projectRef}>
			<Content>
				<Title>
					<Text>PROJECTS</Text>
				</Title>
				<ProjectShowcase>
					<ShowCase />
				</ProjectShowcase>
			</Content>
		</Section>
	);
};

export default Project;
