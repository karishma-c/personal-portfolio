import { Nunito } from 'next/font/google'
import './../styles/global.css';

const nunito = Nunito({ subsets: ['latin'] })

const App = ({ Component, pageProps }) => {

    return (
        <main className={nunito.className}>
           <Component {...pageProps} />
        </main>
    )

}    
    
export default App;