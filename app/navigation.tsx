"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function Navigation() { const pathname = usePathname(); const [open, setOpen] = useState(false); return <header><div className="wrap nav-inner"><Link className="brand" href="/" onClick={() => setOpen(false)}><span className="monogram">bb.</span>Bibek Bhandari</Link><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="main-nav" aria-label="Main navigation" className={open ? 'nav-links is-open' : 'nav-links'}>{[['/', 'Home'], ['/industry', 'Industry'], ['/research', 'Research'], ['/resume', 'Resume'], ['/contact', 'Contact']].map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav></div></header>; }
