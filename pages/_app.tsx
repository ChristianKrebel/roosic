import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";

const _app = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
				/>
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
};

export default _app;
