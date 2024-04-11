import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';
import Python from '../../public/python.png';
import Html from '../../public/html.png';
import Css from '../../public/css.png';
import Js from '../../public/js.png';
import ReactImage from '../../public/react.png';
import Mysql from '../../public/Mysql.png';
import Java from '../../public/java.png';
import Developer1 from '../../public/developer1.jpeg';
import Developer2 from '../../public/developer2.jpeg';
// import developer3 from '../../public/developer.png';
// import developer4 from '../../public/developer.png';

function Developer() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10 mx-5 md:mx-20 text-center md:text-left">
        <div className="lg:w-4/5">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl">U N D E R G R A D U A T E</p>
          <p className="text-xl md:text-2xl mt-5">UI-UX Developer</p>
          <p className="text-5xl mt-5">Hi, I&apos;m <span className='text-red-400'>Anuda Gunarathna</span></p>
          <p className="text-3xl md:text-4xl mt-5">from Sri Lanka</p>
        </div>
        <div className="md:w-2/3">
          <Image src="/anuda.png" alt="Anuda" width={350} height={350} className="md:mt-20 float-right" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="md:w-3/4">
          <Image src={Developer1} alt="wallpaper" width={300} height={100} className="md:w-full md:max-w-md mx-auto" />
        </div>
        <div className="md:w-3/4 text-center md:text-left mt-5 md:mt-40 mr-20">
          <h1 className='text-sm lg:text-2xl xl:text-lg italic mt-10 lg:-mt-40 xl:-mt-40 md:-mt-20 ml-20 text-justify'>
            Passionate and driven, I am currently pursuing Computer Science at the University of Westminster, enrolled at the Informatics Institute Of Technology. My hunger for knowledge knows no bounds, leading me to explore diverse avenues for creativity and self-expression. While my academic focus lies in computer science, my interests extend far beyond. I possess a keen eye for photography and videography, with a particular passion for wildlife photography, capturing the raw beauty of nature. Additionally, I am a versatile musician, proficient in singing and playing the violin, using music as a medium for personal expression and exploration.
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="md:w-3/4 text-center md:text-left mt-5 md:mt-40 mr-20">
          <h1 className='text-sm lg:text-2xl xl:text-lg italic mt-10 lg:-mt-20 md:-mt-20 ml-20 text-justify'>
            In all my endeavors, I seek to integrate my diverse talents, finding innovative ways to blend technology with creativity. Whether it&apos;s incorporating digital elements into my photography or infusing my music with digital art, I constantly push the boundaries of what&apos;s possible. Each project I undertake reflects my unwavering dedication and passion for exploration, serving as a testament to my multifaceted abilities as a computer science student, photographer, and musician.Above all, I strive to inspire others to fearlessly pursue their passions and leave their mark on the world through their creative pursuits.
          </h1>
        </div>
        <div className="md:w-3/4">
          <Image src={Developer2} alt="wallpaper" width={300} height={100} className="md:w-full md:max-w-md mx-auto mt-20" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-5xl text-red-400 mt-20 sm:mt-40 lg:mt-40 xl:mt-60'>
        M Y &nbsp; S K I L L S
      </div>
      <div className='flex flex-col items-center justify-center mt-10 lg:mt-20'>
        <div className='flex flex-wrap justify-center gap-10 mb-20'>
          <Image src={Python} alt="python" width={100} height={100} />
          <Image src={Html} alt="html" width={100} height={100} />
          <Image src={Css} alt="css" width={100} height={100} />
          <Image src={Js} alt="js" width={100} height={100} />
          <Image src={ReactImage} alt="react" width={100} height={100} />
          <Image src={Mysql} alt="Mysql" width={100} height={100} />
          <Image src={Java} alt="java" width={100} height={100} />
        </div>
      </div>
      <footer />
    </div>
  );
}

export default Developer;
