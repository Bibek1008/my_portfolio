import type { SkillGroups as Groups } from "./skills-data";

export default function SkillGroups({ groups }: { groups: Groups }) {
  return <div className="skill-categories">{Object.entries(groups).map(([category, skills]) => (
    <section className="skill-category" key={category}>
      <h3>{category}</h3>
      <ul className="skill-tags" aria-label={category}>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  ))}</div>;
}
