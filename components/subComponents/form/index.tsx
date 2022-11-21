import React from 'react';
import styled from 'styled-components';
import { Button } from '../index';

const Form = ({
	field,
	style,
	buttonText,
}: {
	field: {
		label: string;
		name: string;
		placeholder: string;
		type: string;
	}[];
	style?: any;
	buttonText: any;
}) => {
	const Wrapper = styled('form')`
		width: 100%;
		max-width: ${style?.width ? style?.width : '100%'};
		min-width: 350px;
		margin: ${style?.margin};

		@media (max-width: 600px) {
			min-width: 100%;
		}
	`;

	const Group = styled('div')`
		margin-bottom: 0.8rem;
	`;

	const Input = styled('input')`
		width: 100%;
		margin-top: 0.2rem;
		padding: 0.8rem;
		outline: none;
		border: none;
		background: rgb(0 0 0 / 5%);
		font-size: 1.1rem;

		&:active,
		&:focus {
			border-bottom: 2px solid rgb(${(props) => props.theme.color.primary});
		}
	`;

	const Textarea = styled('textarea')`
		width: 100%;
		margin-top: 0.2rem;
		padding: 0.8rem;
		outline: none;
		border: none;
		background: rgb(0 0 0 / 5%);
		font-size: 1.1rem;

		&:active,
		&:focus {
			border-bottom: 2px solid rgb(${(props) => props.theme.color.primary});
		}
	`;

	return (
		<Wrapper>
			{field.map((item: any, i: number) => {
				if (item.type !== 'textarea') {
					return (
						<Group key={i}>
							<Input
								type={item.type}
								name={item.name}
								placeholder={item.placeholder}
							/>
						</Group>
					);
				}
			})}
			{field.map((item: any, i: number) => {
				if (item.type === 'textarea') {
					return (
						<Group key={i}>
							<Textarea
								name={item.name}
								placeholder={item.placeholder}
								rows={4}
							/>
						</Group>
					);
				}
			})}

			<Button type={'button'}>{buttonText}</Button>
		</Wrapper>
	);
};

export default Form;
