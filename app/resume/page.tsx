import type { Metadata } from 'next';
import { CvActions, Education } from '../ui';
export const metadata: Metadata = { title: 'Resume' };
export default function Resume() { return <><section className="wrap track-hero"><p className="eyebrow">RESUME / CURRICULUM VITAE</p><h1>Education and<br /><em>experience.</em></h1><p className="intro">Details of my education, experience, and research interests.</p><CvActions /></section><Education /></>; }
