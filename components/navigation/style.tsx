import styled from 'styled-components';
export const Nav = styled('nav')`
	width: 100%;
	padding: 1rem 0;
	background: ${(props) => `rgb(${props.theme.color.white})`};
	color: ${(props) => props.theme.color.text};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 30;

	.nav__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 768px) {
		.nav__container {
			display: none;
		}
		.hamburger_container {
			display: flex !important;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export const Logo = styled('h2')`
	font-size: ${(props) => props.theme.fontSize.lg};
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const MenuItem = styled('p')`
	cursor: pointer;
	font-weight: bold;
	transition: all 0.2s ease-out;
	text-transform: uppercase;

	&:hover {
		color: ${(props) => `rgb(${props.theme.color.primary})`};
	}
`;

export const Menu = styled('div')<{
	hamburger?: boolean;
}>`
	display: ${(props) => (props.hamburger ? 'block' : 'flex')};
	gap: 2rem;

	${(props) =>
		props.hamburger &&
		`
		${MenuItem} {
			padding: 0.8rem 2rem;

			&:hover {
				color: rgb(${props.theme.color.primary});
				background: rgb(${props.theme.color.primary} / 10%);
			}
		}
	`}
`;

export const HamburgerWrapper = styled('div')`
	width: 100%;
	display: inherit;
	justify-content: inherit;
	align-items: inherit;

	.hamburger_container {
		display: none;
	}

	.sidebar {
		max-width: 400px;
		width: 90%;
		height: 100vh;
		background-color: ${(props) => `rgb(${props.theme.color.white})`};
		padding: 4rem 0;
		position: absolute;
		right: 0;
		top: 0;
	}
`;

export const HamburgerIcon = styled('span')`
	font-size: ${(props) => props.theme.fontSize.lg};
	position: relative;
	z-index: 32;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const HamburgerButtons = styled('div')`
	margin-top: 1rem;
	padding: 0 2rem;
`;
