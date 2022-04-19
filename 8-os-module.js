const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns sys uptime in seconds
const sysUptime = os.uptime()
console.log(sysUptime);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);