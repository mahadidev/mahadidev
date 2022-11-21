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
	`;

	const Heading = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.xl};
		text-align: ${align};
		color: ${(props) => props.theme.color.text};
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
	`;

	return (
		<Wrapper>
			<Heading>{title}</Heading>
			<Paragraph>{description}</Paragraph>
		</Wrapper>
	);
};

export default SectionTitle;
