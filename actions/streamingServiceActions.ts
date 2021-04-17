import { SET_STREAMING_SERVICE_TOKEN } from "./types";

export const setStreamingServiceToken = (token: string) => (dispatch): void => {
	dispatch({
		type: SET_STREAMING_SERVICE_TOKEN,
		payload: token,
	});
};
