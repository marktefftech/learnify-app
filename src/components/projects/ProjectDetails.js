import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gallery from './Gallery'

class ProjectDetails extends Component {
    render() {

        let project_id = this.props.match.params.project_id;
        let project = this.props.projects[project_id-1];

    return (
        <div className="container section project-details">
        <iframe src="https://reactamplify1f8a8330a10c4bf8b6b7dade10851eab110559-dev.s3-us-west-2.amazonaws.com/public/rain.mp4" title="Class video number one"  width="100%" height="300"></iframe> 
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p className="center"> {project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {project.author}</div>
                </div>
            </div>
            <Gallery />
        </div>
    )
    }
}


const mapStateToProps = (state) => {
    return {
      projects: state.project.projects
    }
  }

  
export default connect(mapStateToProps)(ProjectDetails)
