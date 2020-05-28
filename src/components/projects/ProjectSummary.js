import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h1 className="card-title ">{project.title}</h1>
        <p>Instructor:  {project.author}</p>
        <button className="btn blue lighten-1 card-btn"><Link to={'/project/' + project.proj_id}>Start</Link></button>
      </div>
    </div>
  )
}

export default ProjectSummary