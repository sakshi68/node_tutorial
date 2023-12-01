const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write('Welcome to our home page')
    res.end()
  }
  res.end(
     `oops!! no page found..`
      )
  
})

server.listen(5000);