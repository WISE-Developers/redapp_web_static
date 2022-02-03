const fixes=require('./fixes.json')
const replace = require('replace-in-file');

const options = {
    dry: true,
  };


const filesToFix = "rip/*.html"
const doWork = async () => {
    for (const fix of fixes.links) {
        if (fix.state=="BROKEN"){
            console.log(`Change ${fix.url} to ${fix.url}.html`);
              const results = replace.sync({
                    files: filesToFix,
                    from: fix.url,
                    to: fix.url + ".html",
                   // dry: true,
                });
                console.log('Replacement results:', results);
        }
        


      
    }
}

doWork();