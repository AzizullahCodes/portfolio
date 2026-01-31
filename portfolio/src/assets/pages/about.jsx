// about.jsx
import React from "react";
import '../cssFiles/about.css';
import myimage from '../../assets//profileImages/myimage.png';
const About = ()=>{
    return(
       <section className="about">
       <div className="aboutContainer">
        <div className="firstRow">
<h1>About</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>

        </div>
        <div className="secondRow">
 {/* left-column */}
           <div className="home-left"> 
            <h1>Hi, I’m Azizullah – a Frontend Developer building responsive and user-friendly web experiences.
</h1>

<p>Hi, I’m Azizullah, a Frontend Web Developer. I specialize in building clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap and ReactJs. I enjoy turning creative ideas into interactive digital experiences and always aim for pixel-perfect design and smooth functionality. Beyond coding, I love learning new technologies, solving problems, and continuously improving my skills to stay up-to-date in the fast-moving tech world. I’m currently open to freelance projects, internships, and full-time opportunities where I can contribute and grow as a developer.</p>

<div className="buttondiv">
    <button>View My Work</button>
    <button>Download Resume</button>
</div>

</div>
            {/* right-column */}
            <div className="home-right">
                <img src={myimage} alt="" />
            </div>
        </div>
        {/* =========== thirdRow ======== */}
        <div className="thirdRow">
<h1>Skills</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>
        </div>
        <div className="fourthRow">

        </div>
       </div>
       </section>
    )
}
export default About;