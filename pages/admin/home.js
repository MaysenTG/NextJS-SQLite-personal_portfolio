export default function Home() {
  return (
    <div className="container">
      <h2 className="text-center mb-5">
        Hi, Maysen! What do you want to do today?
      </h2>
      <div className="row">
        <div className="card col-sm-6 col-12 mb-5">
          <div className="card-body">
            <h5 className="card-title">Projects</h5>
            <p className="card-text">Add/remove or edit projects</p>
            <a href="projects" className="btn btn-primary">
              View projects
            </a>
          </div>
        </div>
        <div className="card col-sm-6 col-12 mb-5">
          <div className="card-body">
            <h5 className="card-title">Work experience</h5>
            <p className="card-text">Add/remove or edit work experiences</p>
            <a href="work" className="btn btn-primary">
              View work experiences
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col-sm-6 col-12 mb-5">
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">
              Add/remove or edit education experiences
            </p>
            <a href="education" className="btn btn-primary">
              Education experience
            </a>
          </div>
        </div>
        <div className="card col-sm-6 col-12 mb-5">
          <div className="card-body">
            <h5 className="card-title">Language settings (frontend)</h5>
            <p className="card-text">Edit the text settings on the frontend</p>
            <a href="settings" className="btn btn-primary">
              Language settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
