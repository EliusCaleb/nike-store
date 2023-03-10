import React from "react";
import Clips from "./utils/Clips";
import SocialLinks from "./utils/SocialLinks";
function Home({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) {
  return (
    <>
    <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh]  md:h-[65vh] sm:h[55vh]  w-auto  absolute right-0 left-0 top-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20  grid items-center justify-items-center nike-container'>

           <div className='grid items-center justify-items-center mt-28 md:mt-24'>
               <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter shadow-drop-sm text-slate-200'>{title}</h1>
               <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter shadow-drop-sm text-slate-200'>{subtitle}</h1>
               <button type='button' className='button-theme bg-slate-200 shadow-slate-200 my-8 rounded-xl'>{btntext}</button>
               <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
               <div className='grid items-center absolute top-[40vh] lg:top-[33vh] right-0  gap-4'>
                {
                  sociallinks?.map((val, index) =>(
                   <SocialLinks
                     key={index}
                     icon={val.icon}
                   />
                  ))
                }
               </div>
           </div>
           <div className='flex items-center mt-9 '>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[18vh]  transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
    </div>
    </>

   
  );
}

export default Home;
