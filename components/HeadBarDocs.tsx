import React from 'react'

function HeadBarDocs() {
  return (
    <>
      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">My Docs</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <form className="docs-search-form row gx-1 align-items-center">
                  <div className="col-auto">
                    <input
                      type="text"
                      id="search-docs"
                      name="searchdocs"
                      className="form-control search-docs"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn app-btn-secondary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/*<!--//col-->*/}
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option value="DEFAULT">All</option>
                  <option value="option-2">Text file</option>
                  <option value="option-3">Image</option>
                  <option value="option-4">Spreadsheet</option>
                  <option value="option-5">Presentation</option>
                  <option value="option-6">Zip file</option>
                </select>
              </div>
              <div className="col-auto ">
                <a className="btn app-btn-primary border border-grey" href="#">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-upload me-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                    />
                  </svg>
                  Upload File
                </a>
              </div>
            </div>
            {/*<!--//row-->*/}
          </div>
          {/*<!--//table-utilities-->*/}
        </div>
        {/*<!--//col-auto-->*/}
      </div>
    </>
  )
}

export default HeadBarDocs
