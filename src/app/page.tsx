'use client';
import {useEffect} from 'react';
import {base} from '../lib/config';
export default function Entry(){useEffect(()=>{let lang='en';try{if(localStorage.getItem('aqua-language')==='es')lang='es';}catch{}window.location.replace(`${base}/${lang}/`);},[]);return <main className="entry"><h1>Aqua Pro Plumbing</h1><a href={base+'/en/'}>English</a><a href={base+'/es/'}>Español</a></main>}
