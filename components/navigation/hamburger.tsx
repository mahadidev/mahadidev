import { motion } from 'framer-motion';
import React from 'react';
import { RootState, setSidebar, useDispatch, useSelector } from '../../redux';
import { Button, Container, Icon } from '../subComponents';
import {
	HamburgerButtons,
	HamburgerIcon,
	HamburgerWrapper,
	Logo,
	Menu,
	MenuItem,
} from './style';

const Hamburger = () => {
	const siteState = useSelector((store: RootState) => store.site);
	const themeState = useSelector((store: RootState) => store.theme);
	const dispatch = useDispatch();

	return (
		<HamburgerWrapper>
			<Container className="hamburger_container">
				<Logo>
					<Icon name="code" /> MAHADI DEV
				</Logo>
				<HamburgerIcon
					onClick={() => {
						dispatch(setSidebar(!siteState.isSidebar));
					}}
				>
					<Icon name={siteState.isSidebar ? 'menuClose' : 'menu'} />
				</HamburgerIcon>
			</Container>
			<motion.div
				className="sidebar"
				initial={{
					transform: siteState.isSidebar
						? 'translateX(0%)'
						: 'translateX(100%)',
				}}
				animate={{
					transform: siteState.isSidebar
						? 'translateX(0%)'
						: 'translateX(100%)',
				}}
			>
				<Menu hamburger={true}>
					{siteState.menu?.map(
						(
							item: {
								name: string;
								link: string;
								icon: string;
							},
							i: number
						) => (
							<MenuItem key={i}>{item.name}</MenuItem>
						)
					)}
				</Menu>
				<HamburgerButtons>
					<Button
						bg={`rgb(${themeState.color.primary})`}
						color={`rgb(${themeState.color.white})`}
					>
						Download CV
					</Button>
				</HamburgerButtons>
			</motion.div>
		</HamburgerWrapper>
	);
};

export default Hamburger;
