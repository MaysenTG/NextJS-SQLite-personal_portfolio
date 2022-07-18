export default function AddProject() {
  return (
    <div className="container">
      <form action="/api/projects/new" method="post">
        <div className="row">
          <div className="col-md-8">
            <div className="col">
              <label htmlFor="inputTitle" className="form-label">
                Project title
              </label>
              <input
                type="text"
                className="form-control"
                name="inputTitle"
                id="inputTitle"
              />
            </div>
            <div className="col">
              <label htmlFor="inputSkills" className="form-label">
                Skills (React, Node, MongoDB, etc)
              </label>
              <input
                type="text"
                className="form-control"
                name="inputSkills"
                id="inputSkills"
              />
            </div>
            <div className="col">
              <label htmlFor="inputDescription" className="form-label">
                Description
              </label>
              <textarea
                height="100"
                className="form-control"
                name="inputDescription"
                id="inputDescription"
              />
            </div>
            <div className="col">
              <label htmlFor="inputGithubURL" className="form-label">
                Github URL
              </label>
              <input
                type="text"
                className="form-control"
                name="inputGithubURL"
                id="inputGithubURL"
              />
            </div>
            <div className="col">
              <label htmlFor="inputPreviewURL" className="form-label">
                Preview URL
              </label>
              <input
                type="text"
                className="form-control mb-5"
                name="inputPreviewURL"
                id="inputPreviewURL"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
