import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import { Button, Card, Container, Icon } from '../subComponents';
import CodeSnippet from './codeSnippet';
import Projects from './projects';
import {
	CardCounter,
	CardEffect,
	CardItem,
	CardTitle,
	CardWrapper,
	ProjectBox,
	Section,
	TextContent,
} from './stlye';

const Intro = () => {
	const themeState = useSelector((state: RootState) => state.theme);
	const siteState = useSelector((state: RootState) => state.site);

	const dispatch = useDispatch();
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
		onChange(inView, entry) {
			if (inView) {
				dispatch(setBg({ bg: `rgb(${themeState.color.primary} / 5%)` }));
			}
		},
	});

	return (
		<Section ref={ref} navHeight={siteState.navHeight}>
			<Container className="intro_container">
				<TextContent>
					<TypeAnimation
						sequence={[
							'Hey, I am a professional',
							2000,
							'Hey, I am a passionate',
							2000,
							'Full stack Programmer',
							2000,
						]}
						wrapper="h1"
						cursor={true}
						repeat={Infinity}
						style={{ fontWeight: 'bold' }}
					/>
					<p>
						I am a young professionals passionate about web development and
						design. My mission is to help you grow your business
					</p>
					<Button
						margin="1rem 0 0 0"
						padding="0.7rem 1.5rem"
						bg={`rgb(${themeState.color.secondary})`}
						color={`rgb(${themeState.color.white})`}
					>
						Hire Me
					</Button>
					<CardWrapper>
						{siteState.introBox?.map(
							(
								item: {
									title: string;
									value: string;
									icon: any;
								},
								i: number
							) => (
								<CardItem key={i}>
									<Card
										padding="1rem 0.5rem"
										bgHover={`rgb(${themeState.color.primary})`}
									>
										{/* <CardIcon>
											<Icon name={item.icon} />
										</CardIcon> */}
										<CardTitle>{item.title}</CardTitle>
										<CardCounter>{item.value}</CardCounter>
										<CardEffect>
											<svg
												width="218"
												height="109"
												style={{ marginLeft: 'auto' }}
												viewBox="0 0 218 109"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													opacity="0.05"
													cx="156.5"
													cy="-47.5"
													r="156.5"
													fill="white"
												></circle>
												<circle
													opacity="0.08"
													cx="210"
													cy="6"
													r="62"
													fill="white"
												></circle>
											</svg>
											<svg
												width="23"
												height="32"
												viewBox="0 0 23 32"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="21.262"
													cy="1.12081"
													r="1.12081"
													transform="rotate(90 21.262 1.12081)"
													fill="white"
												></circle>
												<circle
													cx="21.262"
													cy="30.4863"
													r="1.12081"
													transform="rotate(90 21.262 30.4863)"
													fill="white"
												></circle>
												<circle
													cx="1.76005"
													cy="1.12081"
													r="1.12081"
													transform="rotate(90 1.76005 1.12081)"
													fill="white"
												></circle>
												<circle
													cx="1.76005"
													cy="30.4863"
													r="1.12081"
													transform="rotate(90 1.76005 30.4863)"
													fill="white"
												></circle>
												<circle
													cx="11.6228"
													cy="1.12081"
													r="1.12081"
													transform="rotate(90 11.6228 1.12081)"
													fill="white"
												></circle>
												<circle
													cx="11.6228"
													cy="30.4863"
													r="1.12081"
													transform="rotate(90 11.6228 30.4863)"
													fill="white"
												></circle>
												<circle
													cx="21.262"
													cy="10.9839"
													r="1.12081"
													transform="rotate(90 21.262 10.9839)"
													fill="white"
												></circle>
												<circle
													cx="1.76005"
													cy="10.9839"
													r="1.12081"
													transform="rotate(90 1.76005 10.9839)"
													fill="white"
												></circle>
												<circle
													cx="11.6228"
													cy="10.9839"
													r="1.12081"
													transform="rotate(90 11.6228 10.9839)"
													fill="white"
												></circle>
												<circle
													cx="21.262"
													cy="20.8469"
													r="1.12081"
													transform="rotate(90 21.262 20.8469)"
													fill="white"
												></circle>
												<circle
													cx="1.76005"
													cy="20.8469"
													r="1.12081"
													transform="rotate(90 1.76005 20.8469)"
													fill="white"
												></circle>
												<circle
													cx="11.6228"
													cy="20.8469"
													r="1.12081"
													transform="rotate(90 11.6228 20.8469)"
													fill="white"
												></circle>
											</svg>
										</CardEffect>
									</Card>
								</CardItem>
							)
						)}
					</CardWrapper>
				</TextContent>
				{/*	<Card width="100%" maxWidth="600px" padding="0.5rem">
					 <CodeSnippet />
				</Card> */}
				<ProjectBox>
					<Projects />
				</ProjectBox>
			</Container>
		</Section>
	);
};

export default Intro;
