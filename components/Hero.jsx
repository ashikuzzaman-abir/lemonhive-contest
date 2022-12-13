import React from "react";
import Image from "next/image";
import bubble from "../public/assets/Media asset/Home page/Hero Elements/bubble.png";
import gun from "../public/assets/Media asset/Home page/Hero Elements/Gun.png";
import pill from "../public/assets/Media asset/Home page/Hero Elements/pill.png";
import portal from "../public/assets/Media asset/Home page/Hero Elements/portal.png";
import playButton from "../public/assets/Media asset/Home page/Hero Elements/playButton.svg";
import Link from "next/link";
function Hero() {
	return (
		<div className='relative w-full sm:h-[350px]  md:h-[600px]  flex sm:justify-start md:justify-center items-center z-[10] overflow-hidden '>
			<div className='sm:text-[40px] md:text-h1  w-fit mx-auto flex flex-col sm:gap-5 md:gap-0'>
				<div className='relative flex sm:drop-shadow-[0_0_12px_rgba(157,254,0,0.85)] md:drop-shadow-[0_0_35px_rgba(157,254,0,0.65)] '>
					<h2 className=' italic font-[700] drop-shadow-xl'>THE</h2>
					<h2 className='font-[800] drop-shadow-xl sm:ml-[100px] md:ml-[250px] bg-gradient-to-r from-limeGreen to-cyanBlue text-transparent bg-clip-text'>
						RICK &
					</h2>
					<div className=' absolute sm:w-[68px] sm:h-[44px] md:w-[225px] md:h-[145px] top-0 sm:left-[110px] md:left-[300px]'>
						<Image src={portal} fill />
					</div>
					<div className=' absolute sm:w-[52px] sm:h-[52px] md:w-[214px] md:h-[214px] sm:top-[-12px] sm:left-[-22px] md:top-[-60px] md:left-[-100px] backdrop:blur-[1px] blur-[1px] '>
						<Image src={bubble} fill />
					</div>
					<div className=' absolute sm:hidden md:block md:w-[50px] md:h-[10px] top-0 right-0'>
						<Image src={pill} fill />
					</div>
				</div>
				<div className=' relative flex mt-[-30px]'>
					<h2 className='font-[800] drop-shadow-xl bg-gradient-to-r from-limeGreen to-cyanBlue text-transparent bg-clip-text'>
						MORTY
					</h2>
					<h2 className=' italic font-[700] drop-shadow-xl ml-[30px]'>WIKI</h2>
					<div className=' absolute sm:w-[160px] sm:h-[168px] md:w-[318px] sm:top-0 sm:right-[-85px] md:h-[331px] md:top-[-125px] md:bottom-0 md:right-[-250px]  '>
						<Image src={gun} fill />
					</div>
				</div>
				<Link href='#'>
					<div className='sm:w-full md:w-fit mx-auto flex sm:flex-col md:flex-row md:items-center sm:gap-10 md:gap-20'>
						<div className='bg-gradient-to-r w-fit from-limeGreen to-cyanBlue rounded-[25px] flex md:justify-between md:items-center sm:px-3 sm:py-4 md:px-6 md:py-4 gap-3 h-fit sm:order-2 md:order-1 drop-shadow-md'>
							<div className='relative sm:w-[18px] sm:w-[18px] md:w-[24px] md:h-[24px] '>
								<Image src={playButton} fill />
							</div>
							<p className=' sm:text-[16px] md:text-h3 sm:tracking-wide md:tracking-normal font-semibold'>
								Watch Now
							</p>
						</div>
						<p className=' text-p sm:w-[300px] md:w-[500px] leading-[20px] sm:order-1 md:order-2 text-cyanBlue '>
							Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate
							dimensions.
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Hero;
