export const company = { name: 'Aqua Pro Plumbing', logo: '/images/aqua.png', phone: '', email: '', address: '', hours: '', serviceAreas: [] as string[], socials: [] as {label:string;url:string}[], demo: true, verified: false };
export const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl = 'https://gudrum.github.io/plumbing';

// Leave empty until the client supplies verified facts and permission to publish.
export type VerifiedContent = { verified:boolean; title:{en:string;es:string}; text:{en:string;es:string}; sourceUrl:string; image?:string };
export const commercialContent:{team:VerifiedContent[];reviews:VerifiedContent[];pricing:VerifiedContent[];conditions:VerifiedContent[]}={team:[],reviews:[],pricing:[],conditions:[]};
