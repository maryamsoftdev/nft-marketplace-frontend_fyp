import '../styles/globals.css'
//INTERNAL IMPORTS
import { Navbar, Footer } from '../components/component-index';

const App =({ Component, pageProps })=> (

    <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </div>
);

export default App;
