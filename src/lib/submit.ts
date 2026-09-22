import { company } from './config';
export type RequestData = {intent:string;service:string;property:string;description:string;city:string;zip:string;date:string;time:string;name:string;email:string;phone:string;method:string;consent:boolean};
// Replace this isolated adapter with an authenticated backend integration for production.
// This demo never logs, persists or transmits contact details.
export async function submitRequest(_data: RequestData):Promise<{demo:true}> {
  if (!company.demo) throw new Error('Production adapter is not configured');
  await new Promise(resolve=>setTimeout(resolve,450));
  return {demo:true};
}
