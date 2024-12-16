import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (    
        <div className='relative'>
            {/* Title */}
            <h1 className='px-4 sm:px-[500px] bg-gray-200 font-bold text-4xl text-center sm:text-left'>
                Hello Nike App
            </h1>

            {/* Description */}
            <p className='px-4 sm:px-[450px] bg-gray-200 text-lg text-center sm:text-left'>
                Download the app to access everything nike. <a href="" className='text-blue-400'>Learn more</a>
            </p>

            {/* Image */}
            <div className='w-full relative'>
                <Image 
                    src="/bot.png" 
                    alt="Shoe" 
                    layout="responsive" // Makes image responsive
                    width={1440} // Width of the image
                    height={977} // Height of the image
                    className='object-cover' // Ensures image covers the area
                />
            </div>

            {/* First Look Title */}
            <div className='my-[10px] mx-4 sm:mx-[500px] font-bold text-xl text-center sm:text-left'>
                <p>First Look</p>
            </div>

            {/* Product Information */}
            <div>
                <h1 className='my-[5px] mx-4 sm:mx-[400px] font-bold text-4xl text-center sm:text-left'>
                    Nike Air Max Pulse
                </h1>
                <p className='my-4 mx-4 sm:mx-[400px] text-center sm:text-left'>
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;