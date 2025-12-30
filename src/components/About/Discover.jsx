import React from 'react'
import { IoIosTrendingUp } from 'react-icons/io'
import learnBg from '../../assets/learnBg.png'
import { Link } from 'react-router'

const Discover = () => {
  return (
    <>
        <main id='Learn' className='md:mt-[100px] mt-[70px] relative' >
                <div className='w-full h-[100%] absolute top-0 left-0 -z-10 md:bg-fixed' style={{ backgroundImage: `url(${learnBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="container">
                    <div id="Learn-Row" className='md:py-[120px] py-[80px]'>
                        {/* ---------------------- texts  */}
                        <div className='flex flex-col items-center px-4 md:px-0'>
                            <h2 className='text-primary text-[28px] sm:text-[32px] md:text-[40px] font-bold text-center' data-aos="fade-up">Delivering sustainable, smart, and resilient solutions for the built environment</h2>
                            <p className='text-primary mt-4 mb-6 md:mb-10 text-center w-full sm:w-[90%] md:w-[600px] text-sm sm:text-base' data-aos="fade-up">From energy audits and retrofit strategies to full MEP design and project management — we combine data-led analysis with practical implementation to reduce carbon, improve comfort, and lower operational costs.</p>
                            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto' data-aos="fade-up">
                                <Link to={'/about'} className='text-primary bg-[#0057FF] w-full sm:w-[200px] text-center py-3 sm:py-4 rounded-[6px] cursor-pointer hover:bg-primary hover:text-brand duration-300 flex items-center gap-3 justify-center text-sm sm:text-base'>Learn More <IoIosTrendingUp className='text-xl' /></Link>
                                <Link to={'/services'} className='text-brand bg-primary w-full sm:w-[220px] text-center py-3 sm:py-4 rounded-[6px] cursor-pointer hover:bg-[#0057FF] hover:text-primary duration-300 flex items-center gap-3 justify-center text-sm sm:text-base'>Our Services <IoIosTrendingUp className='text-xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}

export default Discover