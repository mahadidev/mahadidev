import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({
	title,
	description,
	align = 'center',
}: {
	title: string;
	description?: string;
	align?: 'left' | 'center' | 'right';
}) => {
	const Wrapper = styled('div')`
		width: 100%;
		margin-bottom: 3rem;
		position: relative;

		@media (max-width: 600px) {
			&:after {
				position: absolute;
				bottom: -10px;
				left: 0;
				content: '';
				width: 25%;
				height: 3px;
				background: rgb(${(props) => props.theme.color.primary});
				border-radius: 0.5rem;
			}
		}
	`;

	const Heading = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.xl};
		text-align: ${align};
		color: ${(props) => props.theme.color.text};

		@media (max-width: 600px) {
			font-size: ${(props) => props.theme.fontSize.lg};
			text-align: left;
		}
	`;

	const Paragraph = styled('p')`
		max-width: 600px;
		width: 100%;
		margin: ${align === 'left' && '0 auto 0 0'} ${align === 'center' && 'auto'}
			${align === 'right' && '0 0 0 auto'};
		margin-top: 0.2rem;
		text-align: ${align};
		color: ${(props) => props.theme.color.textLight};
		font-size: ${(props) => props.theme.fontSize.base};

		@media (max-width: 600px) {
			font-size: ${(props) => props.theme.fontSize.sm};
			text-align: left;
		}
	`;

	return (
		<Wrapper>
			<Heading>{title}</Heading>
			<Paragraph>{description}</Paragraph>
		</Wrapper>
	);
};

export default SectionTitle;
