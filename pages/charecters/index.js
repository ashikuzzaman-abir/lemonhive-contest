import React from 'react'
import SearchBox from '../../components/SearchBox';

function index() {
  return (
		<div className=' max-w-[1600px] mx-auto mt-[72px]'>
			<div className='flex justify-between items-center'>
				<h3 className=' text-cyanBlue text-[64px] font-[600]'>The Cast</h3>
        <SearchBox/>
			</div>
		</div>
	);
}

export default index