import React from 'react'
import Pagination from '../../components/Pagination';
import SearchBox from '../../components/SearchBox';
import ShowCharacters from '../../components/ShowCharacters';
import Image from 'next/image';
import background from "../../public/assets/Media asset/Cast/Background.png";
import star from "../../public/assets/Media asset/Cast/Star.png";


function index() {
  return (
		<div className=' max-w-[1600px] mx-auto sm:mt-[40px] md:mt-[72px] sm:px-4'>
			<div className='flex justify-between items-center'>
				<h3 className=' text-cyanBlue sm:text-[16px] md:text-[64px] font-[600]'>
					The Cast
				</h3>
				<SearchBox />
			</div>
			<ShowCharacters />
			<Pagination />
			<div className='sm:h-[40px] md:h-[96px]'></div>
			{/* background */}
			<div className='absolute top-0 left-[50%] sm:w-[1300px] md:w-screen h-full'>
				<Image src={background} fill alt='background' />
			</div>
			<div className='sm:hidden md:block absolute bottom-0 left-0 w-full h-[775px]'>
				<Image src={star} fill alt='background' />
			</div>
		</div>
	);
}

export default index