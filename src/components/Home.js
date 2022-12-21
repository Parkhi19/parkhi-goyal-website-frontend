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
                <div className="blogs-card d-flex">
                        <img src="https://firebasestorage.googleapis.com/v0/b/personal-website-8e475.appspot.com/o/Blog%20content%2Fblog6.png?alt=media&token=6ffe6c09-c379-479e-8309-13dfc7f505ff"/>
                </div>
                <div className="blogs-card d-flex">
                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-website-8e475.appspot.com/o/Blog%20content%2Fblog3.png?alt=media&token=4216c977-26f4-447d-871a-7d86aac26849"/>
                </div>
                <div className="blogs-card d-flex">
                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-website-8e475.appspot.com/o/Blog%20content%2Fblog2.png?alt=media&token=e3ae7861-b353-468e-9c41-3ab773115fb0"/>
                </div>
                {/*{allBlogs.map((blog) => {*/}
                {/*    return <BlogsCard key={blog.id} isOnBlogsPage={false} blog={blog}></BlogsCard>*/}
                {/*})}*/}
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
