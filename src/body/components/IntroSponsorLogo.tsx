import React from "react";
import './IntroSponsorLogo.scss';

export type IntroSponsorLogoProps = {
    introsponsorlogo: string
};

export default function IntroSponsorLogo({introsponsorlogo}: IntroSponsorLogoProps) {
    return (
        <div className="Intro-Sponsor-Logo-body">
            <img src={introsponsorlogo} className="intro-sponsor-logo-body" alt="intro-sponsor-logo" />
        </div>
    );
}