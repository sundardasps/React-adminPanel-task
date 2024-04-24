
import Footer from "./Footer";
import DetailBoxes  from "./DetailBoxes";
import {details}  from "../utils/data";


function Details() {
  return (
    
    <div className="flex flex-col justify-between  w-screen  h-max      border-[#FA9E93] border-l-2">
      <div className=" min-w-max  mx-3  ">
        <h3 className="   font-medium   text-4xl ">user per country</h3>
        <p className="my-2">Select by Country</p>
        <div className=" flex   rounded-lg">
          <input style={{borderRadius:"15px"}} className='pl-8 w-60 h-10 border border-[#C91416] bg-[#E6E6E6]' type="text" />
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute m-2  "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.89162 3.39162C-0.963873 7.32118 -0.963873 13.6973 2.89162 17.5528C6.82118 21.4824 13.1973 21.4824 17.0528 17.5528C20.9824 13.6973 20.9824 7.32122 17.0528 3.39162C13.1973 -0.463873 6.82122 -0.463873 2.89162 3.39162ZM6.15381 6.65381C4.59678 8.13664 4.59678 10.6576 6.15381 12.2142C7.63664 13.6971 10.1576 13.6971 11.7142 12.2142C13.1971 10.6572 13.1971 8.13642 11.7142 6.65381C10.1572 5.09678 7.63642 5.09678 6.15381 6.65381ZM12.1591 13.6233C10.0089 15.2544 7.04308 15.0321 5.1896 13.1785C3.11365 11.1025 3.11365 7.76616 5.1896 5.69004C7.26555 3.61409 10.6019 3.61409 12.678 5.69004C14.5316 7.54365 14.754 10.5093 13.1229 12.6595L16.1627 15.6994C16.8301 16.2925 15.7919 17.3305 15.1988 16.6633L12.1591 13.6233Z"
              fill="#EC6453"
            />
          </svg>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-3   h-full   m-3 ">
      {
        details.map((data,index)=>(

          <DetailBoxes key={index} data={data} />
        ))
      }
      </div>

      <div className="h-[7rem] md:h-[5rem]">
      <Footer />
      </div>
    </div>
      
  );
}

export default Details;
