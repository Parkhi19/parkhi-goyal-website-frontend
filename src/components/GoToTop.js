import React from "react";
import './styles/go-to-top.css'
const GoToTop =()=>{
    const goToBtn=()=>{
      window.scrollTo({top:0, left:0,behavior:"smooth" });
    }

    return(
    <div className="top-btn d-flex" onClick ={goToBtn}>
        <i className="fa-solid fa-arrow-up fa-bounce xl d-flex "></i>
    </div>
);
};
export default GoToTop;