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
	AiOutlinePhone,
	AiOutlineSkype,
	AiOutlineUser,
} from 'react-icons/ai';
import { BsCodeSquare, BsWordpress } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import {
	MdOutlineColorLens,
	MdOutlineLocationOn,
	MdOutlineWeb,
} from 'react-icons/md';
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
		| 'ios'
		| 'email'
		| 'phone'
		| 'location';
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
		email: <AiOutlineMail />,
		phone: <AiOutlinePhone />,
		location: <MdOutlineLocationOn />,
	});

	return iconList[name];
};

export default Icon;
