var fs = require('fs-extra')
module.exports = {
  generateServerFiles: (config) => {
    // configure npm and bower package names
    config.package.name = config.name
    config.bower.name = config.name
    
    // set up directories
    console.log(config);
    fs.mkdirsSync("./" + config.name + "/bin" )
    fs.mkdirsSync("./" + config.name + "/config" )
    fs.mkdirsSync("./" + config.name + "/app" )
    fs.mkdirsSync("./" + config.name + "/public" )
    // configure dependency managers ( bower/npm )

    // set up files
    fs.writeFileSync("./" + config.name + "/.bowerrc", '{"directories":"public/bower_components"}')
    fs.writeFileSync("./" + config.name + "/package.json", JSON.stringify(config.package))
    fs.writeFileSync("./" + config.name + "/bower.json", JSON.stringify(config.bower))
  }
}
