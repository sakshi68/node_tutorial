 const {readFile, writeFile} = require('fs').promises

//  const util = require('util')
 
//  const readFilePromise = util.promisify(readFile)
//  const writeFilePromise = util.promisify(writeFile)


 const start= async()=>{
  try{
    const first = await readFile('./content/first.txt');
    const second = await readFile('./content/second.txt');
    const result = await writeFile('./content/await-fianl.txt',first + second+'this ends here.',);
    console.log('done')
  }catch (error) {
    console.log(error)
  }
   
}
 start();
  
 console.log('hi');
//  const start= async()=>{
//   try{
//     const first = await readFilePromise('./content/first.txt');
//     const second = await readFilePromise('./content/second.txt');
//     const result = await writeFilePromise('./content/await-fianl.txt',first + second+'this ends here.',);
//     console.log('done')
//   }catch (error) {
//     console.log(error)
//   }
   
// }
 
//  const getText = (path)=>{
  //   return new Promise((resolve,reject)=>{
  //     readFile( path,'utf8',(err, result)=>{
  //       if(err){
  //          reject(err)
  //       }else{
  //         resolve(result)
  //       }
  //      })
  //   })
  //  }
  
  //  const write = (path)=>{
  //   return new Promise((resolve,reject)=>{
  //     writeFile('./content/await.txt',path,(err,result)=>{
  //       if(err){
  //         reject(err)
  //       }else{
  //         resolve(result)
  //       }
  //     })
  //   })
  //  }
  