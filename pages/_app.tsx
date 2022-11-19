import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Navigation } from '../components';
import { Provider, store } from '../redux';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>Mahadi Dev | Full Stack Developer</title>
			</Head>
			<header>
				<Navigation />
			</header>
			<main>
				<Component {...pageProps} />
			</main>
			<footer>
				<Footer />
			</footer>
		</Provider>
	);
}
