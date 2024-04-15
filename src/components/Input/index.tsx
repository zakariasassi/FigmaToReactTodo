import React from "react"
import { MdAdd } from "react-icons/md";


const Index: React.FC  = () => {

    return (
        <>
                <div className="flex gap-2 m-auto w-[80%] pt-10">
                <input placeholder="add new task" className=" p-2 border-[#9E78CF] border rounded-[10px] bg-[#1D1825] w-[430px] h-10 text-[#777777] text-[16px]" />
                <MdAdd className="text-white h-10 w-10 p-1 cursor-pointer hover:bg-[#7453a1] duration-300  bg-[#9E78CF] rounded-md" />

                </div>
        </>
    )

    
}

export default Index;
