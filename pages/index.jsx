import Head from 'next/head'
import Card from '../components/Card';
import Header from '../components/Header'
import BirdSvg from '../svgs/bird.svg';

export default function Home() {
	const query = 'How do i sort in JS';
	const sampleRes = {
		title: 'Stackoverflow: array won’t sort',
		content: `const run  = () => {
	return arr.sort();
}
	
window.addEventListener(‘DOMContentLoaded’, run);`
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main className="flex flex-col items-center justify-start py-10 w-full flex-1 px-8 md:px-20 text-center bg-[#722505] text-white relative">
				<BirdSvg className="scale-125 origin-top-left absolute top-0 left-0"/>
				<div className="w-[800px] max-w-full mx-auto relative">
					<p className="text-left">Search results for...</p>
					<h1 className="mt-4 w-full text-center text-3xl md:text-6xl font-bold">{query}</h1>
					<span className="absolute top-[-2rem] right-[-3rem] text-[160px] md:text-[200px] leading-[100%] font-header font-bold opacity-25">&rdquo;</span>
				</div>

				<div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 max-w-screen-xl 3xl:max-w-screen-2xl">
					{[sampleRes, sampleRes, sampleRes, sampleRes].map((res, ind) => 
						<Card key={ind} {...res} ></Card>
					)}
				</div>

			</main>
		</div>
	)
}
