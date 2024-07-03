import React from 'react';
import Segment from '@/components/Segment';
import data from '../utils/data.json';



const Unlock = () => {
    return (
        <section className='my-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Unlock the Power Of Blockchain gaming</h1>
                <p className='font-raleway'>Explore our comprehensive <span className='inline-block text-primary'>guides, tutorials,</span> and <span className='inline-block text-primary'>resources</span> to master the world of blockchain gaming and NFTs.</p>
            </div>
            <div>
                {data.map((item, index) => (
                    <Segment
                        key={index}
                        number={item.number}
                        header={item.header}
                        details={item.details}
                    />
                ))}
            </div>
        </section>
    )
}

export default Unlock
