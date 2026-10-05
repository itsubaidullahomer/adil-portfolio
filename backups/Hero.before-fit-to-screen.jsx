import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="w-full box-border pt-[clamp(56px,7vw,150px)] pb-[clamp(80px,12vw,200px)] px-[clamp(20px,6vw,82px)] flex flex-wrap items-center justify-between gap-[clamp(40px,5vw,72px)]">
        <div className="flex-[1_1_460px] min-w-0 max-w-[725px] flex flex-col gap-[clamp(40px,5vw,76px)]">
          <div className="flex flex-col gap-[clamp(30px,4vw,56px)]">
            <h1 className='font-display font-bold text-[clamp(46px,7vw,100px)] leading-[1.1] tracking-[-0.03em] text-[#1C2124] text-balance'>Hey, <br />I'm Abdullah Omer</h1>
            <div className="flex flex-wrap gap-x-7 gap-y-5">
              <div className="flex-[1_1_240px] flex flex-col gap-2">
                <p className='text-[clamp(17px,1.5vw,21px)] leading-[1.2] text-[#1C2124]'>Building cool things</p>
                <p className='text-[clamp(17px,1.5vw,21px)] leading-[1.2] text-[#7C7C7A]'>Product Designer @ Qur’an for All</p>
              </div>
              <div className="flex-[1_1_240px] flex flex-col gap-2">
                <p className='text-[clamp(17px,1.5vw,21px)] leading-[1.2] text-[#1C2124]'>And collaborating with</p>
                <p className='text-[clamp(17px,1.5vw,21px)] leading-[1.2] text-[#7C7C7A]'>FinTech &amp; Enterprise Teams (incl. Amex, indirect)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className='text-[clamp(24px,3vw,36px)] font-extralight leading-[1.25] text-[#7C7C7A]'>Designing to shape behavior</h2>
            <h2 className='text-[clamp(24px,3vw,36px)] font-extralight leading-[1.25] text-[#7C7C7A]'>through science + storytelling.</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className='text-[clamp(24px,3vw,36px)] font-extralight leading-[1.25] text-[#1C2124]'>Product Designer | 3+ years <span className='text-[#7C7C7A]'>{`{by trade}`}</span></h2>
            <h2 className='text-[clamp(24px,3vw,36px)] font-extralight leading-[1.25] text-[#1C2124]'>Data-Driven, Always Learning <span className='text-[#7C7C7A]'>{`{by heart}`}</span></h2>
          </div>
        </div>
        <div className="flex-[1_1_360px] min-w-0 max-w-[620px] aspect-square rounded-[40px] bg-[linear-gradient(160deg, #F4ECE2 → #EDE3D6)] flex items-end justify-center overflow-hidden">
          <img src="/images/abdullah.png" className='w-[92%] h-auto aspect-square block object-contain' alt="Abdullah Omer" />
        </div>
      </div>
    </>
  )
}

export default Hero
