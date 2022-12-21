import React, {useEffect, useState} from "react";
import animationData from "../assets/knowMore.json"
import Lottie from "react-lottie"
import'../styles/home/knowMore.css'
export default function KnowMore(){
    const[knowMoreContent, setKnowMoreContent] = useState([])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  useEffect(()=>{
      fetch('http://127.0.0.1:5000/get/know-more-content')
          .then(res=> res.json())
          .then((data) =>
          {
              setKnowMoreContent(
                  data.data.paragraphs
              )
          })
      },[]
  )

return(
        <div>
            <div className="know-more-container d-flex">
                <p className="know-more-static">My current professional interests broadly include data structures, algorithms, web development, Android development, and competitive programming. Simply put, I am currently focused to create and carve out the best possible software engineer out of myself and trying things to single out the best-suited domain for me.</p>
                <div className="know-more-animation">
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}/>
                </div>
            </div>
            <div className="know-more-content">
                {knowMoreContent.map((content) =>
                    {
                        return <p>{content}</p>
                    }
                )}
            </div>
        </div>



)}

