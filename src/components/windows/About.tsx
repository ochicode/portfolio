import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="window-section about-section">
      <div className="section-header">
        <h2>👋 Hello, I'm [Your Name]</h2>
      </div>

      <div className="about-content">
        <div className="profile-box">
          <div className="profile-image">
            👨‍💻
          </div>
          <div className="profile-info">
            <p className="role">Software Engineer & Tech Lead</p>
            <p className="tagline">Building innovative solutions with code</p>
          </div>
        </div>

        <div className="info-group">
          <h3>$ whoami</h3>
          <p>
            I'm a passionate software engineer and tech lead with experience in building scalable
            applications and leading development teams. I love turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="info-group">
          <h3>$ cat experience.txt</h3>
          <ul className="experience-list">
            <li>💼 <strong>Tech Lead</strong> - Leading teams and architecting solutions</li>
            <li>🚀 <strong>Full-Stack Developer</strong> - From databases to user interfaces</li>
            <li>🎯 <strong>Problem Solver</strong> - Tackling complex challenges with creative solutions</li>
          </ul>
        </div>

        <div className="info-group">
          <h3>$ echo $INTERESTS</h3>
          <div className="interests-tags">
            <span className="tag">Open Source</span>
            <span className="tag">System Design</span>
            <span className="tag">Team Leadership</span>
            <span className="tag">Developer Experience</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
