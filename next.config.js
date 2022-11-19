/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = removeImports({
	experimental: { esmExternals: true },
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
});
