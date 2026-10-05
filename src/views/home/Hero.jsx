import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="w-full pb-[140px] pt-[170px] px-[82.5px] flex items-start justify-between">
        <div className="max-w-[725px] flex flex-col gap-[100px]">
          <div className="flex flex-col gap-[60px]">
            <h1 className='text-[100px] font-bold leading-[120%] neulis-cursive'>Hey, <br /> I'm Abdullah Omer.</h1>
            <div className="flex items-center gap-5">
              <div className="w-full flex flex-col gap-1">
                <p className='text-[22px] leading-none text-[#1C2124]'>Building cool things</p>
                <p className='text-[22px] leading-none text-[#7C7C7A]'>Volunteer UX @ Qur’an for All</p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className='text-[22px] leading-none text-[#1C2124]'>And collaborating with</p>
                <p className='text-[22px] leading-none text-[#7C7C7A]'>FinTech & Enterprise Teams (incl. Amex, indirect)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className='text-[36px] text-[#7C7C7A]'>Designing inclusive, precision-crafted experiences</h2>
            <h2 className='text-[36px] text-[#7C7C7A]'>Designing inclusive, precision-crafted experiences.</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className='text-[36px] text-[#1C2124]'>Product Designer | 4 years <span className='text-[#7C7C7A]'>{`{by trade}`}</span></h2>
            <h2 className='text-[36px] text-[#1C2124]'>Illustrator | Behavioral Scientist <span className='text-[#7C7C7A]'>{`{by heart}`}</span></h2>
          </div>
        </div>
        <img src="/images/abdullah.png" className='w-[730px] h-[750px]' alt="" />
      </div>
    </>
  )
}

export default Hero