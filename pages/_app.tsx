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
				<meta
					property="og:title"
					content="Mahadi Hasan - Full Stack Programmer"
				/>
				<meta
					property="og:description"
					content="I am a young professionals passionate about web development and design. My mission is to help you grow your business"
				/>
				<meta property="og:url" content="https://mahadidev.vercel.app" />
				<meta
					property="og:image"
					content="https://mahadidev.vercel.app/projects/kina_kata/thumbnail.png"
				/>
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
