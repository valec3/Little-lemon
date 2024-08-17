import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false)
    const navigate = useNavigate()
    const handleSwitch = () => {
        setIsRegistering(!isRegistering)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        // Lógica para iniciar sesión
        console.log('Login submitted')
        // Redirigir a la página inicial
        navigate('/')
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        // Lógica para registrarse
        console.log('Register submitted')
        // Redirigir a la página inicial
        navigate('/')
    }

    return (
        <section className="bg-[#495e57] min-h-screen flex items-center justify-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isRegistering ? 'Register' : 'Login'}
                </h2>
                <form
                    onSubmit={
                        isRegistering ? handleRegisterSubmit : handleLoginSubmit
                    }
                    className="space-y-6"
                >
                    {isRegistering && (
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400"
                    >
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                </form>
                <button
                    onClick={handleSwitch}
                    className="mt-4 w-full text-yellow-500 hover:underline"
                >
                    {isRegistering
                        ? 'Already have an account? Login'
                        : 'Need an account? Register'}
                </button>
            </div>
        </section>
    )
}

export default Login
