import React from "react";
import "./AboutUs.scss";
import Fade from "react-reveal";

export type AboutUsProps = {};

export default function AboutUs(props: AboutUsProps) {
  return (
    <div className={"AboutUs"} id="about-us">
      <div className="about-us-col about-us-col-1">
        <Fade left>
          <h1>Join us to make a difference</h1>
          <h2>Design and Project Office (DPO) in the Engineering Department</h2>
        </Fade>
        <Fade bottom>
          <div className="about-us-with-dec">
            <div className="about-us-with-dec-col-1">
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
                Have coding experience? Apply instead as a mentor, and guarantee your place at our annual hackathon Hack Cambridge Spyder later in the year.
                <br></br>
                What more? There will be free food provided, and an exclusive opportunity to interact with our sponsors and their recruiters!
                <br></br>
                
                <br></br>
                Hack Cambridge Spyder is incredible opportunity for you to explore all possibilities in a sprint-like event.
                <br></br>
                Come with your team to hack together for 24 hours,
                talk to recruiters from our sponsors and enjoy the workshops!
                <br></br>
                We hope to bring keen, ambitious and talented
                students together and create original
                solutions for social good.
                <br></br>
                Together with your energy, creativity,
                hacker spirit, we hope to empower a better, more sustainable future.
                <br></br>
                
                <br></br>
                We look forward to meeting you at Hack Cambridge Spyder Lite Introductory Hackathon this March, and Hack Cambridge Spyder later in the year!
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
