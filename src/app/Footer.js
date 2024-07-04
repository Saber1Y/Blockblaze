import React from 'react'
import data from '../utils/data.json';

const Footer = () => {
    return (
        <footer className='bg-primary flex flex-col md:flex-row p-4'>
            <div className='mb-4 md:mb-0'>
                <h1 className='text-2xl font-bold'>Blockblaze</h1>
                <p className='mt-2'>Your gateway to the future of gaming. Discover, play, and earn in the world of blockchain games. Join our community to explore a new era of interactive entertainment and digital ownership.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full'>
                {data.footerLinks.map((link, index) => (
                    <div key={index} className='mb-4 md:mb-0 md:mx-4'>
                        <h3 className='text-xl font-semibold'>{link.title}</h3>
                        <ul className='mt-2'>
                            {link.links.map((item, itemIndex) => (
                                <li key={itemIndex} className='mt-1'>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
