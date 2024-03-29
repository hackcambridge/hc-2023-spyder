import React from "react";
import "./AboutIntro.scss";
import Fade from "react-reveal";
import DirectionsVideo from "../../shared/img/directions-to-CUED-DPO.mp4";

export type AboutIntroProps = {};

export default function AboutIntro(props: AboutIntroProps) {
  return (
    <div className={"AboutIntro"} id="about-intro">
      <div className="about-intro-col about-intro-col-1">
        <Fade left>
          <h1>Join us to develop coding skills</h1>
          <h2>Design and Project Office (DPO) in the Engineering Department</h2>
        </Fade>
        <Fade bottom>
          <div className="about-intro-with-dec">
            <div className="about-intro-with-dec-col-1">
              <p>
                Greetings from Hack Cambridge!
                We know that you are as excited as we are about the upcoming events.
                <br></br>
                The largest student-run hackathon in Cambridge is back.
                This year, Hack Cambridge has been organising two events:
                Hack Cambridge Spyder Lite Introductory Hackathon & Hack Cambridge Spyder Hackathon
                <br></br>
                
                <br></br>
                Hack Cambridge Spyder Lite is your opportunity to develop vital coding skills.
                <br></br>
                This will be an excellent opportunity for hackers to receive support and guidance from proficient coders.
                <br></br>
                There will be free food provided, and an exclusive opportunity to interact with our sponsors and their recruiters!
                <br></br>
                
                <br></br>
                We look forward to meeting you at Hack Cambridge Spyder Lite Introductory Hackathon this March!
              </p>
              <iframe width="100%" height="400" src={DirectionsVideo} title="Directions Video to the CUED DPO"></iframe>
              <a href="https://hackcambridge.com/documents/privacy-policy.pdf" className="document-link">Spyder Lite Privacy Policy</a>
              <a href="https://hackcambridge.com/documents/code-of-conduct.pdf" className="document-link">Spyder Lite Code of Conduct</a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
