import { useEffect, useState } from 'react';

// Styles
import './style.css';

// Data
import skillsData from '../../../../data/skills.json';
import { markdownToHTML } from '../../../../utils/converter';

// ------------------

function Skills() {
  const [progressReached, setProgressReached] = useState<boolean>(false);

  useEffect(() => {
    const progressBox = document.querySelector('.skills-progress');

    /**
     * Adding width to progress bars on reaching
     */
    const handleScroll = () => {
      if (progressBox) {
        const { top } = progressBox.getBoundingClientRect();
        if (top <= 100) setProgressReached(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="title">SCHEDULE</h2>
      <p>We'd love for you to follow along as we read the best technical books in the world!</p>
      <iframe className='schedule-iframe' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2lI3FoLSjpIB7aKpUNupCwD9u3dYA3oDMmlHU738bomgXNtl30oRjKNPhcgx7gPszysoFbcnXW48H/pubhtml?widget=true&amp;headers=false"></iframe>
      <p>(All Amazon links are paid affiliate links. We earn from qualifying purchases.)</p>
      {/* <div className="section-des">{skillsData.description}</div>
      <p
        className="content-670"
        dangerouslySetInnerHTML={{
          __html: markdownToHTML(skillsData.paragraphe),
        }}></p>

      <ul className="skills-history block-right">
        {skillsData.skillsHistory.map((skill, i: number) => (
          <li key={'skill=item-' + i}>
            <span className="date">{skill.title}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skill.description),
              }}></p>
          </li>
        ))}
      </ul>

      <ul className="skills-progress">
        {skillsData.skillsProgress.map((prog, i) => (
          <li key={'prog' + i}>
            <span className="name">{prog.name}</span>
            <div className="skill">
              <div
                className="skill-fill"
                style={{
                  width: progressReached ? `${prog.percentage}%` : 0,
                }}></div>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

export default Skills;
