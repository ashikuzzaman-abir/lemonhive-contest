import React, { useState } from "react";
import Image from "next/image";
import dropDown from "../public/assets/Media asset/Cast/dropdown.png";
import search from "../public/assets/Media asset/Cast/search.png";

function SearchBox() {
	const [dropDownItems, setDropDownitems] = useState([
		"Characters",
		"Location",
		"Episodes",
	]);
	const [selesctedItem, setSelectedItem] = useState("Location");
  const [showDropDown, setShowDropDown] = useState(false);
	return (
		<div className='sm:w-[179px] sm:h-[24px] md:w-[424px] md:h-[58px] relative z-[10] before:absolute after:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 after:top-0 after:bottom-0 after:left-0 after:right-0 before:m-auto after:m-auto before:z-[2] after:z-[3] sm:before:w-[179px] sm:before:h-[24px]  md:before:w-[424px] md:before:h-[58px] before:bg-gradient-to-b before:from-cyanBlue before:to-limeGreen after:bg-mainbg sm:after:w-[177px] sm:after:h-[22px] md:after:w-[422px] md:after:h-[56px] before:rounded-full after:rounded-full flex items-center before:content-[""] after:content-[""]'>
			<div className='relative w-[calc(45%-2px)] h-[calc(100%-2px)] left-[.5px] z-[5] bg-cyanBlue rounded-l-full drop-shadow-md flex justify-center items-center'>
				<div
					className='flex w-full justify-end items-center cursor-pointer select-none sm:gap-2 md:gap-5 px-2'
					onClick={(e) => setShowDropDown((prev) => !prev)}
				>
					<h3 className=' sm:text-[8px] md:text-[16px] font-[600] '>
						{selesctedItem}
					</h3>
					<div
						className={`relative sm:w-[9px] sm:h-[9px] md:w-[25px] md:h-[25px] justify-self-end ${
							showDropDown ? "rotate-180" : ""
						}`}
					>
						<Image src={dropDown} fill alt='dropdown' />
					</div>
				</div>
				{/* dropDown */}
				<div
					className={` ${
						!showDropDown ? "hidden" : "flex"
					} absolute sm:bottom-[-70px] md:bottom-[-160px] right-0 sm:w-[75px] sm:h-[66px] md:w-[162px] md:h-[144px] rounded-lg sm:px-1 md:px-5 py-2 bg-cyanBlue  flex-col justify-center items-center `}
				>
					{dropDownItems.map((item, idx) => {
						return (
							<div
								key={idx}
								className='text-center w-[100%] font-[600] sm:text-[8px] md:text-[16px] border-b-[1px] sm:py-[5px] md:py-3 last:border-b-0 cursor-pointer'
								onClick={(e) => setSelectedItem(item)}
							>
								{item}
							</div>
						);
					})}
				</div>
			</div>
			<div className='relative w-[calc(65%-2px)] h-[calc(100%-2px)] z-[5] rouded-r-full right-[.5px] flex justify-center items-center gap-2'>
				<div className='relative sm:w-[9px] sm:h-[9px] md:w-[25px] md:h-[25px]'>
					<Image src={search} fill alt='search' />
				</div>
				<input
					type='text'
					placeholder='Search'
					className=' w-[70%] bg-transparent sm:placeholder:text-[8px] md:placeholder:text-[20px] placeholder:font-[600] sm:h-[18px] md:h-[25px] text-white sm:text-[8px] md:text-[20px] font-[600] my-auto focus:outline-none placeholder:my-auto '
				/>
			</div>
		</div>
	);
}

export default SearchBox;
