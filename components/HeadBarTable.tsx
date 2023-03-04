import React from 'react'

function HeadBarTable() {
  return (
    <>
      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Orders</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <form className="table-search-form row gx-1 align-items-center">
                  <div className="col-auto">
                    <input
                      type="text"
                      id="search-orders"
                      name="searchorders"
                      className="form-control search-orders"
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
                  <option selected value="option-1">
                    All
                  </option>
                  <option value="option-2">This week</option>
                  <option value="option-3">This month</option>
                  <option value="option-4">Last 3 months</option>
                </select>
              </div>
              <div className="col-auto app-btn-primary rounded border border-grey">
                <a className="btn app-btn-secondary text-white" href="#">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-download me-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                    />
                  </svg>
                  Download CSV
                </a>
              </div>
            </div>
            {/*<!--//row-->*/}
          </div>
          {/*<!--//table-utilities-->*/}
        </div>
        {/*<!--//col-auto-->*/}
      </div>
      {/*<!--//row-->*/}
    </>
  )
}

export default HeadBarTable
