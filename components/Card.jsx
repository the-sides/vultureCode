export default function Card(props) {
	return (
		<div class="bg-[#F77F4C] flex flex-col">	
			<a className="text-left text-xl pt-3 pl-3 text-[#FEF3EE]"> {props.title} </a>
			<pre className="text-left bg-[#FCD0BE] text-black p-8 -translate-x-4 translate-y-4 flex-1 overflow-auto">{props.content}</pre>
		</div>
	)
}