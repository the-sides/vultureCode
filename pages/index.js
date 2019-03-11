// import Link from 'next/link'
import Head from 'next/head'
import "../style.css"

function Panel(props){
  return (
  <div className='panel'>
    <div className='phead'>{props.title}</div>
    <pre>{`
    Imported via webscraper
    function sort(a, b){
      if(a < b){
        doStuff();
      }
      else
        giveUp();
    }
    `}</pre>
  </div>)
}
function Search(){
  return (
    <div className='searchBar'>
    asdf
    </div>
  )
}

// Consider changing if elements can't be dynamically appended
const Home = () => (
  <div>
    <Head>
      <title>Vulture</title>
      <link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet"/>
    </Head>
    <Search/>
    <Panel title="asdf" code="function(){this is code}"/>
  </div>
)
  
export default Home