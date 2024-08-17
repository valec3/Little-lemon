const About = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">
                            Our Story
                        </h3>
                        <p className="text-lg text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla facilisi. Sed ultrices leo ut ipsum
                            gravida, nec pretium odio efficitur. Nam vitae felis
                            et justo euismod tristique. Praesent vitae turpis
                            libero.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://imgs.search.brave.com/77wIB-LpyBqmo5xJube5XVhm-kp6cAzE5v-pVFKO4o4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjIy/MDA3ODY4L3Bob3Rv/L2ZyaWVuZGx5LXdh/aXRyZXNzLXNlcnZp/bmctY291cGxlLWF0/LWEtcmVzdGF1cmFu/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9S1pRa2k3b3FK/eWJIeTZ3OXBRa09I/TjltYmtDM1QxMkRX/VHUzWjhBVlI4QT0"
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
