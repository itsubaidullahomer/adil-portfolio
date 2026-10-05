import React from "react";

const Currentlys = () => {
  return (
    <>
      <div className="w-full px-9 py-[72px] flex flex-col gap-8 bg-[#1C2124]">
        <h1 className="text-[55px] font-bold text-white">Currentlys</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="min-w-[450px] max-w-[450px] px-4 py-2.5 flex flex-col bg-[#161a1d] rounded-xl">
              <div className="p-5 mb-2.5 flex items-center gap-2.5">
                <img
                  src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670ea4566d129f4eea09af40_Netflix%20logo%20icon.svg"
                  className="h-[50px]"
                  alt=""
                />
                <div className="flex flex-col gap-2.5">
                  <p className="text-[15px] text-[#7C7C7A]">
                    Currently Watching
                  </p>
                  <p className="text-xl text-[#FFF9F3]">Arcane (Season 2)</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/679a5e491c14b9099caa5387_Arcane%20portfolio.png"
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="w-full px-4 py-2.5 flex flex-col bg-[#161a1d] rounded-xl">
              <div className="p-5 mb-2.5 flex items-center gap-2.5">
                <img
                  src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670eb0bc34eb4f9fef57e24b_Notion%201-1.svg"
                  className="h-[50px]"
                  alt=""
                />
                <div className="flex flex-col gap-2.5">
                  <p className="text-[15px] text-[#7C7C7A]">Notion</p>
                  <p className="text-xl text-[#FFF9F3]">Website To-Dos</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/679a5e480380d9de2e877de6_To%20do%20list%202025-p-1600.png"
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="min-w-[450px] max-w-[450px] px-4 py-2.5 flex flex-col bg-[#161a1d] rounded-xl">
              <div className="p-5 mb-2.5 flex items-center gap-2.5">
                <img
                  src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670eb46404a80372af4c3c27_Spotify%20logo.svg"
                  className="h-[50px]"
                  alt=""
                />
                <div className="flex flex-col gap-2.5">
                  <p className="text-[15px] text-[#7C7C7A]">Playlist</p>
                  <p className="text-xl text-[#FFF9F3]">Work Vibes</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670eb6114047e968ae897ddf_Spotify%20Playlist.png"
                className="w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full px-4 py-2.5 flex flex-col bg-[#161a1d] rounded-xl">
              <div className="p-5 mb-2.5 flex items-center gap-2.5">
                <img
                  src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/679bf178fc8001cff771c52d_google-g-2015.svg"
                  className="h-[50px]"
                  alt=""
                />
                <div className="flex flex-col gap-2.5">
                  <p className="text-[15px] text-[#7C7C7A]">
                    Currently Watching
                  </p>
                  <p className="text-xl text-[#FFF9F3]">Arcane (Season 2)</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/67e24680d0a25c51939499bf_EtheliaShoutOUt.png"
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full px-4 py-24 flex flex-col bg-[#161a1d] rounded-xl">
                <div className="p-5 mb-2.5 flex items-center gap-2.5">
                  <img
                    src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670edf87be3a8ce7943bc151_Procreate%20Black%20Logo.svg"
                    className="h-[50px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[15px] text-[#7C7C7A]">
                      Procreate
                    </p>
                    <p className="text-xl text-[#FFF9F3]">Latest Unfinished Piece</p>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670ee523265c8789039b270f_Procreate%20Piece.png"
                  className="w-full rounded-xl"
                  alt=""
                />
              </div>
              <div className="w-full h-full px-4 py-2.5 flex items-center gap-[220px] bg-[#161a1d] rounded-xl">
                <div className="flex flex-col gap-2.5">
                  <img src="https://cdn.prod.website-files.com/661c705d2e8278b674b2dd5d/670ee1fa58227a2e4a3b6c3a_Figma%20icon.svg" className="w-[50px] h-[50px]" alt="" />
                  <p className="text-[#7C7C7A]">Figma</p>
                  <p className="text-xs text-[#FFF9F3]">Draft Counter</p>
                </div>
                <h1 className="text-[200px] text-[#7C7C7A]">169</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currentlys;