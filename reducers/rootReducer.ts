import { combineReducers } from "redux";
import streamingServiceReducer, {
	IStreamingServiceReducer,
} from "./streamingServiceReducer";

interface IRootReducer {
	streamingService: (
		state: IStreamingServiceReducer,
		action: any,
	) => IStreamingServiceReducer;
}

const reducers: IRootReducer = {
	streamingService: streamingServiceReducer,
};

export const rootReducer = combineReducers(reducers);
