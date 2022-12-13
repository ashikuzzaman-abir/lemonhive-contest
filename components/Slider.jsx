import React, { useEffect, useState, useRef } from "react";
import Cart from "./Cart";
import axios from "axios";
import Image from "next/image";
import arrowRight from "../public/assets/Media asset/Home page/slider/arrowRight.png";
import Link from "next/link";

const getCharecters = async () => {
	const res = await axios.get("https://rickandmortyapi.com/api/character");
	// console.log(res.data.results[0]);
	return res.data.results;
};

function Slider() {
	const [carts, setCarts] = useState([]);
	const [sliderTrans, setSliderTrans] = useState(0);
	const ref = useRef(null);
	const doSliderTransitionForward = (e) => {
		e.preventDefault();
		const sliderSize = carts.length * 310;
		if (Math.abs(sliderTrans) > sliderSize - (330 * 1)) {
			return;
		} else {
			return setSliderTrans((prev) => prev - 325);
		}
	};
	const doSliderTransitionBackward = (e) => {
		e.preventDefault();
		const sliderSize = carts.length * 310;
		if (sliderTrans === 0) {
			return;
		} else {
			return setSliderTrans((prev) => prev + 325);
		}
	};
	useEffect(() => {
		getCharecters()
			.then((data) => {
				setCarts(data);
			})
			.catch(() => {
				console.log("FetchError");
			});
	}, []);

	useEffect(() => {
		// console.log(sliderTrans);
		ref.current.style.left = `${sliderTrans}px`;
		// console.log(ref.current.style.left);
	}, [sliderTrans]);
	return (
		<div className=' px-5'>
			<div className=' flex justify-between py-5'>
				<h3 className=' text-h2 font-semibold tracking-wider'>Meet The Cast</h3>
				<Link href={`/charecters`}>
					<div className='text-[18px] flex justify-center items-center font-regular border-[1px] border-limeGreen rounded-lg px-4 py-2'>
						View All
					</div>
				</Link>
			</div>
			<div className={` sm:w-[90%] md:w-full relative mt-5 mx-auto `}>
				<div className={` overflow-hidden`}>
					<div
						ref={ref}
						className={`flex w-full  relative  gap-10 h-fit transition-all ease-linear`}
					>
						{carts?.map((cart, idx) => {
							return <Cart key={idx} props={cart} />;
						})}
					</div>
				</div>

				{Math.abs(sliderTrans) < (carts.length * 310)-(330 * 1) ? (
					<div
						className='absolute right-[-25px] top-0 bottom-0 my-auto z-[10] h-fit select-none cursor-pointer'
						onClick={doSliderTransitionForward}
					>
						<div className=' bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center drop-shadow-xl'>
							<div className='relative w-[15px] h-[15px]'>
								<Image src={arrowRight} fill />
							</div>
						</div>
					</div>
				) : (
					""
				)}
				{sliderTrans !== 0 ? (
					<div
						className='absolute left-[-25px] top-0 bottom-0 my-auto z-[10] h-fit select-none cursor-pointer rotate-180'
						onClick={doSliderTransitionBackward}
					>
						<div className=' bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center drop-shadow-xl'>
							<div className='relative w-[15px] h-[15px]'>
								<Image src={arrowRight} fill />
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Slider;
