import React from 'react'
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
const SideBar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className='w-2/12 bg-[#0f0f0f] pr-2 overflow-auto sidebar pl-2 '>
      <ul className="flex flex-col border-b-2 border-gray-600 ">
        {mainLinks.map((items)=>
          {
            return (
              <li key={items.name} className={`pl-6 py-3 hover:bg-[#070707] ${items.name === "Home"? "bg-slate-600": ""} rounded-md`}>
                <a href='#' className='flex items-center gap-5'>
                  {items.icon}
                  <span className="text-sm tracking-wider">{items.name}</span>
                </a>
              </li>

            )
          })
        }
    
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-600 ">
        {secondaryLinks.map((items)=>
          {
            return (
              <li key={items.name} className={`pl-6 py-3 hover:bg-[#070707]  rounded-md`}>
                <a href='#' className='flex items-center gap-5'>
                  {items.icon}
                  <span className="text-sm tracking-wider">{items.name}</span>
                </a>
              </li>

            )
          })
        }
    
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-600 ">
        {subscriptionLinks.map((items)=>
          {
            return (
              <li key={items.name} className={`pl-6 py-3 hover:bg-[#070707] rounded-md`}>
                <a href='#' className='flex items-center gap-5'>
                  {items.icon}
                  <span className="text-sm tracking-wider">{items.name}</span>
                </a>
              </li>

            )
          })
        }
    
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-600 ">
        {helpLinks.map((items)=>
          {
            return (
              <li key={items.name} className={`pl-6 py-3 hover:bg-[#070707] rounded-md`}>
                <a href='#' className='flex items-center gap-5'>
                  {items.icon}
                  <span className="text-sm tracking-wider">{items.name}</span>
                </a>
              </li>

            )
          })
        }
    
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-stone-200' >
        {
          textLinks[0].map((items)=>{
            return(
              <li key={items}>{items}</li>
            )
          })
        }
      </ul>
        <span className='px-4 text-sm text-zinc-400'> &copy; 2022 Google</span>
        <br />
        <p className='px-4 pt-3 text-sm text-zinc-400 pb-2 c-red '>
        "Tired of Resumes? Me Too. Watch This Instead!"
        </p>
    </div>
  )
}

export default SideBar
