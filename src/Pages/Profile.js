import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import SideBar from '../components/SideBar';
import { useParams } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const userId = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/profile/${userId.id}`, { // Using userId in the API call
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error(error));
  }, [userId]); // Adding userId as a dependency for useEffect

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] w-[1536px] h-[1213px]">
        <div className="absolute top-[0px] left-[-4px] bg-white w-[1540px] h-[1024px] overflow-hidden">
          <Header2 />
          <Footer />
          <SideBar />
          <div className="absolute top-[147px] left-[111px] w-[824px] h-[399px] text-left text-21xl text-black font-itim">
            {profileData && (
              <>
                <div className="absolute top-[34px] left-[303px] text-35xl inline-block w-[398px] h-[101px]">
                  {profileData.fullname}
                </div>
                <div className="absolute top-[97px] left-[303px] text-gray">
                  {profileData.email}
                </div>
                <div className="absolute top-[187px] left-[308px]">Number of posts:</div>
                <div className="absolute top-[192px] left-[624px] inline-block w-[137px] h-[19px]">
                  {profileData.numberofposts}
                </div>
                <div className="absolute top-[253px] left-[298px] bg-palegreen flex flex-row items-center justify-center p-2.5">
                  <div className="relative">Edit profile</div>
                </div>
                <div className="absolute top-[331px] left-[298px] bg-red flex flex-row items-center justify-center p-2.5">
                  <div className="relative">Delete account</div>
                </div>
                <div className="absolute top-[343px] left-[587px]">are you sure ?</div>
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[260px] h-[270px] object-cover"
                  alt=""
                  src="/ellipse-36@2x.png"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
