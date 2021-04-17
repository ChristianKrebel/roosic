enum TokenUrlParamNames {
	Spotify = "code",
}

export interface IRouterQuery {
	query: { [x in TokenUrlParamNames]: string };
}

export default TokenUrlParamNames;
