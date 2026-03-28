import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#FAF9F6' }}>

            <div className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 pt-24 pb-12 md:pt-32">

                {/* Left Side: Heading & Email */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left z-20 order-2 md:order-1 mt-12 md:mt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
                        Hey There, <br />
                        I'm Kunika
                    </h1>
                    <a href="mailto:kunikajain@gmail.com" className="text-rose-500 font-semibold text-base md:text-lg tracking-wide hover:text-rose-600 transition-colors">
                        kunikajain@gmail.com
                    </a>
                </div>

                {/* Center: Image with Abstract Shape */}
                <div className="w-full md:w-1/3 flex justify-center items-center relative z-10 order-1 md:order-2 mt-8 md:mt-0 px-4">
                    {/* Abstract Background Blob - Creates a modern asymmetrical shape similar to a brush stroke */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[340px] md:w-[350px] md:h-[420px] bg-[#2a7360] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 transform -rotate-12 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02] shadow-2xl"></div>

                    {/* Centered Image */}
                    <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center my-8 md:my-16">
                        <img
                            src="/image.png"
                            alt="Kunika Jain"
                            className="w-full h-full object-cover object-center rounded-full border-4 border-[#FAF9F6] shadow-xl"
                            style={{
                                /* Useful if the image has a generic white background, but the rounded-full forces a clean circle cut anyway */
                                objectPosition: 'center top'
                            }}
                        />
                    </div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right z-20 order-3 mt-12 md:mt-0 pl-0 md:pl-8">
                    <p className="text-slate-600 text-base md:text-lg max-w-[240px] font-medium leading-relaxed">
                        I design simple, intuitive, and engaging digital experiences.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Hero;
