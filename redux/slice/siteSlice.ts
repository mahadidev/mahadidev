import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface siteState {
	isSidebar: boolean;
	navHeight?: string | number | undefined;
	menu: {
		name: string;
		link: string;
		icon: string;
	}[];
	introBox: {
		title: string;
		value: string;
		icon: string;
	}[];
	services: {
		icon:
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
		title: string;
		description: string;
		buttonText: string;
	}[];
	project: {
		name: string;
		tag: string[];
		source: string | boolean;
		visit: string | boolean;
		thumbnail: string;
	}[];
	review: {
		client: {
			name: string;
			url: string;
			avatar: string;
		};
		title: string;
		url: string;
		feedback: string;
		star: number;
	}[];
	client: {
		name: string;
		logo: string;
		link: string;
	}[];
	social: {
		name: string;
		icon: string;
		link: string;
	}[];
	skill: {
		name: string;
		icon: string;
	}[];
}

const initialState: siteState = {
	isSidebar: false,
	navHeight: 0,
	menu: [
		{
			name: 'Home',
			link: '#',
			icon: 'home',
		},
		{
			name: 'Services',
			link: '#',
			icon: 'service',
		},
		{
			name: 'Skills',
			link: '#',
			icon: 'skill',
		},
		{
			name: 'Project',
			link: '#',
			icon: 'project',
		},
		{
			name: 'Contact',
			link: '#',
			icon: 'contact',
		},
	],
	introBox: [
		{
			title: 'TOTAL CLIENT',
			value: '20+',
			icon: 'user',
		},
		{
			title: 'SATISFIED CLIENT',
			value: '19+',
			icon: 'user',
		},
		{
			title: 'COMPLETED PROJECT',
			value: '50+',
			icon: 'code',
		},
		{
			title: 'INCOMPLETED CLIENT',
			value: '5+',
			icon: 'code',
		},
	],
	services: [
		{
			title: 'Backend Development',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elitdsdg egn Sollicitudin dignissim.',
			icon: 'app',
			buttonText: 'Get Now',
		},
		{
			title: 'Web Design',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elitdsdg egn Sollicitudin dignissim.',
			icon: 'web',
			buttonText: 'Get Now',
		},
		{
			title: 'Android Development',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elitdsdg egn Sollicitudin dignissim.',
			icon: 'android',
			buttonText: 'Get Now',
		},
		{
			title: 'IOS Development',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elitdsdg egn Sollicitudin dignissim.',
			icon: 'ios',
			buttonText: 'Get Now',
		},
	],
	project: [
		{
			name: 'Cosmetics Shop',
			tag: ['WordPress', 'jQuery', 'BootStrap'],
			thumbnail: 'projects/beauty_boulevard/thumbnail.png',
			source: false,
			visit: 'https://beauty-boulevard.se',
		},
		{
			name: 'Kina Kata',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			source: 'https://github.com/mahadidev/kina-kata',
			visit: 'https://kinakata.vercel.app',
			thumbnail: 'projects/kina_kata/thumbnail.png',
		},
		{
			name: 'Equipment Rental',
			tag: ['React', 'BootStrap'],
			visit: false,
			source: false,
			thumbnail: 'projects/geo_rental_ab/thumbnail.png',
		},
		{
			name: 'Delivery Services',
			tag: ['React', 'BootStrap'],
			visit: 'https://stockholmseltech.se',
			source: false,
			thumbnail: 'projects/stockholmseltech/thumbnail.png',
		},
		{
			name: 'UK Restaurant',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			visit: 'https://www.ohindia.co.uk/',
			source: false,
			thumbnail: 'projects/oh_india/thumbnail.png',
		},
		{
			name: 'Restaurant Website',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			visit: false,
			source: false,
			thumbnail: 'projects/on_india_2/thumbnail.png',
		},
		{
			name: 'Halal Foods',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			visit: false,
			source: false,
			thumbnail: 'projects/halal_food/thumbnail.png',
		},
		{
			name: 'AVS Portal',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			visit: false,
			source: false,
			thumbnail: 'projects/avs_portal/thumbnail.png',
		},
		// {
		// 	name: 'Engineering Company',
		// 	tag: ['WordPress', 'PHP', 'JavaScript', 'BootStrap'],
		// 	visit: false,
		// 	source: false,
		// 	thumbnail: 'projects/haynes_cad/thumbnail.png',
		// },
	],
	review: [
		{
			client: {
				name: 'Yierpan A.',
				url: 'https://www.freelancer.com/u/erpan42',
				avatar:
					'https://cdn2.f-cdn.com/ppic/184425572/logo/45572604/s7F3k/profile_logo_SKYMO_61295fd3b32b90630e710498ae3b0140.jpg',
			},
			title:
				'Do some changes into an existing website(in React & tailwindcss) ',
			url: 'https://www.freelancer.com/projects/tailwind-css/some-changes-into-existing-website',
			feedback:
				'Super easy to work with him Great communication skill Highly recommend',
			star: 5,
		},
		{
			client: {
				name: 'Md Nasir U.',
				url: 'https://www.freelancer.com/u/Nasir241',
				avatar:
					'https://cdn6.f-cdn.com/ppic/163692322/logo/45154449/9skEN/profile_logo_KFLYW_ce39e06eea88d7b30bd3395c99e410d2.jpg',
			},
			title: 'Project for Mahadi H. -- 2 ',
			url: 'https://www.freelancer.com/projects/api/Project-for-Mahadi-34382112',
			feedback:
				'I had the opportunity to do several works with him and they were all impeccable.',
			star: 5,
		},
		{
			client: {
				name: 'Eben C.',
				url: 'https://www.freelancer.com/u/ebenezercoetzer',
				avatar:
					'https://cdn6.f-cdn.com/ppic/182882754/logo/27616347/aeQcK/profile_logo_DTQNT_db54aa7b6a0b10760266817384c05c7a.jpeg',
			},
			title: 'Help with PHP Problem ',
			url: 'https://www.freelancer.com/projects/php/Help-with-PHP-Problem',
			feedback:
				'Mahadi is a brilliant developer with a lot of talent and a work rate to match.',
			star: 5,
		},
		{
			client: {
				name: 'Hani A.',
				url: 'https://www.freelancer.com/u/adel980',
				avatar:
					'https://cdn2.f-cdn.com/ppic/1876213/logo/2648366/logo_isolated.png',
			},
			title:
				'Laravel developer NEEDED NOW to do change in 2 hours -- START IMMEDIATELY  ',
			url: 'https://www.freelancer.com/projects/laravel/Laravel-developer-NEEDED-NOW-change',
			feedback: 'hieghly recommended. quality and on time delivery.  ',
			star: 5,
		},
	],
	client: [
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
		{
			name: 'name',
			logo: '',
			link: '',
		},
	],
	social: [
		{
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/mahadidev',
		},
		{
			name: 'Stack Overflow',
			icon: 'stackoverflow',
			link: 'https://stackoverflow.com/users/19997598/mahadi-hasan',
		},
		{
			name: 'Kinkedin',
			icon: 'linkedin',
			link: 'https://www.linkedin.com/in/mahadi-hasan-99080a237/',
		},
		{
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/mrakuji/',
		},
		{
			name: 'Youtube',
			icon: 'youtube',
			link: '#',
		},
		{
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/mahadidev/',
		},
		{
			name: 'WhatsApp',
			icon: 'whatsapp',
			link: 'https://wa.me/+8801408094722',
		},
		{
			name: 'Google',
			icon: 'google',
			link: 'mailto:mahadi.dev.pm@gmail.com',
		},
		{
			name: 'Freelancer',
			icon: 'freelancer',
			link: 'https://www.freelancer.com/u/mahadihasan0636',
		},
		{
			name: 'NPM',
			icon: 'npm',
			link: 'https://www.npmjs.com/~mahadidev',
		},
	],
	skill: [
		{
			name: 'JavaScript',
			icon: 'javascript',
		},
		{
			name: 'React',
			icon: 'react',
		},
		{
			name: 'PHP',
			icon: 'php',
		},
		{
			name: 'Laravel',
			icon: 'laravel',
		},
		{
			name: 'Nextjs',
			icon: 'nextjs',
		},
		{
			name: 'Redux',
			icon: 'redux',
		},
		{
			name: 'TypeScript',
			icon: 'typescript',
		},
		{
			name: 'Tailwind',
			icon: 'tailwind',
		},
		{
			name: 'Wordpress',
			icon: 'wordpress',
		},
	],
};

export const themeSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setSidebar: (state, action: PayloadAction<boolean>) => {
			state.isSidebar = action.payload;
		},
		setNavHeight: (state, action: PayloadAction<number>) => {
			state.navHeight = action.payload;
		},
	},
});

export const { setSidebar, setNavHeight } = themeSlice.actions;

export default themeSlice.reducer;
