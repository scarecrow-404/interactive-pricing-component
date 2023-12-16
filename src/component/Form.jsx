import React from "react";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import SliderIcon from "../assets/icon-slider.svg";
import CheckIcon from "../assets/icon-check.svg"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Image
} from '@chakra-ui/react'
const Form = () => {
  
  const [isYearly, setIsYearly] = useState(false);
  const [sliderValue, setSliderValue] = useState(16);

  function handleSliderChange(value) {
    setSliderValue(value);
  }
  return (
    <form className="bg-white rounded-xl shadow-lg flex justify-around max-w-[700px] min-w-[350px] mx-auto h-[450px] box-border lg:min-w-[600px]">
      <div className="w-[100%] p-5 flex flex-col gap-7 items-center max-w-[500px] justify-around">
        <div className=" lg:inline-flex lg:justify-between items-center w-[100%]">
        <p className="text-sm text-[#858FAD]">100K PAGEVIEWS</p>
        <div className=" items-center gap-2 hidden lg:inline-flex">
        <h1 className="text-3xl  text-[#293356] font-bold">{`$${sliderValue}.00`}</h1>
        <p className="text-sm text-[#858FAD]">/ month</p>
        </div>
        </div>
      
        <Slider id='slider'
        defaultValue={16}
        min={0}
        max={32}
         value={sliderValue}
         onChange={handleSliderChange}
         
         >
        <SliderTrack bg='#EAEEFB'>
        <SliderFilledTrack bg='#10D5C2' />
        </SliderTrack>
        <SliderThumb boxSize={8} bg='#10D5C2' >
          <Box>
            <Image src={SliderIcon} alt="slider left right" />
          </Box>
        </SliderThumb>
        </Slider>
        <div className="inline-flex items-center gap-2 lg:hidden">
        <h1 className="text-3xl  text-[#293356] font-bold">{`$${sliderValue}.00`}</h1>
        <p className="text-sm text-[#858FAD]">/ month</p>
        </div>
        <div className=" inline-flex">
          <label htmlFor="toggle" className="flex items-center cursor-pointer relative">
            <p className=" mr-3 text-sm text-[#858FAD]">Monthly Billing</p>
            <ToggleSwitch setIsYearly={setIsYearly} />
            <p className="ml-3 text-sm text-[#858FAD]">Yearly Billing</p>
            <div className="absolute left-[102%] top-1.5 h-4 w-8 bg-orange-200 text-xs text-center rounded-full text-orange-500 lg:w-fit">
              <span>-25%</span>
              <span className=" invisible lg:visible">Discount</span>
            </div>
          </label>
        </div>
        <hr class="w-[100%] h-[5px] border-blue-200 opacity-40" />
        <div className="flex flex-col justify-around h-[100%] w-[100%] items-center gap-4 lg:flex-row lg:items-center"> 
        <div className="flex flex-col gap-4 w-[100%]">
        <div className=" inline-flex items-center">
          <Box>
            <Image src={CheckIcon} alt="Check icon" />
          </Box>
          <p className="ml-3 text-sm text-[#858FAD]">Unlimited websites</p>
        </div>
        <div className=" inline-flex items-center">
          <Box>
            <Image src={CheckIcon} alt="Check icon" />
          </Box>
          <p className="ml-3 text-sm text-[#858FAD]">100% data ownership</p>
        </div>
        <div className=" inline-flex items-center">
        <Box>
            <Image src={CheckIcon} alt="Check icon" />
          </Box>
          <p className="ml-3 text-sm text-[#858FAD]">Email reports</p>
        </div>
        </div>
        <div className="flex justify-center w-[100%] h-[100%] items-center">
        <button type="submit" className=" text-[#BDCCFF] w-[75%] rounded-full bg-[#293356] h-12" onSubmit={(e)=>e.preventDefault}>Start my trial</button>
        </div>
      </div>
      </div>
    </form>
  );
};
export default Form;
