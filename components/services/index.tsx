import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import { Container, Icon, SectionTitle } from '../subComponents';
import {
	CardEffect,
	Desc,
	IconWrapper,
	Item,
	ItemButton,
	Paragraph,
	Section,
	SemiTitle,
	Title,
	TopContent,
	Wrapper,
} from './style';

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
				<Container className="services__container">
					<SectionTitle
						title="SERVICE OFFERS"
						description="We are a global group of young professionals passionate about web
							development and design. Our mission is to help you grow your
							business"
					/>
					<Wrapper>
						{siteState.services.map((item: any, i: number) => (
							<Item key={i}>
								<IconWrapper>
									<Icon name={item.icon} />
								</IconWrapper>
								<Title>{item.title}</Title>
								<Paragraph>{item.desc}</Paragraph>
								<ItemButton
									display="block"
									margin="1rem auto 0 auto"
									padding="0.7rem 1.5rem"
								>
									Get Now
								</ItemButton>

								<CardEffect>
									<svg
										width="22"
										height="32"
										viewBox="0 0 22 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="20.6228"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 20.6228 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 20.6228 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 1.12089 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 1.12089 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 10.9837 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 10.9837 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 20.6228 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 1.12089 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 10.9837 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 20.6228 20.8469)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 1.12089 20.8469)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 10.9837 20.8469)"
											fill="#4A6CF7"
										></circle>
									</svg>
									<svg
										width="22"
										height="32"
										viewBox="0 0 22 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="20.6228"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 20.6228 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 20.6228 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 1.12089 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 1.12089 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="1.12081"
											r="1.12081"
											transform="rotate(90 10.9837 1.12081)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="30.4863"
											r="1.12081"
											transform="rotate(90 10.9837 30.4863)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 20.6228 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 1.12089 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="10.9839"
											r="1.12081"
											transform="rotate(90 10.9837 10.9839)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="20.6228"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 20.6228 20.8469)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="1.12089"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 1.12089 20.8469)"
											fill="#4A6CF7"
										></circle>
										<circle
											cx="10.9837"
											cy="20.8469"
											r="1.12081"
											transform="rotate(90 10.9837 20.8469)"
											fill="#4A6CF7"
										></circle>
									</svg>
								</CardEffect>
							</Item>
						))}
					</Wrapper>
				</Container>
			</Section>
		</div>
	);
};

export default Services;
