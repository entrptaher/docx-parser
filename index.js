const decompress = require('decompress');
const path = require('path');

var parseDocx = function(filename, outputPath='dist', callback){
  decompress(filename, outputPath).then(files => {
    fs = require('fs')
    fs.readFile(path.resolve(outputPath +'/word/document.xml'), 'utf8', function (err,data) {
	     if (err) {
   	     return console.log(err);
 	     }
    	var plain_text = data.replace(/(<w:p )[\s\S]*?>/g,"\n<w:p").replace(/(<([^>]+)>)/ig, "");
    	callback(plain_text);
    });
  });
}


module.exports.parseDocx = parseDocx;
