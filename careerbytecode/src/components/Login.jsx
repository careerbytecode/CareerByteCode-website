import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faPaperPlane,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedin,
    faGithub,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (

        <section className='section4-primary p-10'>
          
            <form class="max-w-md shadow-md backgroundcolor border border-blue-400 px-5 md:px-[20px] py-[25px] mx-auto text-white">
                <h1
                className="text-2xl font-bold mb-1 text-center"
                >Get Started Now</h1>
                <p
                className='text-sm font-medium mb-5 text-center'
                >Enter your credential to login your account</p>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='*******' />
                </div>
                <div class="flex justify-between items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 cursor-pointer" required />

                        <label for="remember" className="cursor-pointer ms-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
                    </div>


                    <p
                        className='text-sm cursor-pointer font-medium text-white'
                    > <a href="#">Forgotten Password</a></p>
                </div>
                <button type="submit" class="text-white backgroundcolor border shadow-sm border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 cursor-pointer text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                <div className='text-sm mt-5 font-medium text-white'>
                    Dont't have an account yet?
                    <a href="#" className='hover:underline hover:text-gray-200'> Sign Up Here</a>
                </div>


                <div>

                    <div className="flex space-x-4 mx-auto justify-center mt-10">
                        <span className="text-white rounded-full bg-black py-2 px-3 cursor-pointer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span className="text-white bg-blue-700 py-2 px-3 rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </span>
                        <span className=" text-white py-2 px-3 bg-black rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                        <span className="py-2 rounded-full px-3 bg-blue-900 text-white cursor-pointer">
                            <FontAwesomeIcon icon={faDiscord} />
                        </span>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default Login