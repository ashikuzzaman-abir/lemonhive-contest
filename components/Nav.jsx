import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
	return (
		<Link href="/">
			<div className=''>
				<div className='w-[100vw] relative z-[50] flex justify-center items-center  pt-8 h-[60px]'>
					<div className='relative sm:w-[133px] sm:h-[28px] md:w-[227px] md:h-[48px]'>
						<Image src='/assets/Media asset/Logo.png' fill />
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Nav;
