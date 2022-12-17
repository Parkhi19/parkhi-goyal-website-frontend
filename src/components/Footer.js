import React from 'react'
import './styles/footer.css'

export default function Footer()
{
    return(
        <footer >
            <div className='d-flex footer-start-line'>
                <h4>Feel free to reach out to me !</h4>
            </div>
            <div>
                <div className="icons-container d-flex">
                    <a href='https://www.linkedin.com/in/parkhi-goyal-b90560224/' target='_blank'><i className="fa-brands fa-linkedin footer-icon"></i></a>
                    <a href='https://leetcode.com/parkhi_goyal11/' target='_blank'><i className="fa-solid fa-code footer-icon"></i></a>
                    <a href='https://www.codechef.com/users/parkhi_goyal11' target='_blank'><i className="fa-solid fa-laptop-code footer-icon"></i></a>
                    <a href='mailto:parkhigoyal46@gmail.com' target='_blank'><i className="fa-solid fa-at footer-icon"></i></a>
                </div>
                <div className="d-flex">
                    <h4 className='footer-end-line'>Happy to be acquaintances :)</h4>
                </div>
            </div>
        </footer>
    )
}

