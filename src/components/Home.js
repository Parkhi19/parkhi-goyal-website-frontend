import React, {useEffect, useState} from 'react'
import './styles/home/header.css';
import './styles/home/blogs.css'
import BlogsCard from "./blogs/BlogsCard";
import {Link} from "react-router-dom";
import PersonalInfo from "../model/PersonalInfo";


export default function Home() {
    const [allBlogs, setAllBlogs] = useState([])
    const [personalInfo, setPersonalInfo] = useState(PersonalInfo.default())

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get/all-blogs')
            .then(res => res.json())
            .then((data) => {
                setAllBlogs(
                    data.data.sort(
                        function (a, b) {
                            return b.timeStamp - a.timeStamp
                        }
                    )
                )
            })

        fetch('http://127.0.0.1:5000/get/personal-info')
            .then(res => res.json())
            .then((data) => {
                setPersonalInfo(data.data)
            })
    }, [])

    return (
        <div>
            <header>
                <div className='heading'>
                    <h2 className="home-name">Parkhi Goyal</h2>
                </div>
                <div className='main-header-container d-flex'>
                    <div className='about-content-container'>
                        <p className='about-content'>{personalInfo.aboutHome}</p>
                        <Link to ='/about' className='about-know-more'>Know More</Link>
                    </div>
                    <div className='profile-photo-container'>
                        <img
                            src={personalInfo.photoUrl}
                            className='profile-photo'></img>

                    </div>
                </div>
            </header>
            <div className='blogs-container d-flex'>
                <h1 className='blogs-container-heading'>From my Desk</h1>
            </div>
            <div className='blogs-post-container d-flex'>
                {/*<BlogsCard></BlogsCard>*/}
                {/*<BlogsCard></BlogsCard>*/}
                {/*<BlogsCard></BlogsCard>*/}
                {allBlogs.map((blog) => {
                    return <BlogsCard key={blog.id} isOnBlogsPage={false} blog={blog}></BlogsCard>
                })}
            </div>
            <Link to="/blogs" className='all-blogs-button-container d-flex'>
                <button className='show-all-blogs-arrow d-flex'>
                    <p>Show More</p>
                    <i className="fa-solid fa-chevron-right xl "></i>
                </button>
            </Link>

        </div>
    )
}
