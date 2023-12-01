// Event Loop
// event loop is what allows Node.js to perform non-blocking i/o operations -despite the fact that javscript is single threaded - by offloading operations to the system kernel whenever possible.

const {readFile} = require('fs')

console.log("task started")

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err);
    return
  }
  console.log(result)
  console.log('task finished')
})

console.log('new task started')