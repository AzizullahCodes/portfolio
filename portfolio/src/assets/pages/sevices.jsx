// about.jsx
import React from "react";
import '../cssFiles/services.css';
import { FaCode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaObjectGroup, FaPalette } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaTools, FaRocket } from "react-icons/fa";
const About = ()=>{
    return(
       <section className="about">
       <div className="aboutContainer">
        <div className="firstRow">
<h1>About</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>

        </div>
        
        {/* =========== fourthRow ======== */}
        <div className="fourthRow">
            {/* ======= card Responsive Website Development ===== */}
          <div className="card">
            <span><FaCode size={40} color="#007BFF" /></span>
            <h3>Responsive Website Development</h3>
            <p>I create fully responsive websites that adapt seamlessly to all screen sizes, ensuring a consistent, user-friendly experience on mobile, tablet, and desktop devices.</p>
           
          </div>
            {/* ======= card Frontend Development with JavaScript ===== */}
          <div className="card">
            <span><TbBrandJavascript size={40} color="#007BFF" /></span>
            <h3>Frontend Development with JavaScript</h3>
            <p>I develop interactive and dynamic frontend features using JavaScript, including DOM manipulation, form validation, and user-focused functionality to enhance website usability.</p>
           
          </div>

           {/* ======= card ReactJS Application Development ===== */}
          <div className="card">
            <span><GrReactjs size={40} color="#007BFF"/></span>
            <h3>ReactJS Application Development</h3>
            <p>I build fast, scalable, and interactive web applications using ReactJS, focusing on reusable components, clean code, and a smooth user experience.</p>
           
          </div>

           {/* ======= card UI Implementation from Designs ===== */}
          <div className="card">
            <span><FaObjectGroup size={40} color="#007BFF" /></span>
            
            <h3>UI Implementation from Designs</h3>
            <p>I convert UI designs from Figma and other design tools into pixel-perfect, responsive, and user-friendly web interfaces using modern frontend technologies.</p>
           
          </div>

           {/* ======= card Bootstrap & React-Bootstrap UI Design ===== */}
          <div className="card">
            <span><BsBootstrap size={40} color="#007BFF"/></span>
            <h3>Bootstrap & React-Bootstrap UI Design</h3>
           <p>I create clean, responsive, and modern user interfaces using Bootstrap and React-Bootstrap, ensuring fast development, consistent design, and mobile-friendly layouts.</p>           
          </div>

           {/* ======= card css ===== */}
          <div className="card">
            <FaTools size={40} color="#007BFF" /> 
            <h3>Website Optimization & Fixes</h3>
            <p>I improve website performance, fix layout and responsiveness issues, and resolve frontend bugs to ensure a smooth, fast, and user-friendly experience across all devices and browsers.</p>
           
          </div>
           
           
          
        </div>
       </div>
       </section>
    )
}
export default About;
