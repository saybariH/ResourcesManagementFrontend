import React from 'react'
import DeleteUtilisateur from './DeleteUtilisateur'
import { User } from '@/code/Type'
import ModifierUtilisateur from './ModifierUtilisateur'

export type GestionUtilisateurTableProps = {
  users: User[] | undefined,
  // deleteUserId: number,
  setDeleteUserId:(id:number)=>void
}

const GestionUtilisateurTable = ({ users,setDeleteUserId }: GestionUtilisateurTableProps) => {
  const classNameByRole = {
    Admin: 'badge bg-success',
    User: 'badge bg-warning',
    Fournisseur: 'badge bg-danger',
  }
  return (
    <>
      <nav
        id="orders-table-tab"
        className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
      >
        <a
          className="flex-sm-fill text-sm-center nav-link active"
          id="orders-all-tab"
          data-bs-toggle="tab"
          href="#orders-all"
          role="tab"
          aria-controls="orders-all"
          aria-selected="true"
        >
          All
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-paid-tab"
          data-bs-toggle="tab"
          href="#orders-paid"
          role="tab"
          aria-controls="orders-paid"
          aria-selected="false"
        >
          User
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-pending-tab"
          data-bs-toggle="tab"
          href="#orders-pending"
          role="tab"
          aria-controls="orders-pending"
          aria-selected="false"
        >
          Admin
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          id="orders-cancelled-tab"
          data-bs-toggle="tab"
          href="#orders-cancelled"
          role="tab"
          aria-controls="orders-cancelled"
          aria-selected="false"
        >
          Fournisseur
        </a>
      </nav>

      <div className="tab-content" id="orders-table-tab-content">
        <div
          className="tab-pane fade show active"
          id="orders-all"
          role="tabpanel"
          aria-labelledby="orders-all-tab"
        >
          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Email</th>
                      <th className="cell">Prenom</th>
                      <th className="cell">Nom</th>
                      <th className="cell">Role</th>
                      <th className="cell"></th>
                      <th className="cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((user) => (
                      <tr key={user.id}>
                        <td className="cell">#{user.id}</td>
                        <td className="cell">
                          <span className="truncate">{user.email}</span>
                        </td>
                        <td className="cell">{user.firstname} </td>
                        <td className="cell">
                          <span>{user.lastname}</span>
                          {/* <span className="note">2:16 PM</span> */}
                        </td>
                        <td className="cell">
                          <span className="badge bg-success">{user.role}</span>
                        </td>
                        <td className="cell">
                          {/* <button className="btn-sm app-btn-secondary">
                            Modifier
                          </button> */}
                          <ModifierUtilisateur user={user}/>
                        </td>
                        <td className="cell ">
                          <DeleteUtilisateur userId={user.id} userName={user.firstname+' '+user.lastname} setDeleteUserId={setDeleteUserId} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/*<!--//table-responsive-->*/}
            </div>
            {/*<!--//app-card-body-->*/}
          </div>
          {/*<!--//app-card-->*/}
        </div>
      </div>
    </>
  )
}

export default GestionUtilisateurTable
