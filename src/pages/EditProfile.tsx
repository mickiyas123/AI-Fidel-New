import profile from '@assets/icons/profile.png';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { MdModeEdit } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import loadingGif from '@assets/images/loading.gif';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

const EditProfile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    if (i18n.language == 'am') {
      i18n.changeLanguage('en');
      return;
    }
    i18n.changeLanguage('am');
  };

  const handleSignOut = () => {
    console.log('Sign out');
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-50">
          <div>
            <img src={loadingGif} />
          </div>
        </div>
      ) : (
        <div className="">
          <div className="profile-glass flex items-center justify-between space px-8 pt-6 rounded-md  mb-8">
            <div></div>
            <div className="">
              <button className="bg-[#2E2E2E] shadow-[0px_2px_20px_rgba(255,175,82,1)] py-2 px-2 ml-7 rounded-full h-36 w-36 flex items-center justify-center">
                <img src={profile} className=" w-11/12" />
              </button>
              <div className="mt-6 text-center mb-1">
                <h1 className="text-center text-[#FFF] font-bold text-lg px-6 ml-5">
                  Ablaze Labs
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <RxInstagramLogo />
              </div>
              <div>
                <SiTwitter />
              </div>
              <div className=" mb-4">
                <RiFacebookFill />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <Link to="/profile">
                <div className=" bg-[#2E2E2E] rounded-md flex  py-2 px-5 justify-between cursor-pointer">
                  <div className=" mt-[4px] ml-3">
                    <MdModeEdit size="18px" />
                  </div>
                  <div>
                    <h1 className="text-[#FFF]">Edit Profile</h1>
                  </div>
                  <div className=" mt-[4px] ml-3">
                    <MdKeyboardArrowRight size="20px" />
                  </div>
                </div>
              </Link>
              <div
                className=" bg-[#2E2E2E] rounded-md flex py-2 px-5 justify-between cursor-pointer"
                onClick={changeLanguage}
              >
                <div className=" mt-[4px] ml-3">
                  <MdLanguage size="18px" />
                </div>
                <div className=" px-4" style={{ marginLeft: '-12px' }}>
                  <h1 className="text-[#FFF]">Language</h1>
                </div>
                <div className=" mt-[4px] ">
                  <MdKeyboardArrowRight size="20px" />
                </div>
              </div>
              <div className=" bg-[#2E2E2E] rounded-md flex py-2 px-5 justify-between cursor-pointer">
                <div className=" mt-[4px] ml-3">
                  <IoMdNotificationsOutline size="20px" />
                </div>
                <div className=" px-4" style={{ marginLeft: '-6px' }}>
                  <h1 className="text-[#FFF]">Notification</h1>
                </div>
                <div className=" mt-[4px]">
                  <MdKeyboardArrowRight size="20px" />
                </div>
              </div>
            </div>
            <div
              className="flex justify-between mt-6 bg-[#008867] py-2 px-3 rounded-md cursor-pointer btn w-full"
              onClick={handleSignOut}
            >
              <div className="mt-1 ml-6">
                <FiLogOut />
              </div>
              <div className="  pl-6" style={{ marginLeft: '-68px' }}>
                <h1 className="text-[#FFF]">Log out</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;