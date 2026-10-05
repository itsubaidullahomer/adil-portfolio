import React from 'react'

const ToolboxSection = () => {
  return (
    <>
      <div className="w-full px-12 pt-[60px] pb-[160px] flex items-center justify-center">
        <div className="max-w-[1160px] flex flex-col gap-[74px]">
          <h1 className='text-[55px] font-bold text-[#1C2124]'>In my toolbox</h1>
          <div className="grid grid-cols-4 gap-[70px]">
            <div className="flex flex-col gap-5">
              <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f4d6d66ec3b839a826013_Frame%20(16).svg" className='w-8 select-none' draggable={false} alt="" />
              <div className="flex flex-col gap-2.5">
                <h2 className='text-2xl font-bold'>User-Centered Research</h2>
                <p className='text-lg text-[#7C7C7A]'>I dig into how people think, behave, and make decisions. By conducting interviews, surveys, and usability tests, I turn messy insights into clear patterns that guide meaningful design choices.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f4d6d66ec3b839a826016_Frame%20(17).svg" className='w-8 select-none' draggable={false} alt="" />
              <div className="flex flex-col gap-2.5">
                <h2 className='text-2xl font-bold'>Experience Mapping & Strategy</h2>
                <p className='text-lg text-[#7C7C7A]'>I connect user needs to business goals by mapping journeys, identifying pain points, and creating strategies that make products intuitive and impactful.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f4d6d66ec3b839a826017_Frame%20(20).svg" className='w-8 select-none' draggable={false} alt="" />
              <div className="flex flex-col gap-2.5">
                <h2 className='text-2xl font-bold'>Rapid Prototyping & Iteration</h2>
                <p className='text-lg text-[#7C7C7A]'>I turn ideas into testable prototypes quickly, exploring multiple solutions and refining them based on feedback. This approach helps find the right design efficiently without losing sight of the user.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f4d6d66ec3b839a826018_Frame%20(19).svg" className='w-8 select-none' draggable={false} alt="" />
              <div className="flex flex-col gap-2.5">
                <h2 className='text-2xl font-bold'>Visual & Interaction Design</h2>
                <p className='text-lg text-[#7C7C7A]'>I transform complex concepts into clean, usable interfaces. Through layout, typography, and interaction design, I make experiences clear, engaging, and human-centered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToolboxSection;