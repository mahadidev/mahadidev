import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from '../index';

const Project = ({
	thumbnail,
	name,
	tag,
	visit,
	source,
	className,
}: {
	thumbnail: string;
	name: string;
	tag: string[];
	visit: string | boolean;
	source: string | boolean;
	className?: string;
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
		font-size: ${(props) => props.theme.fontSize.base};
		color: ${(props) => props.theme.color.text};
		font-weight: bold;
		cursor: pointer;
	`;

	const Tags = styled('div')`
		display: flex;
		gap: 0.3rem;
	`;

	const Tag = styled('span')`
		font-size: ${(props) => props.theme.fontSize.sm};
		color: ${(props) => props.theme.color.textLight};
	`;

	const Links = styled('a')`
		color: ${(props) => `rgb(${props.theme.color.primary})`};
		text-decoration: underline;
		cursor: pointer;
	`;

	return (
		<Wrapper className={className}>
			<Thumbnail>
				<img src={thumbnail} alt={'Project Thumbnail'} />
			</Thumbnail>
			<Grid
				width="100%"
				column="auto auto"
				alignItem="center"
				margin="1rem 0 0 0"
				justifyContent="space-between"
			>
				<Name>{name}</Name>
				<Grid width="max-content" column="auto auto" gap={'1rem'}>
					{source && <Links>Source</Links>}
					{visit && <Links>Visit</Links>}
				</Grid>
			</Grid>
			<Tags>
				{tag.map((tagItem: string, tagI: number) => (
					<Tag key={tagI}>{tagItem},</Tag>
				))}
			</Tags>
		</Wrapper>
	);
};

export default Project;
