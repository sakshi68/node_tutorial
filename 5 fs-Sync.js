// ----------------fs sync approach--------------
// fs has two flavor one async: non blocking  sync: blocking
// prefer async over sync

const {readFileSync, writeFileSync} = require('fs')
const path =require('path')

const first = readFileSync('./content/first.txt','utf8' )
const second = readFileSync(path.join('content','second.txt'),'ascii')
console.log(first, second)


const result = writeFileSync
('./content/result.txt',
`Here is summary for two days :${first}\n, ${second}`,{flag: 'a'})
