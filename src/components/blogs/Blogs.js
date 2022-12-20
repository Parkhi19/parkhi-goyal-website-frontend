import React, {useEffect, useState} from "react";
import '../styles/blogs/blogs-page.css'
import BlogsCard from "./BlogsCard";
export default function Blogs ()
{

    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {

            window.scrollTo(0, 0)
        fetch('http://127.0.0.1:5000/get/all-blogs')
            .then(res => res.json())
            .then((data) => {
                setAllBlogs(data.data)
            })
    }, [])

    return(
        <div className='blogs-background'>
            <div className='blog-item-container d-flex'>
                <div className='blog-image-container'>
                    {allBlogs.map((blog) => {
                        return <BlogsCard key={blog.id} isOnBlogsPage={true} blog={blog}></BlogsCard>
                    })}
                </div>
            </div>
        </div>
    )
}