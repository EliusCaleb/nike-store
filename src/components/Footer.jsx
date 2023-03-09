import React,{useEffect,useState} from 'react'

function Footer({footerAPI:{titles,links}}) {
    const [Year, setYear] = useState();
  useEffect(() => {
      const getYear = () => setYear(new Date().getFullYear());
      getYear();
  }, []);
  return (
    <>
     <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
            <div className='grid  items-center grid-cols-3 m-auto w-full max-w-2xl md:max-w-none md:gap-5'> 
                {titles.map((val,index)=>(
                  <div key={index} className='grid items-center'>
                    <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                  </div>
                ))}
                {links.map((lists,index)=>(
                    <ul key={index} className=' grid items-center gap-1'>
                       {lists.map((list,index)=>(
                        <li key={index} className='text-sm sm:text-xs'>
                          {list.link}
                        </li>

                       ))}
                    </ul>
                ))}
            </div>
            <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'> REACT STACK DEVELOPERS {Year}</span></p>
          </div>
        </div>
     </footer>
    </>
  )
}

export default Footer