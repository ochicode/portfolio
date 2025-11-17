import React from 'react'
import './Projects.css'

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
    <div className="window-section projects-section">
      <div className="section-header">
        <h2>📁 My Projects</h2>
      </div>

      <div className="projects-content">
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each represents unique challenges and learning experiences.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <h3 className="project-name">{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <button className="project-link-btn">
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
