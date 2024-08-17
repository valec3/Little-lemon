import HeroImage from '../assets/hero.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className="bg-[#495e57] text-white flex flex-col md:flex-row items-center p-6 md:p-12 lg:py-28 justify-center">
            <div className="md:w-1/2 flex flex-col items-start space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">Little Lemon</h1>
                <h2 className="text-2xl md:text-3xl font-semibold">Chicago</h2>
                <p className="text-lg md:text-xl">
                    We are a family-owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
                <Link
                    to="reserve"
                    className="bg-[#f4ce14] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#e4be13]"
                >
                    Reserve now
                </Link>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <img
                    src={HeroImage}
                    alt="Hero"
                    className="w-[500px] h-[400px] rounded-lg shadow-lg"
                />
            </div>
        </section>
    )
}

export default Hero
