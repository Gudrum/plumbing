import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={robots:{index:false,follow:false},title:'Aqua Pro Plumbing',description:'Plumbing services for homes and businesses.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
