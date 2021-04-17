import { SET_STREAMING_SERVICE_TOKEN } from "../actions/types";

export interface IStreamingServiceReducer {
	token: string | null;
}

export const initialStreamingServiceReducerState: IStreamingServiceReducer = {
	token: null,
};

const streamingServiceReducer = (
	state = initialStreamingServiceReducerState,
	action,
) => {
	const { type, payload } = action;
	switch (type) {
		case SET_STREAMING_SERVICE_TOKEN:
			return {
				...state,
				token: payload,
			};
		default:
			return state;
	}
};

export default streamingServiceReducer;
