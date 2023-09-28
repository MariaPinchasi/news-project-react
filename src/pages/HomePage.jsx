import Articles from "../components/Articles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Showcase from "../components/Showcase"

const HomePage = () => {
    return (
        <main>
            <Navbar />
            <Showcase />
            <Articles />
            <Footer />

        </main>
    )
}

export default HomePage