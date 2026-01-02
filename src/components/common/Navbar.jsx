import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router'
import { IoCallOutline } from 'react-icons/io5'
const Navbar = () => {
  return (
    <>
        <nav id='Nav' className='hidden lg:block'>
            <div className="container">
                <div id="Nav-Row" className='py-5 flex items-center justify-between'>
                    {/* ---------------- Logo  */}
                    <Link to={'/'}><img className='w-[110px]' src={logo} alt="Logo" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="800"/></Link>

                    {/* ---------------- Nav Links  */}
                    <ul className='flex items-center gap-7 text-brand font-medium'>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1000"><Link id='HoverLinks' to={'/'}>HOME</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1100"><Link id='HoverLinks' to={'/about'}>ABOUT</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1300"><Link id='HoverLinks' to={'/services'}>SERVICES</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1400"><Link id='HoverLinks' to={'/projects'}>PROJECTS</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1500"><Link id='HoverLinks' to={'/join-us'}>JOIN US</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1600"><Link id='HoverLinks' to={'/contact'}>CONTACT</Link></li>
                    </ul>

                    {/* ---------------- Nav Links  */}
                    <div className='flex items-center gap-6'>
                        <div data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="2200">
                            <Link id='HoverLinks' to={'/'} className='flex items-center gap-2 text-brand font-medium'>
                                <IoCallOutline className='text-2xl' />
                                +234 909 671 0315 <br />+4407459478486
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar