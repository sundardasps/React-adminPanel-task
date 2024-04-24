import React, { useState } from "react";
import Logo from "../../public/191a025fb461e7dcff70a2eb76014a00.png";
import { Navbar as Nav, Button, IconButton, ListItemPrefix, ListItem, List } from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [button, setButton] = useState(false);


  const handleLogo = () => {
    setLogo((curr) => !curr);
    setOpenNav((curr)=>!curr)
  };


  const handleButton = () => {
    setButton((curr) => !curr);
  };

 

  return (<>
    <Nav className=" mx-auto max-w-screen-xxl px-4   lg:py-4 shadow-none rounded-none  ">
      <div className=" mx-auto flex items-center justify-between  h-20 ">
       <div  className="w-auto  " onClick={() => handleLogo()} >
        <svg
        
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
          className={`rounded-2xl cursor-pointer hover:shadow-xl hover:border   ${
            logo ? "bg-orange-900 ":"bg-transparent"
          } `}
          
        >
          <rect width="50.0119" height="50" rx="15"  />
          <path
            d="M36.7111 34.3764C38.8392 31.7135 40.0027 28.4085 40.0119 24.9999C39.9754 21.0445 38.3925 17.2599 35.6018 14.457C32.8107 11.6538 29.0333 10.0539 25.0786 10C22.0198 10.0032 19.034 10.933 16.5143 12.6669C13.9944 14.4004 12.0588 16.857 10.9625 19.7123C9.81522 22.7589 9.69002 26.0958 10.6061 29.2196C11.5221 32.3436 13.4295 35.0847 16.0402 37.0292C18.6509 38.9741 21.8235 40.0165 25.0789 39.9998C27.3138 39.9846 29.5172 39.4721 31.5293 38.4994C33.5414 37.5268 35.3116 36.1182 36.7118 34.3761L36.7111 34.3764ZM25.0081 37.413C21.6958 37.3788 18.5316 36.0356 16.2063 33.6763C13.8809 31.3172 12.5838 28.1337 12.5977 24.8208C12.6768 21.5589 14.0248 18.4564 16.3554 16.1729C18.686 13.8894 21.8155 12.6047 25.078 12.592V18.4364C27.4007 18.4689 29.5335 19.7268 30.6855 21.744C31.8377 23.7611 31.8377 26.2371 30.6855 28.2544C29.5335 30.2715 27.4007 31.5295 25.078 31.5619V37.4076L25.0081 37.413Z"
            fill={`${logo ? "white" : "black"} `}
          />
          <path
            d="M18.4382 24.9999C18.4537 26.7492 19.1607 28.4212 20.4048 29.651C21.6487 30.8805 23.329 31.5681 25.0782 31.5634V18.4366C23.329 18.4319 21.6487 19.1194 20.4048 20.349C19.1608 21.5788 18.4537 23.2507 18.4382 25V24.9999Z"
            fill={`${logo ? "white" : "black"} `}
          />
        </svg>

        </div>
        <div className=" hidden  md:block  w-1/2  mr-10  ">
          <img
            src={Logo}
            className=" h-[70px] w-[170px] object-cover  "
            alt=""
          />
        </div>
        <div className="absolute flex  w-[10rem] right-0  ">
          <Button
            data-ripple-light="true"
            data-popover-target="menu"
            color="black"
            size="md"
            onClick={() => handleButton()}
            className={` flex  rounded-full  p-2 w-max  hover:pr-10  ${
              button && "pr-10 bg-[#C91416]"
            }  `}
          >
            <div className="flex gap-2 ">
              <span className="m-auto">Safelet</span>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M17.5055 0.500006C13.8269 0.497076 10.2412 1.65374 7.25772 3.80527C4.27454 5.95689 2.04604 8.9935 0.88839 12.4836C-0.268961 15.974 -0.296195 19.7405 0.810723 23.2476C1.91764 26.7548 4.10219 29.8234 7.05401 32.0174C10.0723 34.2783 13.7424 35.5 17.5141 35.5C21.2857 35.5 24.9555 34.2783 27.9743 32.0174C30.9184 29.8178 33.0954 26.7475 34.1962 23.2416C35.2972 19.736 35.2665 15.9727 34.1079 12.4858C32.9497 8.9986 30.7227 5.96431 27.7427 3.81277C24.7628 1.66146 21.1812 0.50248 17.5054 0.500155L17.5055 0.500006ZM17.5055 7.49995C18.8985 7.49995 20.2343 8.05307 21.219 9.03775C22.204 10.0221 22.7573 11.3575 22.7573 12.75C22.7573 14.1424 22.204 15.4778 21.219 16.4622C20.2343 17.4469 18.8985 18 17.5055 18C16.1126 18 14.7768 17.4469 13.792 16.4622C12.807 15.4778 12.2537 14.1424 12.2537 12.75C12.2578 11.3589 12.8126 10.026 13.7964 9.0421C14.7805 8.05862 16.114 7.50399 17.5055 7.49995ZM17.5055 32.0003C13.8872 31.9968 10.4109 30.5917 7.80691 28.0801C8.84527 25.4799 10.8836 23.4048 13.4652 22.3194C16.0469 21.2336 18.9562 21.2283 21.5418 22.3047C24.1272 23.3808 26.1729 25.4489 27.2209 28.0452C24.6231 30.5811 21.1359 32.0005 17.505 32.0002L17.5055 32.0003Z"
                  fill="white"
                />
              </svg>
            </div>
          </Button>
          {button ? (
            <ChevronUpIcon
              color="white"
              onClick={() => handleButton()}

              className="absolute  my-2 right-4  w-8 "
            />
          ) : (
            <ChevronDownIcon
              color="white"
              onClick={() => handleButton()}

              className="absolute  my-2 right-4  w-8 "
            />
          )}

            <ul
              className={`absolute ${button?"block":"hidden"}  top-14  text-white z-10 min-w-[150px] bg-[#C91416]  overflow-auto rounded-2xl border  py-3 font-sans text-sm font-normal  shadow-lg`}
            >
              <li
                onClick={() => handleButton()}
                className=" w-full my-2 cursor-pointer  select-none text-center px-3 pt-[9px] pb-2 hover:bg-black "
              >
                Signed in as <br />
                <p className="mr-8 underline ">Safelet</p>
              </li>
              <li
                onClick={() => handleButton()}
                className="w-full cursor-pointer select-none text-center px-3 pt-[9px] pb-2   hover:bg-black "
              >
                Logout
              </li>
            </ul>
          
        </div>
      </div>
    </Nav>
    { openNav &&  
    
       <div 
        className={`absolute top-0 z-50 bg-black md:bg-opacity-0 bg-opacity-40 text-black h-max  w-screen`}>
    
        <svg
        
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleLogo()}
          className={`rounded-2xl cursor-pointer hover:shadow-xl hover:border  my-8 mx-4 ${
            logo ? "bg-orange-900 ":"bg-transparent"
          } `}
          
        >
          <rect width="50.0119" height="50" rx="15"  />
          <path
            d="M36.7111 34.3764C38.8392 31.7135 40.0027 28.4085 40.0119 24.9999C39.9754 21.0445 38.3925 17.2599 35.6018 14.457C32.8107 11.6538 29.0333 10.0539 25.0786 10C22.0198 10.0032 19.034 10.933 16.5143 12.6669C13.9944 14.4004 12.0588 16.857 10.9625 19.7123C9.81522 22.7589 9.69002 26.0958 10.6061 29.2196C11.5221 32.3436 13.4295 35.0847 16.0402 37.0292C18.6509 38.9741 21.8235 40.0165 25.0789 39.9998C27.3138 39.9846 29.5172 39.4721 31.5293 38.4994C33.5414 37.5268 35.3116 36.1182 36.7118 34.3761L36.7111 34.3764ZM25.0081 37.413C21.6958 37.3788 18.5316 36.0356 16.2063 33.6763C13.8809 31.3172 12.5838 28.1337 12.5977 24.8208C12.6768 21.5589 14.0248 18.4564 16.3554 16.1729C18.686 13.8894 21.8155 12.6047 25.078 12.592V18.4364C27.4007 18.4689 29.5335 19.7268 30.6855 21.744C31.8377 23.7611 31.8377 26.2371 30.6855 28.2544C29.5335 30.2715 27.4007 31.5295 25.078 31.5619V37.4076L25.0081 37.413Z"
            fill={`${logo ? "white" : "black"} `}
          />
          <path
            d="M18.4382 24.9999C18.4537 26.7492 19.1607 28.4212 20.4048 29.651C21.6487 30.8805 23.329 31.5681 25.0782 31.5634V18.4366C23.329 18.4319 21.6487 19.1194 20.4048 20.349C19.1608 21.5788 18.4537 23.2507 18.4382 25V24.9999Z"
            fill={`${logo ? "white" : "black"} `}
          />
        </svg>
         
         <div className="m-10 sm:block md:hidden">
          <Sidebar/>

         </div>
       
      </div>
}  
    </>
  );
}
