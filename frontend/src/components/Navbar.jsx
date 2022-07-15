import React, { useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {  UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const Navbar = () => {
  const { setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div
        className="flex"
        style={{
          position: "absolute",
          left: `clamp(0vw, 50rem, 100vw - 1rem)`,
          marginTop: 8
        }}
      >
        <input
          className="rounded-2xl bg-grey"
          placeholder="Search"
          style={{ padding: 5, margin: 5 }}
        />
        
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <br />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Stanley
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
