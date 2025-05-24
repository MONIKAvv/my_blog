import React from 'react'

const Testimonial = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Currently Learning</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">My Focus on Learning</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">&quot;Java , Swing and database connectivity with MYSQL Workbanch&quot;</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Self Learning</h3>
            <p className="text-gray-500 dark:text-gray-300">From Youtube and Websites</p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">&quot;Android App Development &quot;</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Course</h3>
            <p className="text-gray-500 dark:text-gray-300">From Udemy and Youtube</p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <p className="text-gray-600 dark:text-gray-400">&quot;Software Testing &quot;</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Working</h3>
            <p className="text-gray-500 dark:text-gray-300">At Company </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial