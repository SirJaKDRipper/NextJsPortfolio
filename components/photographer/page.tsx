import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';
import Anuda1 from '../../public/anuda9.jpeg';
import img5 from '../../public/img5.jpeg';
import img10 from '../../public/img10.jpeg';
import img7 from '../../public/img7.jpeg';
import img9 from '../../public/img9.jpeg';
import img6 from '../../public/img6.jpeg';
import img8 from '../../public/img8.jpeg';
import img3 from '../../public/img3.jpeg';
import img2 from '../../public/img2.jpeg';

export const Photographer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mx-5 md:mx-20 text-center md:text-left">
        <div className="lg:w-4/5">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl">P H O T O G R A P H E R</p>
          <p className="text-xl md:text-2xl mt-5">Wild-Life & Landscape</p>
          <p className="text-5xl mt-5">Hi, I&apos;m <span className='text-orange-400'>Anuda Gunarathna</span></p>
          <p className="text-3xl md:text-4xl mt-5">from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={Anuda1} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-5'/>
        </div>
      </div>

      <div className="ml-10 md:ml-20 mt-20 flex flex-col md:flex-row md:gap-2">
        <Image src={img10} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 text-center md:text-left mt-5 md:mt-40 mr-20">
          <h1 className='text-2xl lg:text-3xl xl:text-4xl italic ml-10 mt-10 lg:-mt-10 xl:mt-20 md:-mt-20'> <span className='text-9xl'>&quot;</span>Without daring to try, we may never uncover the true extent of our capabilities. Embrace every opportunity to challenge yourself, for therein lies the path to professional growth and excellence.&quot;</h1>
        </div>
    
      </div>

      <div className="md:ml-20 md:mr-20  mt-20 flex flex-col gap-10 items-center text-center md:text-left md:items-start">
        <div>
          <h1 className='text-xl lg:text-4xl xl:text-5xl mt-10 md:mt-20 lg:mt-40'>I N T O &nbsp;&nbsp; T H E &nbsp;&nbsp;   W I L D E R N E S S</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2 lg:gap-3 xl:gap-20'>
          <Image src={img5} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img7} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img6} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
        <div className='flex flex-col md:flex-row gap-2 lg:gap-3 xl:gap-20'>
          <Image src={img3} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img2} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img9} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>

    </div>
  );
}

export default Photographer;
