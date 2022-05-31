import Add from "../svgs/add.svg";

export default function Card(props) {
  return (
    <div className="bg-[#F77F4C] rounded flex flex-col max-h-[400px] drop-shadow-sm relative group children:duration-300">
      <a href={props.link} target="_blank" className="text-left text-xl pt-3 pl-3 text-[#FEF3EE]">
        {props.title}
      </a>
      {/* This represents the top of the code but nothing more */}
      <div className="relative h-0 w-full overflow-visible opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="absolute top-8 right-2 z-10">
          <Add className=""></Add>
        </button>
      </div>
      <pre dangerouslySetInnerHTML={{__html: props.content}} className="text-left bg-[#FCD0BE] rounded text-black p-8 -translate-x-4 translate-y-4 flex-1 overflow-auto group-hover:-translate-x-10 transition-transform">
      </pre>
    </div>
  );
}
