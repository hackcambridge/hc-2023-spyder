import React from "react";
import './Logo.scss';

export type LogoProps = {
    logo: string
};

export default function Logo({logo}: LogoProps) {
    return (
        <div className="Logo-body">
            <img src={logo} className="HC-logo-body" alt="logo" />
        </div>
    );
}