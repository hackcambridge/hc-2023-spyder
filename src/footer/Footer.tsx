import React from "react";

import './Footer.scss';

import website from '../shared/img/hc-website.png';
import facebook from '../shared/img/hc-facebook.png';
import linkedin from '../shared/img/hc-linkedin.png';
import instagram from '../shared/img/hc-instagram.png';
import email from '../shared/img/hc-mail.png';
import twitter from '../shared/img/hc-twitter.png';
// import MailingListForm from "./MailingListForm";


export type FooterProps = {};

export default function Footer(props: FooterProps) {
    return <div className="Footer">
        <div className="JoinUs">
            <a href="https://forms.gle/ER9FETGS1fou3XJf9"><h1>Join our mailing list!</h1></a>
            <a href="https://forms.gle/6Wuaf5yLQeU7BBVQ9"><h1>Join our organising committee!</h1></a>
            <a href="https://forms.gle/YCJTsC9oPYfXe9Hs9"><h1>Apply today!</h1></a>
        </div>
        <div className="SocialMedia">
            <a href="https://hackcambridge.com">
                <img src={website} alt="website" />
            </a>
            <a href="mailto://team@hackcambridge.com">
                <img src={email} alt="email" />
            </a>
            <a href="https://www.facebook.com/hackcambridge">
                <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://twitter.com/Hack_Cambridge/">
                <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.instagram.com/hack_cambridge/">
                <img src={instagram} alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/company/hack-cambridge">
                <img src={linkedin} alt="Linkedin"/>
            </a>
        </div>
    </div>;
}

