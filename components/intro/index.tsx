import React from 'react';
import { useInView } from 'react-intersection-observer';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import {
	Container,
	Grid,
	GridItem,
	InfoGrid,
	ProjectBook,
	Section,
	TypingTitle,
} from '../subComponents';

const Intro = () => {
	const themeState = useSelector((state: RootState) => state.theme);
	const siteState = useSelector((state: RootState) => state.site);

	const dispatch = useDispatch();
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
		onChange(inView, entry) {
			if (inView) {
				// dispatch(setBg({ bg: `rgb(${themeState.color.secondary} / 5%)` }));
			}
		},
	});

	return (
		<Section
			ref={ref}
			height={`calc(100vh - ${siteState.navHeight}px)`}
			margin={`${siteState.navHeight}px 0 0 0`}
			align={'center'}
			bg={`rgb(${themeState.color.secondary} / 5%)`}
		>
			<Container>
				<Grid
					justifyContent={'space-between'}
					alignItem={'center'}
					column={'600px 600px'}
					xl={{
						column: '45% 45%',
					}}
					md={{
						column: '100%',
					}}
				>
					<GridItem>
						<TypingTitle
							title={[
								'Hey, I am a professional',
								'Hey, I am a passionate',
								'Full stack Programmer',
							]}
							description={
								'I am a young professionals passionate about web development and design. My mission is to help you grow your business'
							}
							buttonText="Hire Me"
						/>

						<InfoGrid
							width={'100%'}
							margin={'1rem 0 0 0'}
							data={siteState.introBox}
						/>
					</GridItem>
					<GridItem align="end" lg={{ align: 'center', margin: '3rem 0 0 0 ' }}>
						<ProjectBook data={siteState.project} />
					</GridItem>
				</Grid>
			</Container>
		</Section>
	);
};

export default Intro;
