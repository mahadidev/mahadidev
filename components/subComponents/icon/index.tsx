import React, { useState } from 'react';
import {
	AiFillLinkedin,
	AiOutlineAndroid,
	AiOutlineApple,
	AiOutlineAppstore,
	AiOutlineClose,
	AiOutlineDownload,
	AiOutlineFundProjectionScreen,
	AiOutlineGithub,
	AiOutlineGooglePlus,
	AiOutlineHome,
	AiOutlineMail,
	AiOutlineMenu,
	AiOutlinePhone,
	AiOutlineSkype,
	AiOutlineUser,
	AiOutlineWhatsApp,
	AiOutlineYoutube,
} from 'react-icons/ai';
import { BsCodeSquare, BsWordpress } from 'react-icons/bs';
import { CiInstagram } from 'react-icons/ci';
import {
	DiJavascript,
	DiNpm,
	DiPhp,
	DiReact,
	DiStackoverflow,
	DiWordpress,
} from 'react-icons/di';
import { FaLaravel, FaPhp } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import {
	MdOutlineColorLens,
	MdOutlineLocationOn,
	MdOutlineWeb,
} from 'react-icons/md';
import {
	SiFreelancer,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

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
		| 'instagram'
		| 'whatsapp'
		| 'freelancer'
		| 'user'
		| 'download'
		| 'web'
		| 'design'
		| 'app'
		| 'wordpress'
		| 'android'
		| 'ios'
		| 'email'
		| 'phone'
		| 'location'
		| 'linkedin'
		| 'youtube'
		| 'npm'
		| 'javascript'
		| 'react'
		| 'php'
		| 'laravel'
		| 'nextjs'
		| 'redux'
		| 'typescript'
		| 'tailwind'
		| 'wordpress'
		| 'stackoverflow';
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
		instagram: <CiInstagram />,
		whatsapp: <AiOutlineWhatsApp />,
		freelancer: <SiFreelancer />,
		user: <AiOutlineUser />,
		web: <MdOutlineWeb />,
		design: <MdOutlineColorLens />,
		app: <MdOutlineColorLens />,
		android: <AiOutlineAndroid />,
		ios: <AiOutlineApple />,
		email: <AiOutlineMail />,
		phone: <AiOutlinePhone />,
		location: <MdOutlineLocationOn />,
		stackoverflow: <DiStackoverflow />,
		linkedin: <AiFillLinkedin />,
		youtube: <AiOutlineYoutube />,
		npm: <DiNpm />,
		javascript: <DiJavascript />,
		react: <DiReact />,
		php: <FaPhp />,
		laravel: <FaLaravel />,
		nextjs: <TbBrandNextjs />,
		redux: <SiRedux />,
		typescript: <SiTypescript />,
		tailwind: <SiTailwindcss />,
		wordpress: <DiWordpress />,
		download: <AiOutlineDownload />,
	});

	return iconList[name];
};

export default Icon;
