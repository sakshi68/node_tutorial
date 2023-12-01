 //path is in build module and in this section we learn some method of this module like sep(path separator)
//  join (it will join the path with sep), resolve (give us absolute path), basename(last file namen in dir)
 
const path = require(`path`)

const sep = path.sep;
console.log(sep);

const filePath = path.join('Documents','hac','practice');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve( filePath)
console.log(absolute);
