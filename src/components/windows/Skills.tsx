import React from 'react'
import './Skills.css'

interface SkillCategory {
  category: string
  skills: string[]
  icon: string
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      icon: '💬',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'Rust']
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'CSS/SASS']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'DevOps & Tools',
      icon: '🔧',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Linux']
    },
    {
      category: 'Leadership',
      icon: '👥',
      skills: ['Team Management', 'Architecture Design', 'Code Review', 'Mentoring', 'Agile/Scrum']
    },
    {
      category: 'Soft Skills',
      icon: '💡',
      skills: ['Problem Solving', 'Communication', 'Technical Writing', 'Public Speaking']
    }
  ]

  return (
    <div className="window-section skills-section">
      <div className="section-header">
        <h2>⚙️ Skills.sys</h2>
      </div>

      <div className="skills-content">
        <div className="system-info">
          <p><strong>System:</strong> Full-Stack Development Environment</p>
          <p><strong>Status:</strong> <span className="status-ok">● OPERATIONAL</span></p>
          <p><strong>Version:</strong> Senior Engineer v5.0</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(({ category, icon, skills }) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{icon}</span>
                <h3 className="category-name">{category}</h3>
              </div>
              <div className="skills-list">
                {skills.map(skill => (
                  <div key={skill} className="skill-item">
                    <div className="skill-checkbox">✓</div>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
