"use client"
import Image from "next/image"
import close from "../img/Rewards pop up/Group 1000002076.png"
import bgImg from "../img/Rewards pop up/Mask group.png"
import ellipse from "../img/Rewards pop up/Ellipse 529.png"
import line1 from "../img/Rewards pop up/Group 1000002081.png"
import line2 from "../img/Rewards pop up/Group 1000002082.png"
import frame from "../img/Rewards pop up/Group 1000002080.png"
import icon from "../img/Rewards pop up/400 1.png"
import xp from "../img/Rewards pop up/Group 30729 1.png"
import { useRef } from "react"

const RewardsPopUp = ({ setRewardButtonClicked }) => {
  const outsideRef = useRef()
  const insideRef = useRef()

  const handleClick = () => {
    setRewardButtonClicked(false)
  }

  const handleOutsideClick = (e) => {
    (outsideRef.current?.contains(e.target) &&
      !insideRef.current?.contains(e.target)) ?
      handleClick() : ""
  }

  window.addEventListener("click", handleOutsideClick)

  return (
    <div
      className={`
        absolute inset-0 w-dvw h-dvh z-10
        flex items-center justify-center
        bg-slate-950/90
      `}
      ref={outsideRef}
    >
      <div
        className={`
          popup absolute w-[80dvw] md:w-[60dvw] h-[70dvh]
          rounded-lg py-[0.15rem] px-[0.1rem] 
          bg-gradient-to-r 
          from-[#423520_0%,#ffffff_50%]
          to-[#ffffff_55%,#423520_100%] 
        `}
        ref={insideRef}
      >
        <div
          className={`
            relative w-full h-full rounded-lg
        `}
        >
          <Image
            src={ellipse}
            alt="background"
            className={`
              absolute w-full  z-20
              object-center object-cover
              translate-y-[-50%]
            `}
          />
          <Image
            src={bgImg}
            alt="background"
            className={`
              absolute w-full h-full z-10
              object-center object-cover
              rounded-lg
            `}
          />
          <div className="relative z-20 h-full">
            <button className="absolute top-3 right-3 w-5"
              onClick={handleClick}
            >
              <Image
                src={close}
                alt="close"
                className="transition-all hover:scale-[1.15]"
              />
            </button>
            <div
              className={`
              h-full flex flex-col gap-3
              items-center justify-center
            `}
            >
              <div>
                <h1
                  className={`
                  text-2xl text-[#F3BA2F] text-center
                  font-bold drop-shadow-[0_0_8px_#F3BA2F]
                `}
                >
                  Congratulations!
                </h1>
                <h2
                  className={`
                    text-md text-[#F3BA2F] text-center
                    font-semibold
                  `}
                >
                  Command completed Successfully!
                </h2>
              </div>
              <p
                className={`
                px-5 text-center text-[#C8AA7A]
                text-sm
              `}
              >
                You have successfully completed a command! Here are your well-earned rewards. Keep exploring the Command Center roe even more exciting mission and bigger rewards!
              </p>
              <div
                className={`
                 flex items-center
                 justify-center gap-x-2
                `}
              >
                <Image src={line1} alt="line" className="w-[25%]" />
                <p className="text-center text-[#FFFFFF] text-sm">Rewards</p>
                <Image src={line2} alt="line" className="w-[25%]" />
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <div className="rewards  translate-y-[-0.1rem]">
                  <Image src={frame} alt="frame" className="w-[6rem]" />
                  <Image src={xp} alt="frame"
                    className={`
                      w-16 translate-y-[-5.5rem]
                      translate-x-[0.9rem]
                    `}
                  /><p
                    className={`
                    text-xs text-[#000000]
                    font-bold translate-y-[-4.67rem]
                    translate-x-[0.6rem]
                  `}
                  >
                    XP 20
                  </p>
                </div>
                <div className="rewards">
                  <Image src={frame} alt="frame" className="w-[6rem]" />
                  <Image src={icon} alt="frame"
                    className={`
                      w-16 translate-y-[-5.6rem]
                      translate-x-[0.9rem]
                    `}
                  />
                  <p
                    className={`
                    text-xs text-[#000000]
                    font-bold translate-y-[-5.05rem]
                    translate-x-[0.5rem]
                  `}
                  >
                    250,000,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RewardsPopUp