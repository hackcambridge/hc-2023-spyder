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
                        This is our first of a kind introductory hackathon! <br></br>
                        We'll be bringing together experienced hackers with <br></br>
                        beginners to level the playing field at our main event. <br></br>
                        Applications will be opening very soon! <br></br>
                        Follow us on our social media accounts to receive updates.
                        </p>
                    </div>
                </Fade>
                    <div className="landing-col2">
                        {/* <LightBulb /> */}
                        <Timer targetDate={targetDate} until={"Applications Open"}/>
                        {applicationsOpen && <a href={href} className="apply-button">Apply today!</a>}
                        {!applicationsOpen && (
                        <>
                        {/* <a href="/" className="apply-button apps-closed">Applications closed</a> */}
                        <a href="https://forms.gle/ER9FETGS1fou3XJf9" className="apply-button apps-closed">Join Mailing List</a>
                        <a href="mailto://team@hackcambridge.com" className="apply-button apps-closed">Interested in Sponsoring Us?</a>
                        <p className='hide'>Never Sponsored us before? Don't worry, New Sponsors Welcome</p>
                        <a href="https://forms.gle/6Wuaf5yLQeU7BBVQ9" className="apply-button apps-closed">Actively Recruiting</a>
                        <p className='hide'>No Prior Experience Required</p>
                        </>
                        )}
                    </div>
            </div>
        </div>
    );
}