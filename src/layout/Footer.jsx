import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-full h-[380px] px-7 py-14 flex items-start justify-between gap-4 bg-[#1C2124]">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <h1 className='text-[60px] font-bold text-white custom-font'>Let's work together.</h1>
            <p className='text-lg text-[#7C7C7A]'>Open to chats about design, mentoring, or new opportunities.</p>
          </div>
          <p className='text-white font-bold uppercase tracking-[3px]'>© 2025 Alekhya Yadavalli</p>
        </div>
        <div className="w-[360px] flex flex-col gap-[30px] pt-5">
          <h1 className='text-3xl font-bold text-[#EFEFEC]'>Get in touch</h1>
          <div className="flex items-center gap-[30px]">
            <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/6788a42d7628c8a8e26dae63_Mail%20Vector%20Icon.svg" className='w-[30px] h-[30px] select-none' draggable={false} alt="" />
            <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/663009ba881736d87cf70eea_linkedin.svg" className='w-[30px] h-[30px] select-none' draggable={false} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer