import React, { Component } from 'react';
import './static/style.sass';
import './App.css'
import { Button} from 'react-materialize'
import M from 'materialize-css'

// 
let crawler = () => {
  console.log("boo")
}

function Search(){
  return (
   <div className='searchBar row'>
      <div className="input-field col s8">
        <input id="keywords" placeholder="KEYWORDS" type="text"/>
        <label htmlFor="keywords"></label>
      </div>
      <Button id ="searchBtn" className="col s2 offset-s1" 
          waves='green' onClick={crawler}>Scavenge</Button>
    </div>
  )
}

function Panel(props){
  return (
  <div className='panel'>
    <div className='phead'>
        {props.title}
    </div>
    <pre>{`
    // Imported via webscraper
    function sort(a, b){
      if(a < b){
        doStuff();
      }
      else
        giveUp();
    }
    WE CAN DO MORE!
    `}</pre>
  </div>)
}

class App extends Component {
  componentDidMount(){
    M.AutoInit();
  }
  render() {
    return (
      <div className="App">
          <Search/>
          <Panel title="StackOverflow: sorting arrays in javascript" code="function(){this is code}"/>
      </div>
    );
  }
}

export default App;
