import React from 'react';
import './Landing.scss';
import Timer from '../components/Timer';
import Fade from 'react-reveal';

// Format is MM/DD/YYYY
export const targetDate = new Date('03/10/2023');

export type LandingProps = {
    href: string;
    logoPath: string;
    applicationsOpen: boolean;
};

/**
 * Landing Section
 */
export default function Landing({href, logoPath, applicationsOpen}: LandingProps) {
    // TODO: Move state up to Landing and define all the constants here
    return (
        <div className="Landing">
            <div className={"landing-main"}>
                <Fade left>
                    <div className="landing-col1">
                        <h1 className="landing-hc-title landing-hc-title-small">Hack Cambridge</h1>
                        <h1 className="landing-hc-title landing-hc-title-medium">Spyder Lite</h1>
                        <h1 className="landing-date">12 Mar 2023</h1>
                        {/* <MailingListForm /> */}
                        {/* <SponsorButton /> */}
                        <p>
                        Cambridge's biggest student-run hackathons are back! <br></br>
                        We're excited to present Hack Cambridge Spyder Lite 2023. <br></br>
                        This is your opportunity to develop vital coding skills! <br></br>
                        We'll be bringing together experienced hackers with <br></br>
                        beginners to level the playing field at our main event. <br></br>
                        Applications will be opening very soon! <br></br>
                        Follow us on our social media accounts to receive updates.
                        </p>
                    </div>
                </Fade>
                    <div className="landing-col2">
                        {/* <LightBulb /> */}
                        <Timer targetDate={targetDate} until={"Event Begins"}/>
                        {applicationsOpen && <a href={href} className="apply-button">Apply today!</a>}
                        {!applicationsOpen && (
                        <>
                        {/* <a href="/" className="apply-button apps-closed">Applications closed</a> */}
                        <a href="http://eepurl.com/ij_qOn" className="apply-button apps-closed">Join Mailing List</a>
                        </>
                        )}
                    </div>
            </div>
        </div>
    );
}