import React from "react";
import "./AboutMain.scss";
import Fade from "react-reveal";

export type AboutMainProps = {};

export default function AboutMain(props: AboutMainProps) {
  return (
    <div className={"AboutMain"} id="about-main">
      <div className="about-main-col about-main-col-1">
        <Fade left>
          <h1>Join us to make a difference</h1>
          <h2>The Cambridge Corn Exchange and Cambridge Guildhalls</h2>
        </Fade>
        <Fade bottom>
          <div className="about-main-with-dec">
            <div className="about-main-with-dec-col-1">
              <p>
                Greetings from Hack Cambridge!
                We know that you are as excited as we are about the upcoming events.
                The largest student-run hackathon in Cambridge is back.
                <br></br>
                This year, Hack Cambridge has been organising two events:
                Hack Cambridge Spyder Lite Introductory Hackathon & Hack Cambridge Spyder Hackathon
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
                We look forward to meeting you at Hack Cambridge Spyder later this year!
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
