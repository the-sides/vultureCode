// import Link from 'next/link'
import Head from 'next/head'
import "../style.sass"
import { Button, Card, Row, Col } from 'react-materialize'


function Search(){
  return (
    <div className='searchBar row'>
    <input type="text" className="col s8"/>
    <span className="col s1"></span>
    <Button className="col s2" waves='purple'>asdf</Button>
    <span className="col s1"></span>
    </div>
  )
}

function Panel(props){
  return (
  <div className='panel'>
    <div className='phead'>{props.title}</div>
    <pre>{`
    // Imported via webscraper
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

// Consider changing if elements can't be dynamically appended
const Home = () => (
  <div>
    {/* Materialize and Jquery */}
    {/* WHAT WOULD BE A BETTER WAY TO IMPORT THESE!? */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    <Head>
      <title>Vulture</title>
      {/* Fonts and Materialize */}
      <link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"></link>
    </Head>
    <Search/>
    <Panel title="asdf" code="function(){this is code}"/>
  </div>
)
  
export default Home