import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';

const Testimonial = ({ data, style }: { data: any; style?: any }) => {
	const Wrapper = styled('div')`
		width: 100%;
		max-width: ${style?.width};
		display: grid;
		grid-template-columns: auto;
		gap: 1rem;
	`;
	const Item = styled('div')`
		width: 100%;
		background: ${(props) => `rgb(${props.theme.color.secondary} / 5%)`};
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 0.5rem;
		border-radius: 0.5rem;
	`;
	const Avatar = styled('img')`
		width: 100%;
		max-width: 100px;
		border-radius: 0.5rem;
	`;
	const Text = styled('div')``;
	const Name = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.lg};
		color: ${(props) => `rgb(${props.theme.color.black} / 70%)`};
	`;
	const Feedback = styled('p')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => `rgb(${props.theme.color.black} / 70%)`};
	`;

	return (
		<Wrapper>
			{data.map((item: any, i: number) => (
				<Item key={i}>
					<Avatar src={item.client.avatar} />
					<Text>
						<Name>{item.client.name}</Name>
						<Feedback>{item.feedback}</Feedback>
						<Rating
							initialValue={item.star}
							SVGstyle={{ width: '25px', height: '25px' }}
							readonly
						/>
					</Text>
				</Item>
			))}
		</Wrapper>
	);
};

export default Testimonial;
