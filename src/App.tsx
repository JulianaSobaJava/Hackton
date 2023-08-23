import Footer from './components/footer'
import Banner from './components/banner'
import Search from './components/search'
import Header from './components/header'
import { LangProvider } from './hook/useContext'


function App() {
    return (
        <LangProvider>
            <main >
                <Header />
                <Banner />
                <Search />
                <Footer />
            </main>
        </LangProvider>
    )
}

export default App
