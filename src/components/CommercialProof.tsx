import {commercialContent,base} from '../lib/config';
import {experience} from '../lib/experience';
import type {Lang} from '../lib/content';
export default function CommercialProof({lang}:{lang:Lang}){
 const groups=(Object.keys(commercialContent) as (keyof typeof commercialContent)[]).map(key=>({key,items:commercialContent[key].filter(item=>item.verified&&item.title.en&&item.title.es&&item.text.en&&item.text.es&&/^https:\/\//.test(item.sourceUrl))})).filter(group=>group.items.length);
 if(!groups.length)return null;
 return <section className="container section commercial-proof"><h2>{experience[lang].proof}</h2>{groups.map(group=><div key={group.key}><h3>{experience[lang][group.key]}</h3><div className="proof-items">{group.items.map(item=><article key={item.sourceUrl+item.title.en}>{item.image&&<img src={base+item.image} width="600" height="400" loading="lazy" alt={item.title[lang]}/>}<h3>{item.title[lang]}</h3><p>{item.text[lang]}</p><a href={item.sourceUrl}>{lang==='en'?'View source':'Ver fuente'}</a></article>)}</div></div>)}</section>;
}
