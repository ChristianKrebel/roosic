const withImages = require("next-images");
const withPWA = require("next-pwa");

module.exports = withPWA(
	withImages({
		pwa: {
			dest: "public",
			disable: process.env.NODE_ENV === "development",
		},
		future: { webpack5: true },
	}),
);
