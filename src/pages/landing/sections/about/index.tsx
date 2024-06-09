// Images
import aboutImage from '../../../../assets/images/about/about-img.jpg';
import signature from '../../../../assets/images/about/signature.svg';

// Styles
import './style.css';

// utils
import { markdownToHTML } from '../../../../utils/converter';

// Data
import aboutData from '../../../../data/about.json';

// -----------------------

function About() {
  return (
    <section id="about" className="section">
      <h2 className="title">BOOK OVERFLOW</h2>
      {/* <div className="section-des">{aboutData.description}</div> */}

      <div className="content-670">
        <p>
          In a world increasingly dominated by short-form content, it's important to engage with long-form ideas. 
          Book Overflow is a podcast dedicated to helping software engineers improve their careers and technical expertise 
          by discussing the best technical books in the world.
        </p>
        <p>
          Co-hosts Carter Morgan and Nathan Toups are professional software engineers with combined experience at 
          both nimble startups and some of the largest companies in the world. Join them and a series of guests as they 
          discuss new tech books every week!
        </p>
        <p>
          <a href="https://open.spotify.com/show/5kj6DLCEWR5nHShlSYJI5L?si=b3ee969d69934dad">Spotify</a>
          <br></br>
          <a href="https://podcasts.apple.com/us/podcast/book-overflow/id1745257325">Apple Podcasts</a>
          <br></br>
          <a href="https://anchor.fm/s/f5bbb69c/podcast/rss">RSS Feed</a>
        </p>
      </div>

      {/* <img
        className="about-img block-right"
        src={aboutImage}
        alt="about image"
      /> */}

      {/* <ul className="about-info">
        {aboutData.aboutInfo.map((info, i: number) => (
          <li key={'about-info-' + i}>
            <h6>{info.title}</h6>
            {info?.text ? (
              <span>{info.text}</span>
            ) : info?.link ? (
              <a href={info?.link?.to}>{info?.link?.text}</a>
            ) : (
              <div></div>
            )}
          </li>
        ))}
      </ul> */}

      {/* <div className="about-text content-670">
        {aboutData.paragraphes.map((text: string, i: number) => (
          <p
            key={'about-p' + i}
            dangerouslySetInnerHTML={{
              __html: markdownToHTML(text),
            }}></p>
        ))}
      </div> */}

      {/* <img className="signature" src={signature} alt="signature" /> */}
    </section>
  );
}

export default About;
