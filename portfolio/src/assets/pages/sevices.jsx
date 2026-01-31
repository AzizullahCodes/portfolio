// services.jsx
import React from "react";
import '../cssFiles/services.css';
const Services = ()=>{
    return(
      <section className="services">
        {/* ************* firstRow ********* */}
        <div className="firstRow">
            <h1>About</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>
        </div>
        {/* ******** secondRow ******** */}
                <div className="secondRow">
                    {/* ======= card html ===== */}
                  <div className="card">
                    <h3>HTML</h3>
                    <p>Skilled in creating well-structured, semantic web pages with clean and organized code. Proficient in building responsive layouts and using HTML5 best practices.</p>
                    
                  </div>
                    {/* ======= card css ===== */}
                  <div className="card">
                    <h3>CSS</h3>
                    <p>Able to design visually appealing and responsive web pages with modern styling techniques. Skilled in CSS3 features, layouts, and customizing designs for different devices.</p>
                   
                  </div>
                    
                </div>
      </section>
    )
}
export default Services;