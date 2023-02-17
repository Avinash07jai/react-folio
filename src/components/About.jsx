import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
                  <img src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
              <p className='a-sub'>MERN stands for <b>MongoDB, Express, React, Node</b>.</p>
        <p className='a-desc'>
                  Hello, I am Avinash Jaiswal and I am a web developer. I live and work. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday. You can also find me at youtube channel Coding.
        </p>
      </div>
    </div>
  )
}

export default About;
