import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const List: React.FC = () => {
  return (
    <>

      <div className="w-[432px] m-auto py-2 flex flex-col justify-start ">
      <p className="text-white">Tasks to do: {4}</p>

        </div>
      <div className="w-full flex flex-col justify-center items-center">

        <div className="w-[452px] flex flex-col gap-2  ">
          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <p className="text-[#9E78CF] text-[16px]">
                To study React fundamentals
              </p>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>

          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <p className="text-[#9E78CF] text-[16px]">
                To study React fundamentals
              </p>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>


          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <p className="text-[#9E78CF] text-[16px]">
                To study React fundamentals
              </p>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>


          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <p className="text-[#9E78CF] text-[16px]">
                To study React fundamentals
              </p>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>


          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <p className="text-[#9E78CF] text-[16px]">
                To study React fundamentals
              </p>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>
        </div>
      </div>


      <div className="w-[432px] m-auto py-2 flex flex-col justify-start ">
      <p className="text-white">Done: {1}</p>

        </div>
      <div className="w-full flex flex-col justify-center items-center">

        <div className="w-[452px] flex flex-col gap-2  ">
   

          <div className=" w-[442px]  h-[75px] rounded-md bg-[#15101C]  justify-between p-3 items-center  flex flex-row">
            <div>
              <s className="text-[#78CFB0] text-[16px]">
                To study React fundamentals
              </s>
            </div>
            <div className="flex">
              <MdDelete className="text-[#9E78CF] h-6 w-10" />
              <FaCheck className="text-[#9E78CF] h-6 w-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
