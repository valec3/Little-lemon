import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <section>
            <Header />
            <Hero />
            <Products />
            <Testimonials />
            <About />
            <Footer />
        </section>
    )
}

export default Home
