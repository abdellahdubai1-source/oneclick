// Optional local preview. No dependencies. Website also opens directly via dist/index.html.
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root = path.resolve(fileURLToPath(new URL('./dist/', import.meta.url)));
const args = process.argv.slice(2);
const getArg = (name, fallback) => args.includes(name) ? args[args.indexOf(name)+1] : fallback;
const port = Number(getArg('--port', '4173'));
const host = getArg('--host', '127.0.0.1');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
http.createServer(async (req,res)=>{
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const target = path.resolve(root, '.'+(pathname==='/'?'/index.html':pathname));
    if(!target.startsWith(root+path.sep) && target!==path.join(root,'index.html')) {res.writeHead(403);res.end('Forbidden');return;}
    const data = await readFile(target);
    res.writeHead(200, {'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);
  } catch {res.writeHead(404);res.end('Not found');}
}).listen(port,host,()=>console.log(`Local preview is ready on port ${port}`));
