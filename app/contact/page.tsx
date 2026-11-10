import type { Metadata } from 'next';
import { External } from '../ui';
export const metadata: Metadata = { title: 'Contact' };
export default function Contact() { return <section className="wrap track-hero"><p className="eyebrow">CONTACT</p><h1>Let’s start<br /><em>a conversation.</em></h1><p className="intro">Connect about AI engineering, full-stack development, research assistant opportunities, and graduate research.</p><div className="socials"><External href="https://github.com/Bibek1008">GitHub ↗</External><External href="https://linkedin.com/in/bibek-bhandari-053283226">LinkedIn ↗</External><External href="https://hashnode.com/@bibekbhandari1">Hashnode ↗</External><External href="https://leetcode.com/u/Bibek_Bhandari1/">LeetCode ↗</External></div></section>; }
