import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/component-index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;