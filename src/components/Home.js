import React from 'react'
import './styles/home/header.css';
import './styles/home/blogs.css'
import BlogsCard from "./blogs/BlogsCard";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <div className='heading'>
                    <h2>Parkhi Goyal</h2>
                </div>
                <div className='main-header-container d-flex'>
                    <div className='about-content-container'>
                        <p className='about-content'> lorem pojilhucgvxb kjhbgvcvbnjkl</p>
                        <a href='https://google.com' className='about-know-more'>Know More</a>
                    </div>
                    <div className='profile-photo-container'>
                        <img
                            src='https://images.unsplash.com/photo-1596573340087-3e3e07e5c661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            className='profile-photo'></img>

                    </div>
                </div>
            </header>
            <div className='blogs-container d-flex'>
                <h1 className='blogs-container-heading'>From my Desk</h1>
            </div>
            <div className='blogs-post-container d-flex'>
                <BlogsCard isOnBlogsPage={false}></BlogsCard>
                <BlogsCard isOnBlogsPage={false}></BlogsCard>
                <BlogsCard isOnBlogsPage={false}></BlogsCard>
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
