import {company,siteUrl} from './config';
// Activation requires verified business information and production mode.
export function businessStructuredData(){
 if(company.demo||!company.verified||!company.address||!company.phone)return null;
 return {'@context':'https://schema.org','@type':'Plumber',name:company.name,url:siteUrl,telephone:company.phone,address:company.address,...company.email?{email:company.email}:{},...company.hours?{openingHours:company.hours}:{},...company.serviceAreas.length?{areaServed:company.serviceAreas}:{}};
}
