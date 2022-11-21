import Lottie from 'lottie-react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RootState, setBg, useDispatch, useSelector } from '../../redux';
import {
	Container,
	DetailGrid,
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
					{...{
						column: 'repeat(2, minmax(0, 1fr))',
						justifyContent: 'space-between',
						alignItem: 'center',
						gap: '4rem',
						'2xl': {
							gap: '2rem',
						},
						lg: {
							column: '100%',
						},
					}}
				>
					<GridItem>
						<DetailGrid
							grid={{
								column: 'repeat(2, minmax(0, 1fr)); minmax(0, 1fr)',
								gap: '2rem',
								'2xl': {
									gap: '1rem',
								},
								sm: {
									column: '100%',
									gap: '2rem',
								},
							}}
							data={[
								{
									icon: 'phone',
									title: 'Phone',
									description: '+8801408094722',
								},
								{
									icon: 'email',
									title: 'Email',
									description: 'mahadi.dev.pm@gmail.com',
								},
								{
									icon: 'web',
									title: 'Website',
									description: 'mahadidev.vercel.app',
								},
								{
									icon: 'freelancer',
									title: 'Marketplace',
									description: 'freelancer.com/u/mahadihasan0636',
								},
							]}
						/>
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
