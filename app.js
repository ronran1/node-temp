// npm = global command comes with node
// npm -- version

// local dependencey, luse only in particular project
// npm i packageName

// global dependency - use in any project
// npm install -g packageName
// sudo npm install -g packageName (mac)

// package.json - manifest file (stores impt info about project/package)
// manual approach (create package.json in root, create props etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);