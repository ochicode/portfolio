import React from 'react'

interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  icon: string
  link?: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Awesome Project Alpha',
      description: 'A revolutionary application that solves real-world problems with elegant code.',
      tech: ['React', 'TypeScript', 'Node.js'],
      icon: '🚀',
      link: '#'
    },
    {
      id: '2',
      name: 'Super Tool Beta',
      description: 'Developer tool that improves productivity and streamlines workflows.',
      tech: ['Python', 'FastAPI', 'Docker'],
      icon: '⚡',
      link: '#'
    },
    {
      id: '3',
      name: 'Innovation Platform',
      description: 'Scalable platform for managing complex distributed systems.',
      tech: ['Go', 'Kubernetes', 'PostgreSQL'],
      icon: '🎯',
      link: '#'
    },
    {
      id: '4',
      name: 'Open Source Contribution',
      description: 'Major contributions to popular open source projects in the ecosystem.',
      tech: ['Various', 'Community'],
      icon: '💎',
      link: '#'
    }
  ]

  return (
    <div className="md:min-w-[500px] md:max-w-[700px]">
      <div className="mb-4 pb-2 border-b-2 border-win95-dark">
        <h2 className="text-base text-win95-text m-0">📁 My Projects</h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="m-0 mb-4 text-[11px] win95-panel p-2">
          Here are some of the projects I've worked on. Each represents unique challenges and learning experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {projects.map(project => (
            <div key={project.id} className="win95-panel p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl leading-none">{project.icon}</span>
                <h3 className="text-xs font-bold m-0 text-win95-text">{project.name}</h3>
              </div>
              <p className="text-[11px] leading-normal m-0 flex-1 text-win95-text">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map(tech => (
                  <span key={tech} className="text-[9px] px-1.5 py-0.5 bg-win95-window border border-win95-dark whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <button className="win95-button mt-2 px-3 py-1 text-[11px] self-start">
                  View Project →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
