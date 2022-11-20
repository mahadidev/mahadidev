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
		link: string | boolean;
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
			link: 'https://beauty-boulevard.se',
			thumbnail: 'projects/beauty_boulevard/thumbnail.png',
		},
		{
			name: 'Kina Kata',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			link: '#',
			thumbnail: 'projects/kina_kata/thumbnail.png',
		},
		{
			name: 'Equipment Rental',
			tag: ['React', 'BootStrap'],
			link: '#',
			thumbnail: 'projects/geo_rental_ab/thumbnail.png',
		},
		{
			name: 'Delivery Services',
			tag: ['React', 'BootStrap'],
			link: 'https://stockholmseltech.se',
			thumbnail: 'projects/stockholmseltech/thumbnail.png',
		},
		{
			name: 'UK Restaurant',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			link: 'https://www.ohindia.co.uk/',
			thumbnail: 'projects/oh_india/thumbnail.png',
		},
		{
			name: 'Restaurant Website',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			link: '#',
			thumbnail: 'projects/on_india_2/thumbnail.png',
		},
		{
			name: 'Halal Foods',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			link: '#',
			thumbnail: 'projects/halal_food/thumbnail.png',
		},
		{
			name: 'AVS Portal',
			tag: ['HTML', 'BootStrap', 'jQuery', 'PHP'],
			link: '#',
			thumbnail: 'projects/avs_portal/thumbnail.png',
		},
		// {
		// 	name: 'Engineering Company',
		// 	tag: ['WordPress', 'PHP', 'JavaScript', 'BootStrap'],
		// 	link: 'https://beauty-boulevard.se',
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
