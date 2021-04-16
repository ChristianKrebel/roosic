const withImages = require("next-images");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA(
	withImages({
		pwa: {
			dest: "public",
			runtimeCaching,
			disable: process.env.NODE_ENV === "development",
			register: true,
		},
		future: { webpack5: true },
	}),
);
