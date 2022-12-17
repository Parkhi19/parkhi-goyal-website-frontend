import React from "react";
import '../styles/blogs/blogs-page.css'
import BlogsCard from "./BlogsCard";
export default function Blogs ()
{
    const imageArray =[
        "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1569775309692-fd5e62248d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1580894897591-ff1e18c89183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1604955083900-bd8b721b5d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1593537084345-84c9427518af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"

    ]
    return(
        <div>
            <div className='blog-heading'><h2>Parkhi</h2></div>
            <div className='blog-item-container d-flex'>
                <div className='blog-image-container'>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                    <BlogsCard isOnBlogsPage={true}></BlogsCard>
                </div>
            </div>
        </div>
    )
}