const http = require("http")

  const server = http.createServer((req,res)=>{
           res.write('<h1>hello Node</h1>')
           res.end()


 })
 server.listen(3000)

 var fs = require("fs")
 var data = fs.readFileSync('welcome.txt');
  console.log(data.toString());