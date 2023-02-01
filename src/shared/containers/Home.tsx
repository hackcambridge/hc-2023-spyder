import { RouteComponentProps } from "@reach/router";
import React, { useLayoutEffect } from "react";
import Body from "../../body/containers/Body";
import {ParallaxProvider, useController} from 'react-scroll-parallax';
import './Home.scss';
import Footer from "../../footer/Footer";

export type HomeProps = { logoPath: string; } & RouteComponentProps;

const ParallaxCache = () => {
    const { parallaxController } = useController();
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => {
            window.removeEventListener('load', handler);
        };
    }, [parallaxController]);
    return null;
  }
  
export default function Home({logoPath}:HomeProps) {
    return (<div className="Home">
        <ParallaxProvider>
            <ParallaxCache />
            <Body logoPath={logoPath}/>
            <Footer />
        </ParallaxProvider>
      </div>);
}