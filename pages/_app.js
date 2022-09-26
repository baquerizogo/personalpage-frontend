import "../styles/globals.css";
import Head from 'next/head';

import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from 'next-i18next';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return(
		<>
			<Head>
				<meta charSet="UTF-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Jose Baquerizo</title>

				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0,0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
		</>
	)
}

export default appWithTranslation(MyApp);