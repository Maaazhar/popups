"use client"
import Image from "next/image"
import bgImg from "../img/Level up pop up/New-Level-up-pop-gold-BG 1.png"
import LieutenantImg from "../img/Level up pop up/Lieutenant10 1.png"
import close from "../img/Rewards pop up/Group 1000002076.png"

const LevelUpPopUp = ({ setLevelUpButtonClicked }) => {
  const xpEarned = 34000;
  const xpTotal = 50000;
  const xpBarWidth = (xpEarned / xpTotal) * 100;

  const handleClick = () => {
    setLevelUpButtonClicked(false)
  }

  return (
    <div
      className={`
        popup absolute inset-0 w-dvw h-dvh 
        flex items-center justify-center
      `}
    >
      <Image
        src={bgImg}
        alt="background"
        className={`
          absolute w-dvw h-dvh z-10
          object-center object-cover
        `}
      />
      <div className="z-20">
        <button className="absolute top-5 right-5 w-6"
          onClick={handleClick}>
          <Image
            src={close}
            alt="background"
            className="transition-all hover:scale-[1.15]"
          />
        </button>
        <div
          className={`
          flex flex-col gap-3
          items-center justify-center
        `}
        >
          <div className="-mb-[2.5rem]">
            <h1
              className={`
                text-5xl font-extrabold uppercase
                text-center text-[#7a42208e]
                [text-shadow:_0_0_5px_#7A4220]
              `}
            >
              level up
            </h1>
            <h1
              className={`
                text-5xl font-extrabold uppercase
                bg-clip-text text-center text-transparent
                bg-[radial-gradient(ellipse_at_65%,_var(--tw-gradient-stops))]
                from-[#FFF4C0] from-0% to-[#FFE02E] to-100%
                drop-shadow-[0_0_5px_#FFE02E]
                translate-y-[-3.1rem]
              `}
            >
              level up
            </h1>
          </div>
          <div className="LieutenantImg">
            <Image src={LieutenantImg} alt="background" className="w-40 " />
          </div>
          <h2
            className={`
              text-3xl font-extrabold
              text-[#291911]
              [text-shadow:_0_0_5px_#834C30]
            `}
          >
            Corporal
          </h2>
          <div className="grid gap-3">
            <div
              className={`
              w-[90dvw] md:w-96
              flex items-center justify-between px-3
              text-xl font-bold text-[#ffffff]
            `}
            >
              <h3>XP: <span className="text-[#F08E3C]">34,500</span></h3>
              <h3>50,000</h3>
            </div>
            <div className="w-[90dvw] md:w-96 px-3">
              <div
                className={`
                w-full h-5 bg-[#35241C]
                py-1 px-1.5 rounded 
                shadow-[inset_0_5px_0px_#291911]
              `}
              >
                <div
                  className={`
                  xpBar h-full rounded bg-gradient-to-b
                  from-[#FFFF00_0%,#FBB03B_22%]  
                  via-[#F7931E_47%,#F16A3A_64%,#F16A3A_76%] 
                  to-[#F37433_84%,#F79020_99%,#F7931E_100%]
                  `}
                  style={{ width: `${xpBarWidth}%`, "--width": xpBarWidth }}
                />
              </div>
            </div>
          </div>
          <div className="grid place-content-center">
            <button
              className={`
                claimButton w-fit border 
                px-6 py-2 border-[#35241C]
                text-lg rounded-md
                font-bold text-[#35241C] 
                shadow-[0px_1px_0px_1px_#35241C] 
                bg-gradient-to-b 
                from-[#FFFFFF_0%,#F7C790_9%,#F3AC59_13%]
                to-[#EC6615_77%,#944617_100%]
              `}
              onClick={handleClick}
            >
              Claim NFT Badge
            </button>
          </div>
          <h3
            className={`
              text-center text-md md:text-lg
              font-bold text-[#35241C] 
            `}
          >
            You’ve leveled up and earned a new badge!
          </h3>
          <h3
            className={`
             text-center text-[#DCC794]
             text-sm md:text-lg px-2
            `}
          >
            Claim your <span className="font-bold text-[#FFC850]">
              NFT badge
            </span> now, or retrieve it later from your Inventory.
          </h3>
          <p
            className={`
              px-2 md:w-[75dvw]
              text-center text-[#DCC794]
              text-xs lg:text-sm
            `}
          >
            To claim your new badge, you&aposll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one. If there&aposs insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LevelUpPopUp