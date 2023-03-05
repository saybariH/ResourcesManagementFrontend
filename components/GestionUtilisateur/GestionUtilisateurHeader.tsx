import React from 'react'

const GestionUtilisateurHeader = () => {
  return (
    <>
        <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Gestion Utilisateur</h1>
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
                      className="form-control search-orders h-1"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn app-btn-secondary border">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/*<!--//col-->*/}
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option  value="DEFAULT">
                    All
                  </option>
                  <option value="option-2">This week</option>
                  <option value="option-3">This month</option>
                  <option value="option-4">Last 3 months</option>
                </select>
              </div>
              <div className="col-auto app-btn-primary rounded border border-grey">
                <a className="btn text-white" href="#">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-person-plus mx-2" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  Ajouter Utilisateur
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

export default GestionUtilisateurHeader