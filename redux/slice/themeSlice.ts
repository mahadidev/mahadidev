import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface themeState {
	color: {
		white: string;
		black: string;
		primary: string;
		secondary: string;
		text: string;
		textLight: string;
	};
	fontSize: {
		xs: string;
		sm: string;
		base: string;
		lg: string;
		xl: string;
		'2xl': string;
	};
	bg: string;
}

const initialState: themeState = {
	color: {
		white: '255 255 255',
		black: '0 0 0',
		primary: '0 111 255',
		secondary: '9 14 52',
		text: 'rgb(0 0 0 / 80%)',
		textLight: 'rgb(0 0 0 / 70%)',
	},
	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1.1rem',
		lg: '1.5rem',
		xl: '2.5rem',
		'2xl': '3rem',
	},
	bg: '#fff',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setColorPlate: (state, action: PayloadAction<themeState>) => {},
		setBg: (
			state,
			action: PayloadAction<{
				bg: string;
			}>
		) => {
			state.bg = action.payload.bg;
		},
	},
});

export const { setColorPlate, setBg } = themeSlice.actions;

export default themeSlice.reducer;
