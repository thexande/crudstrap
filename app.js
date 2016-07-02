var fs = require('fs-extra')
var sys = require('sys')
var exec = require('child_process').exec;
var serverCtrl = require('./controllers/server')
// import our configuration file

var crudstrapConfig = fs.readJsonSync('./crudstrap.json')
// console.log(crudstrapConfig);
// generate serverside files
serverCtrl.generateServerFiles(crudstrapConfig)

// download dependencies
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec('cd ' + crudstrapConfig.name + '&& npm install && bower install', puts);

// var packageObj = {"property":"value"}
// fsp.writeFile("./projectDirectory/package.json", JSON.stringify(packageObj))
//   .then((resp) => {
//     console.log(resp);
//   })
