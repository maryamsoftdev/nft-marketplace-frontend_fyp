import '../styles/globals.css'
//INTERNAL IMPORTS
import { navbar } from '../components/component-index';

const App =({ Component, pageProps })=> (

    <div>
    <navbar/>
    <Component {...pageProps} />
    </div>
);

export default App;
