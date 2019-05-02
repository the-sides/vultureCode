import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './static/style.sass';
import './App.css'
import { Button} from 'react-materialize'
import M from 'materialize-css'
// For webscrapper
const query = 'request'

// let crawler = () => { console.log("crawler") }
// query("google");

const newPanel = () => {
  console.log("New panel");
  // Create new 
  let app = document.getElementById('App');
  let panelDOM = document.createElement('div');
  panelDOM.className = "panelReact"
  app.appendChild(panelDOM);

  // But I should not be calling this often?
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
    <code>{props.content}</code>
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
            <Panel title="GeeksForGeeks: Sample Query Responce" 
                  content="function func() { 
  
                    //Original string 
                    var arr = [2, 5, 8, 1, 4] 
                  
                    //Sorting the array 
                    document.write(arr.sort()); 
                    document.write('<br>'); 
                    document.write(arr); 
                } 
                func(); "/>
            <Panel title="StackOverflow: Sorting an array of JavaScript objects by property" content="var sort_by = function(field, reverse, primer){
            var key = primer ? 
                function(x) {return primer(x[field])} : 
                function(x) {return x[field]};

            reverse = !reverse ? 1 : -1;

            return function (a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
              } 
            }"></Panel>
            <Panel title="Using JavaScript's sort Method for Sorting Arrays of Numbers" content="myArray.sort((a, b) => a - b);"></Panel>
          </div>
      </div>
    );
  }
}

export default App;
