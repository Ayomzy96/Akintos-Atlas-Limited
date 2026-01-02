import React from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Oluwatosin Akinrinde Tobi',
    role: 'CEO & Managing Director',
    image: 'https://kdijhjnkxkrfjlyavcoe.supabase.co/storage/v1/object/public/Akintos%20Atlas%20ltd/Tosin%20006.jpg',
    email: 'tosinakinrinde@akintosatlas.com',
    phone: '+234 909 671 0315',
    location: 'Lagos, Nigeria',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
    expertise: [
      'Building Services Engineering',
      'Energy Performance',
      'Sustainable Design'
    ],
    portfolioValue: '£0.5B+',
    notableProjects: [
      'Barnsbury Estate regeneration',
      'Leven Road three-tower development',
      'Regent College',
      'Wembley regeneration'
    ],
    qualifications: [
      'MSc Building Services Engineering',
      'BSc Building',
      'Member, Chartered Institution of Building Services Engineers (CIBSE)',
      'Member, Nigerian Institute of Building (NIOB)',
      'OCDEA, NDEA, LCC Certified',
      'Health & Safety Certified (Levels 1, 2, & 3)'
    ],
    bio: `As the lead visionary, Tobi combines deep and extensive expertise in building services engineering, energy and sustainability engineering to transform buildings into high-performance, efficient and environmentally responsible spaces. With a portfolio exceeding ${"\u00A3"}0.5 billion in construction value, Tobi has shaped iconic landscapes across the UK and Nigeria.`
  },
  {
    id: 2,
    name: 'Chinaza Okonkwo',
    role: 'Senior Energy Analyst',
    email: 'chinaza.okonkwo@akintosatlas.com',
    phone: '+234 803 000 0000',
    location: 'Abuja, Nigeria',
    socials: { linkedin: '#' },
    expertise: [],
    notableProjects: [],
    qualifications: [],
    bio: 'Delivers energy modelling and sustainability advisory.'
  },
  {
    id: 3,
    name: 'Emeka Johnson',
    role: 'Lead MEP Engineer',
    email: 'emeka.johnson@akintosatlas.com',
    phone: '+234 802 111 2222',
    location: 'Lagos, Nigeria',
    socials: { linkedin: '#' },
    expertise: [],
    notableProjects: [],
    qualifications: [],
    bio: 'Design lead for MEP systems and technical coordination.'
  },
  {
    id: 4,
    name: 'Aisha Bello',
    role: 'Project Manager',
    email: 'aisha.bello@akintosatlas.com',
    phone: '+44 7747 594786',
    location: 'London, United Kingdom',
    socials: { linkedin: '#', instagram: '#' },
    expertise: [],
    notableProjects: [],
    qualifications: [],
    bio: 'Coordinates delivery and client communications in international projects.'
  },
  {
    id: 5,
    name: 'Placeholder',
    role: 'To be assigned',
    email: 'placeholder@example.com',
    phone: '+000 000 0000',
    location: 'TBD',
    socials: {},
    expertise: [],
    notableProjects: [],
    qualifications: [],
    bio: 'This is a placeholder for a team member. Replace with real details.'
  }
]

const Avatar = ({ name, image }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className='w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm'
      />
    )
  }

  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('')
  return (
    <div
      className='w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-semibold'
      style={{ backgroundColor: 'var(--color-accent, #2f9e44)' }}
    >
      {initials}
    </div>
  )
}

const Team = () => {
  return (
    <section id='Meet-Our-Team' className='my-16'>
      <div className="container px-4 md:px-6">
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Meet Our Team</h2>
          <p className='text-sm text-subText mt-2'>Dedicated professionals behind our projects. Contact any team member for specific enquiries.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
          {teamMembers.map(member => (
            <div key={member.id} className='bg-white rounded-[12px] p-5 shadow-sm h-full flex flex-col justify-between'>
              <div>
                <div className='flex items-center gap-5 md:gap-6 mb-3'>
                  <Avatar name={member.name} image={member.image} />
                  <div>
                    <h3 className='text-lg font-medium text-headText'>{member.name}</h3>
                    <p className='text-sm text-subText'>{member.role}</p>
                  </div>
                </div>

                <p className='text-sm text-subText mb-3'>{member.bio}</p>

                {/* Expertise */}
                <div className='mb-2'>
                  <div className='text-sm font-medium text-headText mb-1'>Expertise</div>
                  <div className='flex flex-wrap gap-2'>
                    {(member.expertise && member.expertise.length > 0)
                      ? member.expertise.map((e, i) => (
                          <span key={i} className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-800'>{e}</span>
                        ))
                      : <span className='text-xs px-2 py-1 rounded bg-gray-50 text-gray-500'>To be added</span>
                    }
                  </div>
                </div>

                {/* Highlights: portfolio & projects */}
                <div className='mb-2 text-sm text-headText'>
                  <div className='font-medium mb-1'>Highlights</div>
                  <div className='text-xs text-subText mb-1'>{member.portfolioValue ? `Portfolio: ${member.portfolioValue}` : 'Portfolio: N/A'}</div>
                  <div className='text-xs text-subText'>
                    {(member.notableProjects && member.notableProjects.length > 0)
                      ? (<ul className='list-disc ml-4'>{member.notableProjects.map((p, idx) => <li key={idx} className='text-xs'>{p}</li>)}</ul>)
                      : <div className='text-xs text-gray-500'>Notable projects: To be added</div>
                    }
                  </div>
                </div>

                {/* Qualifications */}
                <div className='mb-3'>
                  <div className='text-sm font-medium text-headText mb-1'>Qualifications</div>
                  {(member.qualifications && member.qualifications.length > 0)
                    ? (<ul className='list-disc ml-4 text-xs'>{member.qualifications.map((q, i) => <li key={i}>{q}</li>)}</ul>)
                    : <div className='text-xs text-gray-500'>Qualifications: To be added</div>
                  }
                </div>

                <div className='text-sm text-headText space-y-1 mb-3'>
                  <div><strong>Email:</strong> {member.email ? <a className='text-blue-600 hover:underline' href={`mailto:${member.email}`}>{member.email}</a> : 'N/A'}</div>
                  <div><strong>Phone:</strong> {member.phone ? <a className='text-blue-600 hover:underline' href={`tel:${member.phone}`}>{member.phone}</a> : 'N/A'}</div>
                  <div><strong>Location:</strong> {member.location || 'N/A'}</div>
                </div>
              </div>

              <div className='mt-2 flex items-center gap-2 flex-wrap'>
                {member.socials && member.socials.twitter && <a className='text-sm px-3 py-1 rounded bg-[#ecfdf3] text-[#166534]' href={member.socials.twitter} target='_blank' rel='noreferrer'>Twitter</a>}
                {member.socials && member.socials.linkedin && <a className='text-sm px-3 py-1 rounded bg-[#ecfdf3] text-[#166534]' href={member.socials.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a>}
                {member.socials && member.socials.instagram && <a className='text-sm px-3 py-1 rounded bg-[#ecfdf3] text-[#166534]' href={member.socials.instagram} target='_blank' rel='noreferrer'>Instagram</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
