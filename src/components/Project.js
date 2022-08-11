import React from "react"

function Project({ project }) {
  return (
    <div className="card">
      <img className="card__img" src={project.image} alt={project.title} />
      <div style={{ marginTop: "1rem" }}>
        <h5 className="card-title">{project.title}</h5>
        <a
          href={project.link}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  )
}

export default Project
