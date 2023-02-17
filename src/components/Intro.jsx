import React from 'react';
import "./intro.css";
import avi from "../img/avi.svg";

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My Name is </h2>
                    <h1 className='i-name'>Avinash Jaiswal </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> MERN Developer</div>
                            <div className="i-title-item"> FrontEnd Developer</div>
                            <div className="i-title-item"> BackEnd Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop web app services of all sizes, specializing in creating stylish, modern website, web services, online stores.
                    </p>
                </div>
                
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={avi} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;
