import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
		<div className=''>
			<div className='w-[100vw] flex justify-center items-center  pt-8 h-[60px]'>
				<div className='relative sm:w-[133px] sm:h-[28px] md:w-[227px] md:h-[48px]'>
					<Image src='/assets/Media asset/Logo.png' fill />
				</div>
			</div>
		</div>
	);
}

export default Nav