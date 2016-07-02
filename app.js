var fs = require('fs-extra')
var serverCtrl = require('./controllers/server')
// import our configuration file

var crudstrapConfig = fs.readJsonSync('./crudstrap.json')
console.log(crudstrapConfig);
// generate serverside files
serverCtrl.generateServerFiles(crudstrapConfig)


// var packageObj = {"property":"value"}
// fsp.writeFile("./projectDirectory/package.json", JSON.stringify(packageObj))
//   .then((resp) => {
//     console.log(resp);
//   })
