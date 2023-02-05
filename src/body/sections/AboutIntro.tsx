import React from "react";
import "./AboutIntro.scss";
import Fade from "react-reveal";

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
                The largest student-run hackathon in Cambridge is back.
                <br></br>
                This year, Hack Cambridge has been organising two events:
                Hack Cambridge Spyder Lite Introductory Hackathon & Hack Cambridge Spyder Hackathon
                <br></br>
                
                <br></br>
                Hack Cambridge Spyder Lite will be a first of its kind introductory hackathon.
                We will be bringing together experienced hackers with beginners.
                <br></br>
                We expect that this will be an excellent opportunity for complete beginners to receive support and guidance from proficient coders.
                <br></br>
                What more? There will be free food provided, and an exclusive opportunity to interact with our sponsors and their recruiters!
                <br></br>
                
                <br></br>
                We look forward to meeting you at Hack Cambridge Spyder Lite Introductory Hackathon this March!
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
