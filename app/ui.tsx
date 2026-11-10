import { existsSync } from 'node:fs';
import path from 'node:path';
import type { Project } from './data';
export function External({ href, children }: {
    href: string;
    children: React.ReactNode;
}) { return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>; }
export function CvActions() { return existsSync(path.join(process.cwd(), 'public', 'bibek-bhandari-cv.pdf')) ? <div className="actions"><a className="button primary" href="/bibek-bhandari-cv.pdf" download>Download CV ↓</a><External href="/bibek-bhandari-cv.pdf">View CV ↗</External></div> : <div className="cv-pending"><span className="button" aria-disabled="true">Download CV · coming soon</span><p>CV available on request. <a href="mailto:bibekbhandari78430@gmail.com">Email Bibek ↗</a></p></div>; }
export function Section({ id, label, title, children }: {
    id: string;
    label: string;
    title: string;
    children: React.ReactNode;
}) { return <section className="wrap section" id={id}><div className="heading"><p className="eyebrow">{label}</p><h2>{title}</h2></div>{children}</section>; }
export function ProjectCard({ project, index }: {
    project: Project;
    index: number;
}) { return <article className="project-card"><div className="project-top"><p className="eyebrow">{project.category}</p><span className="index">{String(index + 1).padStart(2, '0')}</span></div><h3>{project.title}</h3><p>{project.description}</p><ul className="contributions">{project.details.map(item => <li key={item}>{item}</li>)}</ul><ul className="tags" aria-label="Technologies and methods">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{(project.demo || project.source) && <div className="project-links">{project.demo && <External href={project.demo}>Live demo ↗</External>}{project.source && <External href={project.source}>GitHub ↗</External>}</div>}</article>; }
export function Education() { return <Section id="education" label="EDUCATION" title="A foundation in computer science."><div className="timeline"><div><h3>CMR Institute of Technology</h3><p>Bengaluru · 2022–2026</p></div><div><h3>B.E. Computer Science and Engineering</h3></div></div></Section>; }
