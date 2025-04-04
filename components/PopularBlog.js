import React from 'react'
import { Button } from './ui/button'

const PopularBlog = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Blog 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
            </div>
          </div>
        </div>
        {/* Blog 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
            </div>
          </div>
        </div>
        {/* Blog 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PopularBlog