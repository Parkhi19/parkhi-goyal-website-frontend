import React from "react";
import '../styles/blogs/blogs-card.css'
export default function BlogsCard (props) {
    let imageClass = "blogs-image-small";
    if ((props.isOnBlogsPage))
        imageClass = "blogs-image-large"
    return(
        <div className='blogs-card'>
            <img src={props.blog.photoUrl} className={imageClass}/>
            <p className='blog-caption'>{props.blog.caption}</p>
        </div>
    )
}
