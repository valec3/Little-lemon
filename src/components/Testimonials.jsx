const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien vel sapien lacinia tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien vel sapien lacinia tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        id: 3,
        name: 'John Smith',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien vel sapien lacinia tincidunt. Nullam nec nunc nec nunc.',
    },
]

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-lg text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-600">
                                {testimonial.opinion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
