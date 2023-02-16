import React from "react";
import "./IntroSponsor.scss";
import Fade from "react-reveal";
import IntroSponsorLogo from "../components/IntroSponsorLogo";
import ReplyLogo from "../../shared/img/sponsors/reply.png";

export type IntroSponsorProps = {};

export default function IntroSponsor(props: IntroSponsorProps) {
  return (
    <div className={"IntroSponsor"} id="intro-sponsor">
      <div className="intro-sponsor-col intro-sponsor-col-1">
        <Fade left>
          <h1>Sponsored and Cohosted with Reply</h1>
          <IntroSponsorLogo introsponsorlogo={ReplyLogo} />
        </Fade>
        <Fade bottom>
          <div className="intro-sponsor-with-dec">
            <div className="intro-sponsor-with-dec-col-1">
              <p>
              Reply is a company that specialises in Consulting, Systems Integration and Digital Services with a focus on <br></br>
              the conception, design and implementation of solutions based on the new communication channels and digital media. <br></br>
              Reply partners with key industrial groups in defining and developing business models made possible <br></br>
              by the new technological and communication paradigms such as Artificial Intelligence, Big Data, <br></br>
              Cloud Computing, Digital Communication, the Internet of Things and Mobile and Social Networking. <br></br>
              In so doing, it aims to optimise and integrate processes, applications and devices.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
