import { NextApiRequest, NextApiResponse } from "next";
import { isDev } from "../../../../utils/misc";
require("dotenv").config();

export default (req: NextApiRequest, res: NextApiResponse) => {
	const {
		headers: { host },
	} = req;

	const scopes: string =
		"streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state";
	const redirectUri: string = `http${isDev() ? "" : "s"}://${host}`;

	res.redirect(
		"https://accounts.spotify.com/authorize" +
			"?response_type=code" +
			"&client_id=" +
			process.env.SPOTIFY_CLIENT_ID +
			(scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
			"&redirect_uri=" +
			encodeURIComponent(redirectUri),
	);
};
