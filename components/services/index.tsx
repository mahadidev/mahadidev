import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import {
	Container,
	DetailGrid,
	Icon,
	Section,
	SectionTitle,
} from '../subComponents';

const Services = () => {
	const themeState = useSelector((state: RootState) => state.theme);
	const siteState = useSelector((state: RootState) => state.site);
	const dispatch = useDispatch();
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
		onChange(inView, entry) {
			if (inView) {
				dispatch(setBg({ bg: `rgb(${themeState.color.white})` }));
			}
		},
	});

	return (
		<div ref={ref}>
			<Section>
				<Container>
					<SectionTitle
						title="SERVICE OFFERS"
						description="We are a global group of young professionals passionate about web
							development and design. Our mission is to help you grow your
							business"
					/>
					<DetailGrid
						grid={{
							column: 'auto auto auto auto',
							gap: '2rem',
							xl: {
								column: 'auto auto auto',
							},
							lg: {
								column: 'auto auto',
								gap: '1.5rem',
							},
							sm: {
								column: 'auto',
							},
						}}
						data={siteState.services}
					/>
				</Container>
			</Section>
		</div>
	);
};

export default Services;
