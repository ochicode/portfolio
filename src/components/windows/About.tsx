import React from 'react'

const About: React.FC = () => {
  return (
    <div className="md:min-w-[400px] md:max-w-[600px]">
      <div className="mb-4 pb-2 border-b-2 border-win95-dark">
        <h2 className="text-base text-win95-text m-0">👋 Hello, I'm [Your Name]</h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="win95-panel flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 items-center">
          <div className="text-[48px] sm:text-[64px] leading-none">
            👨‍💻
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-sm mb-1 text-win95-active m-0">Software Engineer & Tech Lead</p>
            <p className="text-[11px] text-win95-text m-0">Building innovative solutions with code</p>
          </div>
        </div>

        <div className="win95-panel p-2">
          <h3 className="text-xs mb-2 m-0 text-green-600 font-mono">$ whoami</h3>
          <p className="m-0 text-[11px] leading-relaxed">
            I'm a passionate software engineer and tech lead with experience in building scalable
            applications and leading development teams. I love turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="win95-panel p-2">
          <h3 className="text-xs mb-2 m-0 text-green-600 font-mono">$ cat experience.txt</h3>
          <ul className="m-0 pl-0 list-none">
            <li className="text-[11px] leading-loose mb-1">💼 <strong>Tech Lead</strong> - Leading teams and architecting solutions</li>
            <li className="text-[11px] leading-loose mb-1">🚀 <strong>Full-Stack Developer</strong> - From databases to user interfaces</li>
            <li className="text-[11px] leading-loose mb-1">🎯 <strong>Problem Solver</strong> - Tackling complex challenges with creative solutions</li>
          </ul>
        </div>

        <div className="win95-panel p-2">
          <h3 className="text-xs mb-2 m-0 text-green-600 font-mono">$ echo $INTERESTS</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="win95-button px-2 py-0.5 text-[10px] whitespace-nowrap">Open Source</span>
            <span className="win95-button px-2 py-0.5 text-[10px] whitespace-nowrap">System Design</span>
            <span className="win95-button px-2 py-0.5 text-[10px] whitespace-nowrap">Team Leadership</span>
            <span className="win95-button px-2 py-0.5 text-[10px] whitespace-nowrap">Developer Experience</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
