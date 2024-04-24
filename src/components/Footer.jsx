export default function Footer() {
  return (
    <div className="bg-[#E6E6E6] rounded-md  h-full  py-5  md:py-7 text-center  ">
      <div className="md:flex   justify-between space-y-1 text-[0.7rem]  lg:text-sm   mx-5 h-5 ">
        <p>Copyright @ 2023 Safelet. All rights reserved.</p>
        <div className="flex text-[#5858FA] font-bold text-center justify-center ">
          <p className="border-r border-black px-2  ">Terms of Use</p>
          <p className="border-l border-black px-2">Privacy Policy</p>
        </div>
        <p>
          Hand Crafted & <span className="text-[#737373]"> made with Love</span>
        </p>
      </div>
    </div>
  );
}
