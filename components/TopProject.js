import React from 'react'
import { Button } from './ui/button'

const TopProject = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Journey of Skilling up!</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">My path of self learning from basics to still learning</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Android App Development</p>
          <ul className="mt-6 mb-6 space-y-4">
            {/* <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li> */}
            <li className="text-gray-600 dark:text-gray-400">Calculator</li>
            <li className="text-gray-600 dark:text-gray-400">Tic Tac Toe Game</li>
          </ul>
          <Button className="mx-1" variant="outline">Happily Learning</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">JAVA</p>
          {/* <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">JAVA</span> */}
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Next.js and Tailwind css</li>
            <li className="text-gray-600 dark:text-gray-400">Prompt Engineering</li>
            <li className="text-gray-600 dark:text-gray-400">React.js </li>
            <li className="text-gray-600 dark:text-gray-400">Communication Skill</li>
            {/* <li className="text-gray-600 dark:text-gray-400">Journey towards Spirituality</li> */}
          </ul>
          <Button className="mx-1" variant="outline">Learning...</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Confident</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">React.js</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Bootstrap</li>
            <li className="text-gray-600 dark:text-gray-400">HTML, CSS, JS</li>
            <li className="text-gray-600 dark:text-gray-400">Mern Stack</li>
            <li className="text-gray-600 dark:text-gray-400">Wordpress</li>
            <li className="text-gray-600 dark:text-gray-400">Content Writing</li>
          </ul>
          <Button className="mx-1" variant="outline">Learning</Button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default TopProject