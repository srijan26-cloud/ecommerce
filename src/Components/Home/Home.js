import Featured from './Featured'
import Banner from './Banner'
import Categories from './Categories'
import Header from './Header'
import Subscribe from './Subscribe'
import Topselling from './Topselling'


const Home = () => {
        return (
            <div>
                <Header />
                <Banner />
                <Topselling />
                <Categories/>
                <Featured />
                <Subscribe/>
            </div>
        )
}

export default Home
