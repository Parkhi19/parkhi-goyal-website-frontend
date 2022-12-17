import React from "react";
import '../styles/blogs/blogs-card.css'
export default function BlogsCard (props) {
    let imageClass = "blogs-image-small";
    if ((props.isOnBlogsPage))
        imageClass = "blogs-image-large"
    return(
        <div className='blogs-card'>
            <img src='https://plus.unsplash.com/premium_photo-1661692771609-cf95e59d72e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className={imageClass}/>
            <p className='blog-caption'>lorekhuj</p>

        </div>
    )
}
