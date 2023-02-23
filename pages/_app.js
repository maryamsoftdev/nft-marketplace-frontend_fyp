import '../styles/globals.css'
//INTERNAL IMPORTS
import { Navbar } from '../components/component-index';

const App =({ Component, pageProps })=> (

    <>
    {/* <Navbar/> */}
    <Component {...pageProps} />
    </>
);

export default App;
