import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const { composeWithDevTools } = require("redux-devtools-extension");
import { rootReducer } from "./reducers/rootReducer";
import {
	initialStreamingServiceReducerState,
	IStreamingServiceReducer,
} from "./reducers/streamingServiceReducer";

interface IStore {
	streamingService: IStreamingServiceReducer;
}

const initialStore: IStore = {
	streamingService: initialStreamingServiceReducerState,
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialStore,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
