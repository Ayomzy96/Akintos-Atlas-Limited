import React from 'react'
import CommonHead from '../components/common/CommonHead'

const JoinUs = () => {
  return (
    <main className='mt-[80px]'>
      <div className="container">
        <CommonHead head={'Join Us'} text={'Careers & opportunities at Akintos Atlas Limited. We welcome talented professionals passionate about sustainable built environment solutions.'} />

        <section className='mt-10 max-w-2xl'>
          <p className='text-subText mb-6'>We’re always looking for skilled engineers, energy analysts, project managers and sustainability consultants. To apply, send your CV and a short cover letter to <a className='underline' href='mailto:careers@akintosatlas.com'>careers@akintosatlas.com</a>.</p>

          <div className='mt-6'>
            <h4 className='font-semibold mb-2'>Open positions</h4>
            <ul className='list-disc pl-5 text-subText'>
              <li>Senior Energy Analyst</li>
              <li>MEP Engineer</li>
              <li>Project Manager</li>
              <li>Sustainability Consultant</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default JoinUs
