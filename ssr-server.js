const express = require('express')
const next = require('next')

// Web crawling operations
const rp = require('request-promise')

    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function crawl(){
    rp("https://www.google.com/search?client=firefox-b-1-d&q=array+sort+js")
    .then(function(html){
        console.log(html)
    })
    .catch(function(err){
        console.log(err)
    })

}

function sayHi(){
  console.log("hi")
}
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.get("/scavenge", (req,res)=>{

    console.log("CRAWLING...");
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
    process.exit(1)
})

module.exports = "sayHi"