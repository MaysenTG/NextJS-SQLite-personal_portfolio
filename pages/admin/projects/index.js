/* eslint-disable */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/* eslint-disable */
import * as React from "react"; // <--- import the hook
import { ReactDOM } from "react";

const { useState, useEffect } = React;

const AllProjects = ({ allProjects }) => {
  React.useEffect(() => {
    console.log("allProjects", allProjects);
  }, []);

  const [number, setNumber] = React.useState(0);

  return (
    <div className="container">
      <div className="row mb-2">
        <div id="title-and-buttons" className="d-flex justify-content-between">
          <h2>Projects {number}</h2>
          <button
            className="btn btn-primary"
            onClick={() => setNumber(number + 1)}
          >
            Increment
          </button>
          <div id="main-buttons-container" className="d-flex">
            <a className="h-100 btn btn-primary" href="projects/add-project">
              Add project
            </a>
            <button className="h-100 btn btn-secondary">Export projects</button>
          </div>
          <div
            class="modal fade"
            id="bulkAddProjects"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Bulk add projects
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Please add upload a JSON file with a format matching below:
                  </p>
                  <form id="bulkProductUploadForm">
                    <div>
                      <label for="formFileLg" class="form-label">
                        Upload JSON file here
                      </label>
                      <input
                        class="form-control form-control-lg"
                        id="bulkAddProducts"
                        type="file"
                        name="bulkAddProducts"
                        accept="*.json"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    form="bulkProductUploadForm"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Upload projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-fluid">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Skills</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((project) => (
            <tr
              className="clickable-table-row"
              onClick={(e) => this.handleTableRowClick(e)}
              data-id={project.id}
              key={project.id}
            >
              <th data-id="project-checkbox-row">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name={project.id}
                  onChange={(e) => {
                    this.addIdToState(e, project.id);
                  }}
                />
              </th>
              <th
                scope="row"
                colSpan={4}
                style={{ maxWidth: 40 + "px", overflow: "scroll" }}
              >
                {project.id}
              </th>
              <td>{project.title}</td>
              <td>{project.skills}</td>
              <td>
                <a
                  className="btn btn-primary"
                  href={"projects/" + project.id + "/edit"}
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const allProjects = await prisma.project.findMany();
  console.log(allProjects);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allProjects,
    },
  };
}

export default AllProjects;
