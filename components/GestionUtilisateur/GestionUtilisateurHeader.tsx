import React from 'react'
import AjouterUtilisateur from './AjouterUtilisateur'
import { NewUser } from '@/code/Type'

export type GestionUtilisateurHeaderProps = {
  newUser : NewUser,
  setNewUser : (newUser:NewUser)=> void
}


const GestionUtilisateurHeader = ({newUser,setNewUser}:GestionUtilisateurHeaderProps) => {
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
                    <button
                      type="submit"
                      className="btn app-btn-secondary border"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/*<!--//col-->*/}
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option value="DEFAULT">All</option>
                  <option value="option-2">This week</option>
                  <option value="option-3">This month</option>
                  <option value="option-4">Last 3 months</option>
                </select>
              </div>
              <AjouterUtilisateur newUser={newUser} setNewUser={setNewUser} />
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
