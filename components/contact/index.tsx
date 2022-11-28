import React, { createRef, useEffect } from 'react';
import { RootState, useSelector } from '../../redux';
import {
	Container,
	DetailGrid,
	Grid,
	GridItem,
	SectionTitle,
} from '../subComponents';
import { Form, Section } from '../subComponents/index';

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
								gap: '1rem',
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
									required: true,
								},
								{
									label: 'Email Address',
									placeholder: 'Email Address',
									type: 'email',
									name: 'email',
									required: true,
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
									required: true,
								},
							]}
							email={{
								service_id: 'service_zy2h795',
								template_id: 'template_odlu761',
								public_key: 'qm7CspCnwDE-z1cGG',
							}}
							buttonText={'Send Email'}
						/>
					</GridItem>
				</Grid>
			</Container>
		</Section>
	);
};

export default Contact;
