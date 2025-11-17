import React from 'react'

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
    <div className="min-w-[500px] max-w-[650px]">
      <div className="mb-4 pb-2 border-b-2 border-win95-dark">
        <h2 className="text-base text-win95-text m-0">⚙️ Skills.sys</h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="p-3 bg-black text-green-400 font-mono text-[11px] win95-panel mb-4 leading-loose">
          <p className="m-0"><strong>System:</strong> Full-Stack Development Environment</p>
          <p className="m-0"><strong>Status:</strong> <span className="text-green-500 font-bold">● OPERATIONAL</span></p>
          <p className="m-0"><strong>Version:</strong> Senior Engineer v5.0</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {skillCategories.map(({ category, icon, skills }) => (
            <div key={category} className="win95-panel p-3">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-win95-dark">
                <span className="text-xl leading-none">{icon}</span>
                <h3 className="text-xs font-bold m-0 text-win95-text">{category}</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                {skills.map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-[11px]">
                    <div className="win95-panel w-3.5 h-3.5 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-win95-text leading-snug">{skill}</span>
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
