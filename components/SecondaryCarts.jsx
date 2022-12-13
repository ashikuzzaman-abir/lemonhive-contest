import React from "react";
import Image from "next/image";

function SecondaryCarts({ props, mode }) {
	return (
		<div className=' cart-2 flex-shrink-0 cursor-pointer'>
			<div className='p-4 flex flex-col justify-center items-center gap-2 px-8 '>
				<h4 className='pl-2 self-start text-h4 font-[400] max-w-[150px]'>
					{mode === "locations" ? `#${props.id}` : props.episode}
				</h4>
				<p className='pl-2 self-start text-[18px] font-[600] max-w-[250px] leading-none'>
					{props.name}
				</p>
			</div>
		</div>
	);
}

export default SecondaryCarts;
