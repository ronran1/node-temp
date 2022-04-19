// GLOBALS - NO WINDOW !!! Why? Because no browser
// __dirname - path to current dir
// __filename - filename
// require - function to use modules (CommonJS))
// module - info about current module (file)
// process - info about env where program is being executed

console.log(process);
setInterval(() => {
    console.log('hello world');
}, 1000)