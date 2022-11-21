import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../index';

const Form = ({
	field,
	style,
	buttonText,
	email,
}: {
	field: {
		label: string;
		name: string;
		placeholder: string;
		type: string;
		required?: boolean;
	}[];
	style?: any;
	buttonText: any;
	email?: {
		template_id: string;
		service_id: string;
		public_key: string;
	};
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

	const formRef = useRef<any>();
	const [isLoading, setIsLoading] = useState(false);
	const onSubmit = (e: any) => {
		setIsLoading(true);

		if (email && formRef) {
			emailjs
				.sendForm(
					email.service_id,
					email.template_id,
					formRef.current,
					email.public_key
				)
				.then(
					(result) => {
						console.log(result.text);
						setIsLoading(false);
					},
					(error) => {
						console.log(error.text);
						setIsLoading(false);
					}
				);
		}
	};

	return (
		<Wrapper
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(e);
			}}
			ref={formRef}
		>
			{field.map((item: any, i: number) => {
				if (item.type !== 'textarea') {
					return (
						<Group key={i}>
							<Input
								type={item.type}
								name={item.name}
								placeholder={item.placeholder}
								required={item.required}
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
								required={item.required}
							/>
						</Group>
					);
				}
			})}

			<Button type={'submit'} disabled={isLoading}>
				{isLoading ? 'loading' : buttonText}
			</Button>
		</Wrapper>
	);
};

export default Form;
