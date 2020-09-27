/* 
1, 运行指令
开发环境： webpack  ./src/index.js -o ./build/built.js --mode=development
生产环境： webpack  ./src/index.js -o ./build/built.js --mode=production
*/

/*
    1, it can only handel js and json resource..
    2, webpack cannot pack css,img file....
    3, It can compile ES6 mdole into the one that browser can recongnize.
*/

import data from "./data.json";
import "./index.css";
function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
console.log("name is:,", data.name);
console.log("name is:,", data.age);
