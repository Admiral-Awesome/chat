//version generator 
//like v0.04-4-Jan-2017.07-50-38

var dateFormat = require('dateformat');
var exec = require('child_process').exec;
   exec('git describe',
    (error, stdout, stderr) => { 
        console.log("previous ".concat( stdout ? stdout : "unknown"))
    	if (stdout.length <= 4 && stdout) {
    		console.log("version not found")
    		return;
    	}
    	var now = new Date();
    	var ver = "v".concat(parseFloat(stdout.substr(1,stdout.indexOf("-")-1))+0.01).concat("-" + dateFormat(now, "d-mmm-yyyy.hh-MM-ss"));
    	 exec(`git tag -a ${ver} -m ${ver}`, function(err, out) {
    	 		if (!err) {
    	 			console.log("success")
    	 			console.warn (`new version : ${ver}`)	
    	 		}
    	 		
    	 })

    })
