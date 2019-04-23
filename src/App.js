import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './static/style.sass';
import './App.css'
import { Button} from 'react-materialize'
import M from 'materialize-css'

// let crawler = () => { console.log("crawler") }

const newPanel = () => {
  console.log("New panel");
  // Create new 
  let app = document.getElementById('App');
  let panelDOM = document.createElement('div');
  panelDOM.className = "panelReact"
  app.appendChild(panelDOM);

  ReactDOM.render(
      <Panel title="StackOverflow: sorting arrays in javascript" 
              content="function(){this is code}"/>,
      panelDOM
  )
}

function Search(){
  return (
   <div className='searchBar row'>
      <div className="input-field col s8">
        <input id="keywords" placeholder="KEYWORDS" type="text"/>
        <label htmlFor="keywords"></label>
      </div>
      <Button id ="searchBtn" className="col s2 offset-s1" 
          waves='green' onClick={newPanel}>Scavenge</Button>
    </div>
  )
}

function Panel(props){
  return (
  <div className='panel'>
    <div className='phead'>
        {props.title}
    </div>
    <pre>{props.content}</pre>
  </div>
  )
}

class App extends Component {
  componentDidMount(){
    M.AutoInit();
  }
  render() {
    return (
      <div id="App">
          <Search/>
          <div className="panelReact">
            <Panel title="StackOverflow: sorting arrays in javascript" 
                  content="function(){this is code}"/>
          </div>
      </div>
    );
  }
}

export default App;
