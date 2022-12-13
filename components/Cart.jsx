import React from "react";
import Image from "next/image";
import Link from "next/link";

function Cart({ props }) {
	return (
		<Link href={`/charecters/${props.id}`}>
			<div className=' cart flex-shrink-0'>
				<div className='p-4 flex flex-col justify-center items-center gap-8 '>
					<div className='relative w-[250px] h-[200px] '>
						<Image className='rounded-xl' src={props.image} fill />
					</div>
					<p className='pl-2 self-start text-h4 font-[600] max-w-[150px]'>
						{props.name}
					</p>
				</div>
			</div>
		</Link>
	);
}

export default Cart;
