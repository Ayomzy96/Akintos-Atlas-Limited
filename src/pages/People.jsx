import React from 'react'
import CommonHead from '../components/common/CommonHead'
import SingleAgent from '../components/common/SingleAgent'
import agent1 from '../assets/agent1.png'
import agent2 from '../assets/agent2.png'
import agent3 from '../assets/agent3.png'
import agent4 from '../assets/agent4.png'

const People = () => {
  return (
    <main className='mt-[80px]'>
      <div className="container">
        <CommonHead head={'Our People'} text={'A multidisciplinary team of engineers, energy analysts and project managers delivering integrated consultancy.'} />

        <section className='mt-10 flex flex-wrap gap-6'>
          <SingleAgent img={agent1} name={'Tosin Akinrinde'} role={'Managing Director'} />
          <SingleAgent img={agent2} name={'Chinaza Okonkwo'} role={'Senior Energy Analyst'} />
          <SingleAgent img={agent3} name={'Emeka Johnson'} role={'Lead MEP Engineer'} />
          <SingleAgent img={agent4} name={'Aisha Bello'} role={'Project Manager'} />
        </section>
      </div>
    </main>
  )
}

export default People
