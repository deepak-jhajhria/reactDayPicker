"use client"
import { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { ClenderIcon } from "./common/Icons";
import { css } from "./common/Helper";
const Select = () => {
    const [isOpen, setIsOpen] = useState(0);
    const [isOpenClender, setIsOpenClender] = useState(false);
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);
    function tabChange(tabs) {
        setIsOpen(tabs);
    }
    if (selectedDay === true) {
        setIsOpenClender(false);
    }
    let month = format(selectedDay, 'MM');
    let value = month;
    switch (value) {
        case "01":
            month = "Jan";
            break;
        case "02":
            month = "Feb";
            break;
        case "03":
            month = "Mar";
            break;
        case "04":
            month = "Apr";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "Jun";
            break;
        case "07":
            month = "Jul";
            break;
        case "08":
            month = "Aug";
            break;
        case "09":
            month = "Sep";
            break;
        case "10":
            month = "Oct";
            break;
        case "11":
            month = "Nov";
            break;
        case "12":
            month = "Dec";
            break;
        default:
            month = "";
            break;
    }
    return (
        <div className="w-full min-h-screen pt-20 bg-[#12133F]">
            <div className="max-w-[900px] bg-[#19183D] rounded-2xl min-h-[200px] mx-auto border border-[#75758E]">
                <div className="flex items-center justify-center gap-6 mt-5">
                    <button onClick={() => tabChange(0)} className={`${isOpen === 0 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>Stays</button>
                    <button onClick={() => tabChange(1)} className={`${isOpen === 1 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>Flights</button>
                    <button onClick={() => tabChange(2)} className={`${isOpen === 2 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>Cars</button>
                    <button onClick={() => tabChange(3)} className={`${isOpen === 3 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>packages</button>
                    <button onClick={() => tabChange(4)} className={`${isOpen === 4 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>things to do</button>
                    <button onClick={() => tabChange(5)} className={`${isOpen === 5 && " relative after:absolute after:w-full after:flex after:h-[1px] after:bg-white after:bottom-0 after:left-0"} text-white text-base`}>Cruises</button>
                </div>
                <div className="p-10">
                    {
                        isOpen === 0 && <div className="">
                            <div className="flex gap-5">
                                <div className="p-1 bg-[2B294B] border border-white rounded-xl w-1/2">
                                    <label htmlFor=""></label>
                                    <input className="px-3 py-2 text-white bg-transparent border-0 outline-none" type="text" name="" id="" placeholder="Going to" />
                                </div>
                                <div className="relative flex w-1/2 gap-5">
                                    <div className="p-1 bg-[2B294B] border border-white rounded-xl max-w-[180px] w-full">
                                        <div className="flex items-center gap-2 p-2 cursor-grab" onClick={() => setIsOpenClender(!isOpenClender)}>
                                            <ClenderIcon />
                                            <div className="flex flex-col">
                                                <span className="font-sans text-sm font-light text-white">Check-in</span>
                                                <span className="font-sans text-3xl font-light text-white">{month}{format(selectedDay, 'dd')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {isOpenClender && <div className="absolute left-0 top-20">
                                        <style>{css}</style>
                                        <DayPicker mode="single"
                                            required
                                            selected={selectedDay}
                                            modifiersClassNames={{
                                                selected: 'my-selected',
                                                today: 'my-today'
                                            }}
                                            ISOWeek showWeekNumber showOutsideDays
                                            onSelect={setSelectedDay} /></div>}
                                    {/* <div className="p-1 bg-[2B294B] border border-white rounded-xl">
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    }
                    {
                        isOpen === 1 && <div className="">
                            <div className="flex flex-col gap-5">
                                helo
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Select
