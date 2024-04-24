

function DetailBoxes({data}) {
  return (
    <div className="w-auto my-2 lg:my-0 h-[114px] bg-[#E6E6E6] rounded-2xl px-[10px] py-[18px] cursor-pointer hover:bg-white  hover:outline outline-1 outline-[#C91416] transition-background duration-500">
      <div className="">
        <h2 className=" font-medium text-2xl w-full h-[28px] capitalize" >{data.country}</h2>
        <div className="flex justify-between  h-[56px] " >
            
         <p className="flex font-semibold mt-auto text-base text-[#C91416]"><div className="w-2 h-2 rounded-full m-auto mr-1 bg-green-600"/> Active {data.activeUsers} Users</p>
         <h1  className="font-medium   text-4xl mt-auto">{data.total}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetailBoxes
