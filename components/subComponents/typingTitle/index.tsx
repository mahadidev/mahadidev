import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import { Button } from '../index';

const TypingTitle = ({
	title,
	description,
	buttonText,
}: {
	title: string[];
	description?: string;
	buttonText?: string;
}) => {
	const Wrapper = styled('div')`
		h1 {
			font-size: ${(props) => props.theme.fontSize.xl};
			color: ${(props) => props.theme.color.text};

			@media (max-width: 768px) {
				font-size: ${(props) => props.theme.fontSize.lg};
			}
		}
	`;

	const Paragraph = styled('p')`
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => props.theme.color.textLight};
		margin-bottom: 1rem;

		@media (max-width: 600px) {
			font-size: ${(props) => props.theme.fontSize.sm};
		}
	`;

	const [titleArray, setTitleArray] = useState<any>();

	useEffect(() => {
		const titleSequence: any[] | null = [];
		title.map((item: string, index: number) => {
			titleSequence.push(item);
			titleSequence.push(2000);
		});
		setTitleArray(titleSequence);
	}, []);

	return (
		<Wrapper>
			<TypeAnimation
				sequence={titleArray ? titleArray : ['title 1', 'title 2']}
				wrapper="h1"
				cursor={true}
				repeat={Infinity}
				style={{ fontWeight: 'bold' }}
			/>
			<Paragraph>{description}</Paragraph>
			{buttonText && <Button>{buttonText}</Button>}
		</Wrapper>
	);
};

export default TypingTitle;
