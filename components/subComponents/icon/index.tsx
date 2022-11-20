import React, { useState } from 'react';
import {
	AiOutlineAndroid,
	AiOutlineApple,
	AiOutlineAppstore,
	AiOutlineClose,
	AiOutlineFundProjectionScreen,
	AiOutlineGithub,
	AiOutlineGooglePlus,
	AiOutlineHome,
	AiOutlineMail,
	AiOutlineMenu,
	AiOutlineSkype,
	AiOutlineUser,
} from 'react-icons/ai';
import { BsCodeSquare, BsWordpress } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { MdOutlineColorLens, MdOutlineWeb } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';

const Icon = ({
	name,
}: {
	name:
		| 'code'
		| 'menu'
		| 'menuClose'
		| 'home'
		| 'project'
		| 'contact'
		| 'facebook'
		| 'github'
		| 'skype'
		| 'google'
		| 'freelancer'
		| 'user'
		| 'web'
		| 'design'
		| 'app'
		| 'wordpress'
		| 'android'
		| 'ios';
}) => {
	const [iconList] = useState({
		code: <BsCodeSquare />,
		menu: <AiOutlineMenu />,
		menuClose: <AiOutlineClose />,
		home: <AiOutlineHome />,
		project: <AiOutlineFundProjectionScreen />,
		contact: <AiOutlineMail />,
		facebook: <GrFacebookOption />,
		github: <AiOutlineGithub />,
		skype: <AiOutlineSkype />,
		google: <AiOutlineGooglePlus />,
		freelancer: <SiFreelancer />,
		user: <AiOutlineUser />,
		web: <MdOutlineWeb />,
		design: <MdOutlineColorLens />,
		app: <MdOutlineColorLens />,
		wordpress: <MdOutlineColorLens />,
		android: <AiOutlineAndroid />,
		ios: <AiOutlineApple />,
	});

	return iconList[name];
};

export default Icon;
