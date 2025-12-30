import React from 'react'
import CommonHead from '../components/common/CommonHead'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'
import house4 from '../assets/house4.png'

const Projects = () => {
  const sample = [house1, house2, house3, house4]
  return (
    <main className='mt-[80px]'>
      <div className="container">
        <CommonHead head={'Projects'} text={'Selected projects and case studies demonstrating our multidisciplinary approach to engineering, energy and sustainability.'} />

        <section className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {sample.map((img, idx) => (
            <div key={idx} className='rounded-md overflow-hidden shadow-md' data-aos="fade-up">
              <img src={img} alt={`Project ${idx+1}`} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h4 className='font-semibold text-headText'>Project {idx+1}</h4>
                <p className='text-subText text-sm'>Brief description of scope and outcomes (energy savings, retrofit, MEP delivery).</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Projects
