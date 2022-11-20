import React from 'react';
import styled from 'styled-components';

const Project = ({
	thumbnail,
	name,
	tag,
}: {
	thumbnail: string;
	name: string;
	tag: string[];
}) => {
	const Wrapper = styled('div')`
		width: 100%;
		height: max-content;
		background: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 1rem;
		border-radius: 1rem;
		transition: all 0.2s ease;

		&:hover {
			box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgb(0 0 0 / 6%);
		}
	`;

	const Thumbnail = styled('div')`
		background: #ebebeb;
		border-radius: 0.5rem;
		overflow: hidden;

		img {
			width: 100%;
		}
	`;

	const Name = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.lg};
		margin-top: 1rem;
	`;

	const Tags = styled('div')`
		display: flex;
		gap: 0.3rem;
	`;

	const Tag = styled('h1')`
		font-size: ${(props) => props.theme.fontSize.sm};
		color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
	`;

	return (
		<Wrapper>
			<Thumbnail>
				<img src={thumbnail} alt={'Project Thumbnail'} />
			</Thumbnail>
			<Name>{name}</Name>
			<Tags>
				{tag.map((tagItem: string, tagI: number) => (
					<Tag key={tagI}>{tagItem},</Tag>
				))}
			</Tags>
		</Wrapper>
	);
};

export default Project;
