import React, { Suspense, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

import episode from "../../public/assets/Media asset/Cast Details/Icons/PNG/Episode(s).png";
import gender from "../../public/assets/Media asset/Cast Details/Icons/PNG/Gender.png";
import location from "../../public/assets/Media asset/Cast Details/Icons/PNG/Location.png";
import origin from "../../public/assets/Media asset/Cast Details/Icons/PNG/origin.png";
import redirect from "../../public/assets/Media asset/Cast Details/Icons/PNG/Redirect.png";
import species from "../../public/assets/Media asset/Cast Details/Icons/PNG/Species.png";
import status from "../../public/assets/Media asset/Cast Details/Icons/PNG/Status.png";

import background from "../../public/assets/Media asset/Cast Details/Background.png";
import stars from "../../public/assets/Media asset/Cast Details/Star.png";
import Image from "next/image";

const getCharacterData = async (id) => {
	try {
		const res = await axios.get(
			`https://rickandmortyapi.com/api/character/${id}`
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
const getEpisodeName = async (url) => {
	try {
		const res = await axios.get(url);
		return res.data.name;
	} catch (error) {
		console.log(error);
	}
};

function EachCharecterPage() {
	const [data, setData] = useState({});
	const [episodes, setEpisodes] = useState([]);
	const router = useRouter();
	// const charId = router.query.id;
	useEffect(() => {
		if (router.query.id) {
			getCharacterData(router.query.id)
				.then((data) => {
					setData(data);
					data?.episode?.map((epi, idx) => {
						getEpisodeName(epi)
							.then((data) => setEpisodes((prev) => [...prev, data]))
							.catch((err) => console.log(err));
					});
				})
				.catch((err) => console.log(err));
		}
	}, [router.query.id]);

	// console.log(router.query.id)
	return (
		<div className=' flex justify-center items-center w-full mt-28'>
			<div className='relative z-[2] flex justify-between items-center w-full h-[100%] mx-auto my-auto'>
				<div className='w-[calc(40%-1px)] h-full  flex justify-center items-center'>
					<Suspense fallback={<h3>loading...</h3>}>
						<div className='relative w-full flex justify-center items-center'>
							<h3 className=' text-[48px] absolute top-[-100px] left-0 z-10 right-0 mx-auto text-cyanBlue font-[600] text-center'>
								{data?.name}
							</h3>
							<div className='box-cart w-[402px] h-[402px] flex justify-center items-center before:w-[401px] before:h-[401px] after:w-[398px] after:h-[398px] after:bg-mainbg before:rounded-lg after:rounded-lg'>
								<div className='relative w-[300px] h-[300px] '>
									<Image
										src={data?.image}
										fill
										alt={data?.name}
										className='rounded-lg'
									/>
								</div>
							</div>
						</div>
					</Suspense>
				</div>
				<div className=' bg-limeGreen w-[1px] h-[320px]'></div>
				<div className='w-[calc(60%-1px)] h-full flex justify-center items-center'>
					<div className='w-[800px] flex flex-col gap-10'>
						<div className='flex justify-between'>
							<div className='box-cart w-[240px] h-[174px] before:w-[240px] before:h-[174px] after:w-[237px] after:h-[171px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
								<div className='relative w-[40px] h-[36px]'>
									<Image src={status} fill alt='status' />
								</div>
								<h3 className=' text-[20px] mt-3'>Status</h3>
								<h3 className='text-[40px] font-[600]'>{data?.status}</h3>
							</div>
							<div className='box-cart w-[240px] h-[174px] before:w-[240px] before:h-[174px] after:w-[237px] after:h-[171px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
								<div className='relative w-[40px] h-[36px]'>
									<Image src={species} fill alt='species' />
								</div>
								<h3 className=' text-[20px] mt-3'>Species</h3>
								<h3 className='text-[40px] font-[600]'>{data?.species}</h3>
							</div>
							<div className='box-cart w-[240px] h-[174px] before:w-[240px] before:h-[174px] after:w-[237px] after:h-[171px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
								<div className='relative w-[40px] h-[36px]'>
									<Image src={gender} fill alt='gender' />
								</div>
								<h3 className=' text-[20px] mt-3'>Gender</h3>
								<h3 className='text-[40px] font-[600]'>{data?.gender}</h3>
							</div>
						</div>
						<div className='box-cart w-[800px] h-[174px] before:w-[800px] before:h-[174px] after:w-[797px] after:h-[171px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
							<div className='relative w-[40px] h-[36px]'>
								<Image src={origin} fill alt='origin' />
							</div>
							<h3 className=' text-[20px] mt-3'>Origin</h3>
							<h3 className='text-[40px] font-[600]'>{data?.origin?.name}</h3>
							<div className='absolute right-[30px] bottom-[35px]'>
								<div className='relative w-[40px] h-[40px]'>
									<Image src={redirect} alt='redirect' fill />
								</div>
							</div>
						</div>
						<div className='box-cart w-[800px] h-[174px] before:w-[800px] before:h-[174px] after:w-[797px] after:h-[171px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
							<div className='relative w-[40px] h-[36px]'>
								<Image src={location} fill alt='location' />
							</div>
							<h3 className=' text-[20px] mt-3'>Last Known Location</h3>
							<h3 className='text-[40px] font-[600]'>{data?.location?.name}</h3>
							<div className='absolute right-[30px] bottom-[35px]'>
								<div className='relative w-[40px] h-[40px]'>
									<Image src={redirect} alt='redirect' fill />
								</div>
							</div>
						</div>
						<div className='box-cart w-[800px] h-[417px] before:w-[800px] before:h-[417px] after:w-[797px] after:h-[414px] after:bg-mainbg before:rounded-lg after:rounded-lg px-6 py-4'>
							<div className='relative w-[40px] h-[36px]'>
								<Image src={episode} fill alt='episode' />
							</div>
							<h3 className=' text-[20px] mt-3'>Episode(s)</h3>
							{/* <h3 className='text-[40px] font-[600]'>{data.location?.name}</h3> */}
							<ul className=' list-disc px-5'>
								{episodes?.map((epi, idx) => {
									return (
										<li key={idx} className='text-[20px] font-[600] '>
											{epi}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* backgrounds */}
			<div className='absolute w-screen h-full top-0 left-0'>
				<Image src={background} fill alt='background Image' />
			</div>
			<div className='absolute w-[95vw] h-[644px] bottom-0 left-0 right-0 mx-auto '>
				<Image src={stars} fill alt='background Image' />
			</div>
		</div>
	);
}

export default EachCharecterPage;
