// Images
import aboutImage from '../../../../assets/images/about/about-img.jpg';
import signature from '../../../../assets/images/about/signature.svg';
import spotifyBadge from '../../../../assets/images/podcast-icons/spotify-badge.svg'
import applePodcastsBadge from '../../../../assets/images/podcast-icons/applepodcasts-badge.svg'
import youtubeBadge from '../../../../assets/images/podcast-icons/youtube-badge.svg'
import rssBadge from '../../../../assets/images/podcast-icons/rss-badge.svg'
import pocketCastsBadge from '../../../../assets/images/podcast-icons/pocketcasts-badge.svg'
import overcastBadge from '../../../../assets/images/podcast-icons/overcast-badge.svg'
import castboxBadge from '../../../../assets/images/podcast-icons/castbox-badge.svg'

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
          Book Overflow is a podcast dedicated to helping software engineers improve their craft and careers 
          by discussing the best technical books in the world.
        </p>
        <p>
          Co-hosts Carter Morgan and Nathan Toups are professional software engineers with combined experience at 
          both nimble startups and some of the largest companies in the world. Join them and a series of guests as they 
          discuss new tech books every Monday!
        </p>
        <div className="flex-container">
          <a href="https://www.youtube.com/@BookOverflowPod">
            <img src={youtubeBadge} alt="YouTube Badge" />
          </a>
          <a href="https://open.spotify.com/show/5kj6DLCEWR5nHShlSYJI5L?si=b3ee969d69934dad">
            <img src={spotifyBadge} alt="Spotify Badge" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/book-overflow/id1745257325">
            <img src={applePodcastsBadge} alt="Apple Podcasts Badge" />
          </a>
          <a href="https://pca.st/k05cg29o">
            <img src={pocketCastsBadge} alt="Pocket Casts Badge" />
          </a>
          <a href="https://overcast.fm/itunes1745257325/book-overflow">
            <img src={overcastBadge} alt="Overcast Badge" />
          </a>
          <a href="https://castbox.fm/channel/id6174835">
            <img src={castboxBadge} alt="Castbox Badge" />
          </a>
          <a href="https://anchor.fm/s/f5bbb69c/podcast/rss">
            <img src={rssBadge} alt="RSS Badge" />
          </a>
        </div>
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
