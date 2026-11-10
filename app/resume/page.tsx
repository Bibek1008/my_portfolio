import type { Metadata } from 'next';
import { CvActions, Education } from '../ui';
export const metadata: Metadata = { title: 'Resume' };
export default function Resume() { return <><section className="wrap track-hero"><p className="eyebrow">RESUME / CURRICULUM VITAE</p><h1>One background.<br /><em>Two perspectives.</em></h1><p className="intro">Education, engineering experience, and research interests. A single CV for both industry and research opportunities.</p><CvActions /></section><Education /></>; }
