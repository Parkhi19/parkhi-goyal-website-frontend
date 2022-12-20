import React from "react";
import animationData from "../assets/knowMore.json"
import Lottie from "react-lottie"
import'../styles/home/knowMore.css'
export default function KnowMore(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
return(
        <div>
            <div className="know-more-container d-flex">
                <div className="know-more-content">
                    <p>I love murdering people who visit my websites.iiiiiiiiiiiiiiiiiiiiiiiii</p>
                    <p>sacdv bgf</p>
                    <p>dxfcgvbhjnkm</p>
                    <p>dcfgbhjnkm,l</p>
                    <p>sacdv bgf</p>
                    <p>dxfcgvbhjnkm</p>
                    <p>dcfgbhjnkm,l</p>
                    <p>sacdv bgf</p>
                    <p>dxfcgvbhjnkm</p>
                    <p>dcfgbhjnkm,l</p>
                    <p>dcfgbhjnkm,l</p>
                <p>sacdv bgf</p>
                <p>dxfcgvbhjnkm</p>
                <p>dcfgbhjnkm,l</p>
                    <p>dcfgbhjnkm,l</p>
                <p>sacdv bgf</p>
                </div>
                <div className="know-more-animation">
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}/>
                </div>
            </div>

        </div>



)}

