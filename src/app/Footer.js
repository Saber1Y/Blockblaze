import React from 'react'
import data from '../utils/data.json';
import girl from "../../public/images/girl.png";
import knight from "../../public/images/Knight.png";
import Image from 'next/image';



const Footer = () => {
    return (
        <footer className='bg-primary relative content-center flex items-center flex-col md:flex-row p-4'>
            <div className=''>
                <Image src={knight} width={400} height={250} alt='knight' />
            </div>
            <div className='mb-4 md:mb-0'>
                <h1 className='text-2xl font-bold'>Blockblaze</h1>
                <p className='mt-2'>Your gateway to the future of gaming. Discover,<br /> play, and earn in the world of blockchain games.<br /> Join our community to explore a new era of interactive entertainment and digital ownership.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full my-9'>
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
            <div className='absolute bottom-[-5] right-0 p-4'>
                <Image src={girl} width={300} height={300} alt='Girl image' />
            </div>
        </footer>
    )
}

export default Footer
