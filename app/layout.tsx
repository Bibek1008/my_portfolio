import type { Metadata } from 'next';
import Navigation from './navigation';
import { External } from './ui';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Bibek Bhandari | AI Engineering & Research', template: '%s | Bibek Bhandari' }, description: 'Building intelligent systems. Researching reliable AI. Explore AI applications, agentic systems, and reproducible research by Bibek Bhandari.', openGraph: { title: 'Bibek Bhandari | AI Engineering & Research', description: 'Building intelligent systems. Researching reliable AI.', type: 'website' } };
export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main">{children}<section className="contact-banner wrap" id="contact"><p className="eyebrow">LET’S CONNECT</p><h2>Interesting questions.<br />Thoughtful engineering.</h2><p>For engineering opportunities, research collaborations, or a conversation about AI.</p><a className="email text-link" href="mailto:bibekbhandari78430@gmail.com">bibekbhandari78430@gmail.com ↗</a></section></main><footer className="wrap footer"><strong>Bibek Bhandari.</strong><p>© {new Date().getFullYear()} · Engineering & research</p><div className="socials"><External href="https://github.com/Bibek1008">GitHub ↗</External><External href="https://hashnode.com/@bibekbhandari1">Writing ↗</External></div></footer></body></html>; }
