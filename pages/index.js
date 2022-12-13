import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import background from "../public/assets/Media asset/Home page/Background  Elements/Background.png";
import spiral from "../public/assets/Media asset/Home page/Background  Elements/Spiral.png";
import stars from "../public/assets/Media asset/Home page/Background  Elements/Star.png";
import Slider from "../components/Slider";
import SecondarySlider from "../components/SecondarySlider";

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Rick and Morty</title>
				<meta name='description' content='Rick and Morty Fandom' />
				<link
					rel='icon'
					href='/assets/Media asset/Home page/Hero Elements/portal.png'
					alt='main logo'
				/>
			</Head>
			<Hero></Hero>
			<div className='relative z-10 max-w-[1600px] mx-auto'>
				<Slider />
				<div className='h-[110px]'></div>
				<SecondarySlider />
				<div className='h-[110px]'></div>
				<SecondarySlider mode={`locations`} />
				<div className='h-[110px]'></div>
			</div>
			{/* backgrounds */}
			<div className=' absolute top-0 left-0 sm:w-[980px] h-[600px] md:w-screen md:h-screen '>
				<Image fill src={background} />
			</div>
			<div className=' absolute bottom-0 right-0 sm:hidden md:block md:w-[524px] md:h-[617px] '>
				<Image fill src={spiral} />
			</div>
			<div className=' absolute bottom-[260px] right-0 left-20 mx-auto sm:hidden md:block md:w-[90%] md:h-[300px] px-10 '>
				<Image fill src={stars} />
			</div>
		</div>
	);
}
