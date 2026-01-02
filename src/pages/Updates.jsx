import React from 'react'
import thumb from '../assets/Icon1.png'

const updates = [
  {
    id: 1,
    title: 'Barnsbury phase 1 complete',
    excerpt: 'Phase 1 delivery completed with sustainability milestones achieved.',
    thumb,
    twitter: 'https://twitter.com',
    website: '#'
  },
  {
    id: 2,
    title: 'Leven Road - Towers progress',
    excerpt: 'Structural works at Leven Road are now above ground and progressing.',
    thumb,
    twitter: '#',
    website: '#'
  }
]

const Updates = () => {
  return (
    <section className='my-16'>
      <div className='container px-4 md:px-6'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>News & Updates</h2>
          <p className='text-sm text-subText mt-2'>Latest project updates, press and social links.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {updates.map(u => (
            <article key={u.id} className='bg-white rounded-[12px] p-4 shadow-sm'>
              <div className='flex gap-4'>
                <img src={u.thumb} alt={u.title} className='w-24 h-16 object-cover rounded' />
                <div>
                  <h3 className='text-lg font-medium'>{u.title}</h3>
                  <p className='text-xs text-subText mb-2'>{u.excerpt}</p>
                  <div className='flex items-center gap-3'>
                    {u.twitter && <a href={u.twitter} target='_blank' rel='noreferrer' className='text-xs text-blue-600'>Twitter</a>}
                    {u.website && <a href={u.website} target='_blank' rel='noreferrer' className='text-xs text-blue-600'>Website</a>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates
