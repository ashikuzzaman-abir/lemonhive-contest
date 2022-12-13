import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import Cart from "./SecondaryCarts";
import Image from "next/image";
import arrowRight from "../public/assets/Media asset/Home page/slider/arrowRight.png";

const getAllEpisodes = async () => {
	try {
		const res = await axios.get("https://rickandmortyapi.com/api/episode");
		return res.data.results;
	} catch (error) {
		console.log(error);
	}
};
const getAllLocations = async () => {
	try {
		const res = await axios.get("https://rickandmortyapi.com/api/location");
		return res.data.results;
	} catch (error) {
		console.log(error);
	}
};

function SecondarySlider({ mode }) {
	const [sliderItems, setSliderItems] = useState([]);
	const [sliderTrans, setSliderTrans] = useState(0);
	const ref = useRef(null);

	const doSliderTransitionForward = (e) => {
		e.preventDefault();
		const sliderSize = sliderItems.length * 380;
		if (Math.abs(sliderTrans) > sliderSize - 395) {
			return;
		} else {
			return setSliderTrans((prev) => prev - 395);
		}
	};
	const doSliderTransitionBackward = (e) => {
		e.preventDefault();
		const sliderSize = sliderItems.length * 380;
		if (sliderTrans === 0) {
			return;
		} else {
			return setSliderTrans((prev) => prev + 395);
		}
	};

	useEffect(() => {
		if (mode === "locations") {
			getAllLocations()
				.then((data) => setSliderItems(data))
				.catch((err) => console.log(err));
		} else {
			getAllEpisodes()
				.then((data) => setSliderItems(data))
				.catch((err) => console.log(err));
		}
	}, []);
	useEffect(() => {
		// console.log(sliderTrans);
		ref.current.style.left = `${sliderTrans}px`;
		// console.log(ref.current.style.left);
	}, [sliderTrans]);

	return (
		<div className=' px-5'>
			<div className=' flex justify-between py-5'>
				<h3 className=' text-h2 font-semibold tracking-wider'>
					{mode === "locations" ? `Locations` : `Episodes`}
				</h3>
			</div>
			<div className={` sm:w-[90%] md:w-full relative mt-5 mx-auto `}>
				<div className={` overflow-hidden`}>
					<div
						ref={ref}
						className={`flex w-full  relative  gap-10 h-fit transition-all ease-linear`}
					>
						{sliderItems?.map((cart, idx) => {
							return <Cart key={idx} props={cart} mode={mode} />;
						})}
					</div>
				</div>

				{Math.abs(sliderTrans) < sliderItems.length * 380 - 395 ? (
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
				): ""}
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

export default SecondarySlider;
