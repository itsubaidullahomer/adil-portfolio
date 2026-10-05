import React from 'react'

const Ethics = () => {
  return (
    <>
        <div className="w-full px-12 pt-[100px] pb-[160px] flex items-center justify-center">
            <div className="max-w-[1080px] flex flex-col gap-[74px]">
                <h1 className='text-[55px] font-bold text-[#1c2124] leading-[120%]'>My code of ethics as a designer in this world.</h1>
                <div className="grid grid-cols-2 gap-10">
                    <div className="w-full p-8 flex items-center gap-10">
                        <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f8daa4b863915ae8c7246_Edge%20Vector.png" className='w-[160px] h-[160px] rounded-full select-none' draggable={false} alt="" />
                        <div className="flex flex-col gap-[18px]">
                            <h2 className='text-2xl leading-[120%] font-bold'>Design for the Edges</h2>
                            <p className='text-lg leading-[150%] text-[#7C7C7A]'>Not the center. Start with those who struggle most. Their success is everyone's success.</p>
                        </div>
                    </div>
                    <div className="w-full p-8 flex items-center gap-10">
                        <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f8daa8ecb86035dd0b973_Question%20Vector.png" className='w-[160px] h-[160px] rounded-full select-none' draggable={false} alt="" />
                        <div className="flex flex-col gap-[18px]">
                            <h2 className='text-2xl leading-[120%] font-bold'>Question the Pattern</h2>
                            <p className='text-lg leading-[150%] text-[#7C7C7A]'>"Always done" isn't always right. Challenge the defaults. Better patterns await.</p>
                        </div>
                    </div>
                    <div className="w-full p-8 flex items-center gap-10">
                        <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f8daa071d3c0d26ac6362_Share%20Vector.png" className='w-[160px] h-[160px] rounded-full select-none' draggable={false} alt="" />
                        <div className="flex flex-col gap-[18px]">
                            <h2 className='text-2xl leading-[120%] font-bold'>Share the Stumbles</h2>
                            <p className='text-lg leading-[150%] text-[#7C7C7A]'>"Always done" isn't always right. Challenge the defaults. Better patterns await.</p>
                        </div>
                    </div>
                    <div className="w-full p-8 flex items-center gap-10">
                        <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/676f8daa8ecb86035dd0b973_Question%20Vector.png" className='w-[160px] h-[160px] rounded-full select-none' draggable={false} alt="" />
                        <div className="flex flex-col gap-[18px]">
                            <h2 className='text-2xl leading-[120%] font-bold'>Skin in the Game</h2>
                            <p className='text-lg leading-[150%] text-[#7C7C7A]'>There’s no opting out. Your designs will speak for you. Design responsibly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ethics