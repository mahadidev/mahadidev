import Lottie from 'lottie-react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import {
	Container,
	Grid,
	GridItem,
	InfoGrid,
	SectionTitle,
	Testimonial,
} from '../subComponents';
import { Form, Section } from '../subComponents/index';
import contactAnimation from './contact-us.json';

const Contact = () => {
	const siteState = useSelector((state: RootState) => state.site);

	return (
		<Section>
			<Container>
				<SectionTitle
					title="Contact Me"
					description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
					align="left"
				/>
				<Grid
					column="repeat(2, minmax(0, 1fr)); minmax(0, 1fr)"
					alignItem="center"
					lg={{
						column: '100%',
					}}
				>
					<GridItem>
						<Lottie animationData={contactAnimation} loop={true} />
					</GridItem>
					<GridItem>
						<Form
							field={[
								{
									label: 'Full Name',
									placeholder: 'Full Name',
									type: 'text',
									name: 'name',
								},
								{
									label: 'Email Address',
									placeholder: 'Email Address',
									type: 'email',
									name: 'email',
								},
								{
									label: 'Subject',
									placeholder: 'Subject',
									type: 'text',
									name: 'subject',
								},
								{
									label: 'Message',
									placeholder: 'Message',
									type: 'textarea',
									name: 'message',
								},
							]}
							buttonText={'Send Email'}
						/>
					</GridItem>
				</Grid>
			</Container>
		</Section>
	);
};

export default Contact;
