import Head from 'next/head'
import Card from '../components/Card';
import Header from '../components/Header'

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
			<main className="flex flex-col items-center justify-start py-10 w-full flex-1 px-20 text-center bg-[#722505] text-white">
				<div className="w-[800px] max-w-full mx-auto">
					<p className="text-left">Search results for...</p>
					<h1 className="mt-4 w-full text-center text-6xl font-bold">{query}</h1>
				</div>

				<div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-xl">
					{[sampleRes, sampleRes, sampleRes, sampleRes].map((res, ind) => 
						<Card {...res} ></Card>
					)}
				</div>

			</main>
		</div>
	)
}
