import React from 'react';
import './MainEvent.scss';
import Fade from 'react-reveal';
import Logo from '../components/Logo';
import MLHBanner from "../components/MLHBanner";

// Format is MM/DD/YYYY
export const targetDate = new Date('03/10/2023');

export type MainEventProps = {
    logoPath: string;
};

/**
 * Main Event Section
 */
export default function MainEvent({logoPath}: MainEventProps) {
    return (
        <div className="main-event" id='main-event'>
            <MLHBanner />
            <div className={"main-event-main"}>
                <Fade left>
                    <div className="main-event-col1">
                        <h1 className="main-event-hc-title main-event-hc-title-small">Hack Cambridge</h1>
                        <h1 className="main-event-hc-title main-event-hc-title-medium">Spyder</h1>
                        <h1 className="main-event-date">Oct-Dec 2023</h1>
                        <p>
                        Hack Cambridge Spyder 2023 has been scheduled.<br></br>
                        Our eighth hackathon may run both virtually and in-person. <br></br>
                        We hope this will be our first full capacity in-person hackathon
                        since COVID-19. As a small committee and we would like to grow.
                        If you are a student at the University of Cambridge, and you are
                        interested in joining the Hack Cambride Committee this year,
                        please fill in the application form. No prior experience required. <br></br>
                        Follow us on our social media accounts to receive updates.
                        </p>
                    </div>
                </Fade>
                    <div className="main-event-col2">
                        <Logo logo={logoPath}/>
                        <a href="https://forms.gle/ER9FETGS1fou3XJf9" className="apply-button apps-closed">Join Mailing List</a>
                        <a href="mailto://team@hackcambridge.com" className="apply-button apps-closed">Interested in Sponsoring Us?</a>
                        <p className='hide'>Never Sponsored us before? Don't worry, New Sponsors Welcome</p>
                        <a href="https://forms.gle/6Wuaf5yLQeU7BBVQ9" className="apply-button apps-closed">Committee Application Form</a>
                        <p className='hide'>No Prior Experience Required</p>
                    </div>
            </div>
        </div>
    );
}