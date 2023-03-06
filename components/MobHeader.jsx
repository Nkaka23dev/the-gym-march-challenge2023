import {VscMenu} from "react-icons/vsc"
import Modal from "./Modal";
import React, { useEffect, useState } from "react";

export default function MobHeader() {
  const [show, setShow] = useState(false);

  const handClick = () => {
    setShow(show === false ? true : false);
  };
  return (
    <section style={{ zIndex: 9000 }} className="hidden lg:block bg-white fixed right-0 left-0 top-0">
      <div className="flex relative  items-center shade pt-1 px-3 justify-between">
        <div>
        <img src="/svgs/headerMob.svg" className="h-14 mt-4" />
        </div>

        <div className="flex gap-4 items-center">
         <div>
         <img className="" src="./svgs/heart.svg" alt="" />
         </div>
          <div className="border border-black p-2">
          <img
            src="/svgs/search.svg"
            alt=""
            className=""
          />
          </div>
          <div className="border border-black p-2">
                <img src="./svgs/nl.svg" alt="" />
              </div>
            <div  onClick={handClick} className="border cursor-pointer border-[#2A282B] bg-black p-2">
              <VscMenu className="text-white text-2xl"/>
            </div>
        </div>
      </div>
      {show && <Modal />}
    </section>
  );
}
