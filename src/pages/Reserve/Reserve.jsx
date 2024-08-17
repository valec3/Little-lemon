import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Usa useNavigate para la redirección

const Reserve = () => {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // Lógica para enviar los datos del formulario, si es necesario

        // Mostrar el modal de éxito
        setShowModal(true)

        // Redirigir a la página inicial después de 2 segundos
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <section className="h-screen px-4 py-12 bg-[#495e57]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white">
                    Reserve a Table
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="time"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Time
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="guests"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                required
                                min="1"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="occasion"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Occasion
                            </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Wedding</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400"
                    >
                        Reserve Now
                    </button>

                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 className="text-lg font-semibold mb-4">
                                    Success!
                                </h3>
                                <p>
                                    Your reservation has been made.
                                    Redirecting...
                                </p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Reserve
