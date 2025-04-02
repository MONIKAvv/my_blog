import React from 'react'

const Testimonial = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
            <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
            <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support We couldn `&quot;` t be happier with the results."</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
            <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial