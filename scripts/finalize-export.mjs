import fs from 'node:fs';
import path from 'node:path';
// The shared root layout is language-neutral; make static document language
// explicit before JavaScript executes for screen readers and crawlers.
function visit(dir,lang){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())visit(file,lang);else if(file.endsWith('.html'))fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('<html lang="en"','<html lang="'+lang+'"'));}}
for(const lang of ['en','es'])visit(path.join('out',lang),lang);
fs.writeFileSync('out/.nojekyll','');
