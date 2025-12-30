import React from 'react'
import CommonHead from '../components/common/CommonHead'

const serviceList = [
  'Building Engineering Design (MEP, civil & structural)',
  'Energy & Environmental Consulting (energy modelling & audits)',
  'Sustainable Design Advisory (low-carbon strategies)',
  'Project Management & Technical Oversight',
  'Retrofit & Building Upgrade Services',
  'Planning & Development Advisory (feasibility & masterplanning)',
  'Digital Building Analytics (thermal, daylight & comfort modelling)',
  'Technical Surveys & Diagnostics (condition surveys & inspections)',
  'Smart Building Integration (BMS, IoT monitoring)',
  'Importation & Supply of Engineering Systems',
  'Professional Training & Capacity Building',
  'Development Policy & Government Engagement'
]

const Services = () => {
  return (
    <main className='mt-[80px]'>
      <div className="container">
        <CommonHead head={'Our Services'} text={'Integrated services across engineering design, energy performance and sustainability to deliver resilient, high-performing buildings.'} />

        <section className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {serviceList.map((s, i) => (
            <div key={i} className='p-6 shadow-md rounded-md' data-aos="fade-up">
              <h3 className='font-semibold text-lg text-headText mb-2'>{s}</h3>
              <p className='text-subText text-sm'>We deliver practical, data-driven solutions and implementation support for this service area.</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Services
