import {base} from '../lib/config';
export default function NotFound(){return <main className="entry"><span>404</span><h1>Page not found / Página no encontrada</h1><a className="button" href={base+'/en/'}>Home</a><a className="button secondary" href={base+'/es/'}>Inicio</a></main>}
