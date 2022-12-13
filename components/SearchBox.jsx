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
		<div className=' w-[424px] h-[58px] relative z-[4] before:absolute after:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 after:top-0 after:bottom-0 after:left-0 after:right-0 before:m-auto after:m-auto before:z-[2] after:z-[3]  before:w-[424px] before:h-[58px] before:bg-gradient-to-b before:from-cyanBlue before:to-limeGreen after:bg-mainbg after:w-[422px] after:h-[56px] before:rounded-full after:rounded-full flex items-center before:content-[""] after:content-[""]'>
			<div className='relative w-[calc(45%-2px)] h-[calc(100%-2px)] left-[.5px] z-[5] bg-cyanBlue rounded-l-full drop-shadow-md flex justify-center items-center'>
				<div
					className='flex w-full justify-end items-center cursor-pointer select-none gap-5 px-2'
					onClick={(e) => setShowDropDown((prev) => !prev)}
				>
					<h3 className=' text-[16px] font-[600] '>{selesctedItem}</h3>
					<div className={`relative w-[25px] h-[25px] justify-self-end ${showDropDown? "rotate-180": ""}`}>
						<Image src={dropDown} fill alt='dropdown' />
					</div>
				</div>
				{/* dropDown */}
				<div
					className={` ${
						!showDropDown ? "hidden" : "flex"
					} absolute bottom-[-160px] right-0 w-[162px] h-[144px] rounded-lg px-5 py-2 bg-cyanBlue  flex-col justify-center items-center `}
				>
					{dropDownItems.map((item, idx) => {
						return (
							<div
								key={idx}
								className='text-center w-[100%] font-[600] text-[16px] border-b-[1px] py-3 last:border-b-0 cursor-pointer'
								onClick={(e) => setSelectedItem(item)}
							>
								{item}
							</div>
						);
					})}
				</div>
			</div>
			<div className='relative w-[calc(65%-2px)] h-[calc(100%-2px)] z-[5] rouded-r-full right-[.5px] flex justify-center items-center gap-2'>
				<div className='relative w-[25px] h-[25px]'>
					<Image src={search} fill alt='search' />
				</div>
				<input
					type='text'
					placeholder='Search'
					className=' w-[70%] bg-transparent placeholder:text-[20px] placeholder:font-[600] h-[25px] text-white text-[20px] font-[600] my-auto focus:outline-none placeholder:my-auto '
				/>
			</div>
		</div>
	);
}

export default SearchBox;
