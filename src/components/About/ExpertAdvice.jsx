import React from 'react'
import expertImg from '../../assets/aboutImg.png'

const ExpertAdvice = () => {
  return (
    <>
        <main id='Expert-Advice' className='md:mt-[120px] mt-[80px]'>
            <div className="container">
                <div id="Expert-Advice-Row"  className='flex items-center justify-between flex-wrap gap-y-6'>
                    {/* ------------------ Expert Image ------------------ */}
                    <img src={expertImg} alt="Experts" data-aos="fade-up"/>

                    {/* ------------------ Expert texts ------------------ */}
                    <div className='md:w-[526px] w-full'>
                        <h2 className='md:text-[40px] text-xl text-headText font-bold md:leading-[50px] md:mb-10 mb-4' data-aos="fade-up">Integrated consultancy for sustainable, resilient buildings</h2>
                        <h2 className='md:text-base text-sm text-black font-base leading-[20px] mb-10' data-aos="fade-up">Akintos Atlas brings together engineering precision and sustainability expertise — offering MEP and structural design, energy modelling, environmental performance assessments, and project management to deliver high-performance buildings.</h2>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default ExpertAdvice