"use client"
import { useState } from "react";
import LevelUpPopUp from "./LevelUpPopUp"
import RewardsPopUp from "./RewardsPopUp"

function PopUps() {
  const [levelUpButtonClicked, setLevelUpButtonClicked] = useState(false)
  const [rewardButtonClicked, setRewardButtonClicked] = useState(false)
  const [xp, setXp] = useState(34500)
  const [xpRange, setXpRange] = useState(50000)


  const buttonStyle = `
          px-2 py-1.5 bg-stone-800/80
          rounded border border-transparent 
          text-lg font-semibold text-amber-500 
          shadow-[0px_0px_5px_rgb(245,158,11)]
          transition-all duration-300 ease-in-out
          hover:shadow-[0px_0px_15px_rgb(245,158,11)]
          hover:border-amber-00 hover:bg-stone-800
        `;
  return (
    <div>
      <div
        className={`
          flex items-center justify-evenly
          flex-wrap gap-4 px-4
        `}
      >
        <div>
          <button
            className={buttonStyle}
            onClick={() => setRewardButtonClicked(true)}
          >
            Rewards pop up
          </button>
          {rewardButtonClicked &&
            <RewardsPopUp
              setRewardButtonClicked={setRewardButtonClicked}
            />
          }
        </div>
        <div>
          <button
            className={buttonStyle}
            onClick={() => setLevelUpButtonClicked(true)}
          >
            Level up pop up
          </button>
          {levelUpButtonClicked &&
            <LevelUpPopUp
              setLevelUpButtonClicked={setLevelUpButtonClicked}
            />
          }
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p
          className={`
          absolute bottom-0 text-amber-400
          font-semibold rounded z-0 
          [text-shadow:_2px_2px_3px_#000]
          pb-1 px-2 bg-slate-700/50
        `}
        >
          Developed by <a className="hover:text-amber-100" href="https://mazharul-islam.web.app/" target="_blank">
            Mazharul Islam
          </a>
        </p>
      </div>
    </div>
  )
}

export default PopUps