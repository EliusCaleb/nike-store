import React from 'react'

function FlexContent({ ifExists,endpoint:{ heading,title,text,btn,url,img}}) {
  return (
    <>
     <div className={`flex items-center justify-between lg:flex-col md:justify-container nike-container ${ifExists ? 'flex-row-reverse': 'flex-row'}`}>
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
          <h1 className=' text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
          <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-slate-900 font-bold filter drop-shadow-lg'>{title}</h1>
          <p className= 'text-slate-900 my-4 xl:text-sm'>{text}</p>
          <a href={url} className='flex items-center' target={'_blank'} role='button'>
            <button type='button' className=' button-theme bg-slate-900 shadow-slate-900 text-slate-100  py-1.5'>{btn}</button>
          </a>
        </div>
        <div className='flex items-center justify-items-center max-w-xl relative lg:max-w-none w-full'>
          <img 
           src={img}
           alt={`img/${heading}`}
           className={`w-auto  transitions-theme object-fill  ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'}`}
          />
        </div>
     </div>
    </>

  )
}

export default FlexContent