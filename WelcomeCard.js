const WelcomeCard = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-white w-[1540px] h-[1024px] overflow-hidden text-left text-13xl text-white font-itim">
      <div className="absolute top-[455px] left-[160px] text-black inline-block w-[1119px] h-[450px]">
        <p className="m-0">Welcome!</p>
        <p className="m-0">
          You've found a community of enthusiasts. Browse topics, start
          discussions, and connect with others here.
        </p>
        <p className="m-0">Get Settled In:</p>
        <ul className="m-0 font-inherit text-inherit pl-[43px]">
          <li className="mb-0">Introduce yourself.</li>
          <li className="mb-0">Check out popular categories .</li>
          <li className="mb-0">
            Find answers by browsing "Latest Posts" or starting a new thread.
          </li>
          <li>
            Members are friendly - ask questions and share your knowledge.
          </li>
        </ul>
      </div>
      <div className="absolute top-[770px] left-[162px] bg-salmon h-[67px] flex flex-row items-center justify-center py-2.5 pr-[60px] pl-[22px] box-border gap-[11px] text-black">
        <img
          className="relative max-h-full w-10 object-cover"
          alt=""
          src="/arrow-1@2x.png"
        />
        <div className="relative">Explore</div>
      </div>
      <img
        className="absolute top-[148px] left-[160px] w-[239px] h-[239px] overflow-hidden object-cover"
        alt=""
        src="/ideasvgrepocom-1@2x.png"
      />
      <div className="absolute top-[938px] left-[0px] h-[86px] flex flex-col items-start justify-start gap-[10px]">
        <div className="relative bg-darkslategray-200 w-[1540px] h-[86px] z-[0]" />
        <div className="absolute my-0 mx-[!important] top-[24px] left-[461px] w-[566px] h-[38px] z-[1]">
          <div className="absolute top-[0px] left-[0px]">
            All Rights Reserved. © 2024 Forum Name
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-black w-[1540px] overflow-hidden flex flex-row items-center justify-start py-[11px] px-[39px] box-border gap-[780px] font-inter">
        <div className="relative">Forum name</div>
        <div className="relative w-[473px] h-[63px] shrink-0 font-itim">
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[61.6px] shrink-0 object-cover"
            alt=""
            src="/frame-6@2x.png"
          />
          <div className="absolute top-[8px] left-[61px] inline-block w-[102px] h-[38px]">
            Sign up
          </div>
          <div className="absolute top-[0px] left-[176px] bg-salmon shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] text-black">
            <div className="relative">Login</div>
          </div>
          <img
            className="absolute top-[0px] left-[300px] w-[101.14px] h-[63px] shrink-0 object-cover"
            alt=""
            src="/frame-5@2x.png"
          />
          <div className="absolute top-[16px] left-[401px] shrink-0 flex flex-col items-start justify-start gap-[15px]">
            <img
              className="relative max-h-full w-[49px] object-cover z-[0]"
              alt=""
              src="/line-1@2x.png"
            />
            <img
              className="relative max-h-full w-[49px] object-cover z-[1]"
              alt=""
              src="/line-1@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[31px] left-[0px] max-h-full w-[49px] object-cover z-[2]"
              alt=""
              src="/line-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[79px] left-[1162px] bg-darkslategray-100 w-[378px] h-[347px] overflow-hidden">
        <div className="absolute top-[9px] left-[56px] inline-block w-[244px] h-[57px]">
          Help
        </div>
        <div className="absolute top-[74px] left-[56px] inline-block w-[244px] h-[57px]">
          About
        </div>
        <div className="absolute top-[139px] left-[56px] inline-block w-[244px] h-[57px]">
          Terms of service
        </div>
        <div className="absolute top-[204px] left-[56px] inline-block w-[244px] h-[57px]">
          Q/A
        </div>
        <img
          className="absolute top-[269px] left-[0px] w-[356px] h-1 object-contain"
          alt=""
          src="/line-4@2x.png"
        />
        <div className="absolute top-[281px] left-[56px] inline-block w-[244px] h-[57px]">
          logout
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
