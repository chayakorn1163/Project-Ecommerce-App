        import React from 'react'
        import { assets } from '../assets/assets'

        const Footer = () => {
        return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                Laboris exercitation labore in dolor do ad sunt.Laboris
                exercitation labore in dolor do ad sunt.
                </p>
            </div>
            </div>

            <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600 mb-10">
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 mb-5 '>
                    <li>+66 095-331-6394</li>
                    <li>chayakon@gmail.com</li>
                </ul>
            </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Incididunt consequat aute do reprehenderit pariatur labore laborum sint adipisicing anim in.</p>
            </div>
        </div>
        );
        }

        export default Footer
