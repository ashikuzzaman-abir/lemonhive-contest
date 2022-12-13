import React from 'react'
import Pagination from '../../components/Pagination';
import SearchBox from '../../components/SearchBox';
import ShowCharacters from '../../components/ShowCharacters';

function index() {
  return (
		<div className=' max-w-[1600px] mx-auto sm:mt-[40px] md:mt-[72px] sm:px-4'>
			<div className='flex justify-between items-center'>
				<h3 className=' text-cyanBlue sm:text-[16px] md:text-[64px] font-[600]'>The Cast</h3>
        <SearchBox/>
			</div>
			<ShowCharacters/>
			<Pagination/>
		</div>
	);
}

export default index