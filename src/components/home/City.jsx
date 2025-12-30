import React from 'react'
import CommonHead from '../common/CommonHead'
import nigeriaImg from '../../assets/aboutBg.jpg'
import london from '../../assets/london.png'
import { Link } from 'react-router'

const City = () => {
    return (
        <>
            <main id='City' className='my-[112px]'>
                <div className="container">
                    <div id="City-Row">
                        {/* ----------------- Header text ----------------- */}
                        <CommonHead head={'Project locations'} text={'Where we have delivered projects and provided consultancy support.'} />

                        {/* ----------------- Project locations (only Nigeria & United Kingdom) ----------------- */}
                        <section className='mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-stretch gap-6 px-4 md:px-6 lg:px-0'>
                            <Link to={'/projects'} className='relative rounded-[12px] cursor-pointer group overflow-hidden w-full sm:w-1/2 h-[320px] sm:h-[420px]' data-aos="fade-up">
                                <img className='w-full h-full object-cover rounded-[12px] group-hover:scale-[1.05] duration-500' src={nigeriaImg} alt="Nigeria" />
                                <article className="absolute bottom-6 left-6">
                                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Nigeria</h2>
                                    <p className='text-white text-sm sm:text-base'>Projects across Nigeria</p>
                                </article>
                            </Link>

                            <Link to={'/projects'} className='relative rounded-[12px] cursor-pointer group overflow-hidden w-full sm:w-1/2 h-[320px] sm:h-[420px]' data-aos="fade-up">
                                <img className='w-full h-full object-cover rounded-[12px] group-hover:scale-[1.05] duration-500' src={london} alt="United Kingdom" />
                                <article className="absolute bottom-6 left-6">
                                    <h2 className='text-xl sm:text-2xl font-bold text-white'>United Kingdom</h2>
                                    <p className='text-white text-sm sm:text-base'>Projects across the United Kingdom</p>
                                </article>
                            </Link>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default City