const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Little Lemon. All rights
                    reserved.
                </p>
                <div className="mt-4">
                    <a
                        href="#home"
                        className="text-gray-400 hover:text-white mx-2"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-gray-400 hover:text-white mx-2"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-400 hover:text-white mx-2"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
