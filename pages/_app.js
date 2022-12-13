import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className=" bg-mainbg min-h-screen text-white overflow-hidden relative">
				<Nav />
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
