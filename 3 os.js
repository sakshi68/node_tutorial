const os=require('os')

const user = os.userInfo();
console.log(user);

console.log(os.uptime())

const curerntos ={
  relese: os.release(),
  totalMem : os.totalmem(),
  freeMem :os.freemem(),
  type: os.type(),
}

console.log(curerntos);