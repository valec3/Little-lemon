import Plate1Image from '../assets/plate1.jpg'
import Plate2Image from '../assets/plate2.svg'
import Plate3Image from '../assets/plate3.jfif'
const Products = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center">Our Menu</h2>
            <p className="text-center text-gray-600 mt-2">
                We offer a variety of Mediterranean dishes, made with fresh and
                locally-sourced ingredients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={Plate1Image}
                        alt="Plate 1"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Hummus</h3>
                        <p className="text-gray-600 mt-2">
                            A creamy dip made from chickpeas, tahini, lemon
                            juice, and garlic.
                        </p>
                        <p className="text-gray-600 mt-2">$6.99</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={Plate2Image}
                        alt="Plate 2"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Falafel</h3>
                        <p className="text-gray-600 mt-2">
                            Deep-fried balls made from ground chickpeas, fava
                            beans, or both.
                        </p>
                        <p className="text-gray-600 mt-2">$8.99</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={Plate3Image}
                        alt="Plate 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Baklava</h3>
                        <p className="text-gray-600 mt-2">
                            A rich, sweet pastry made of layers of filo filled
                            with chopped nuts.
                        </p>
                        <p className="text-gray-600 mt-2">$4.99</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
