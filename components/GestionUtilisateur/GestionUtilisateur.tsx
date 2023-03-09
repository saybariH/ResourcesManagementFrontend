import React, { useEffect, useMemo, useState } from 'react'
import GestionUtilisateurHeader from './GestionUtilisateurHeader'
import GestionUtilisateurTable from './GestionUtilisateurTable'
import Pagination from '@/components/PaginationCom'
import { NewUser, User, new_user0 } from '@/code/Type'

const GestionUtilisateur = () => {
  let PageSize = 3
  const [listUsers, setListUsers] = useState<User[]>([])
  const [newUser,setNewUser] = useState<NewUser>(new_user0)
  const [deleteUserId,setDeleteUserId] = useState(0)

  // Fetch data user
  useEffect( () => {
    fetch('http://localhost:8080/api/v1/user')
      .then(resp => {
        if (resp.ok) return resp.json()
        else throw resp
      })
      .then( data => setListUsers(data))
      console.log('fetch data useEffect')
  },[])
  // Ajouter nouvelle utilisateur 
  useEffect( ()=> {
    if (newUser.email.length !== 0){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': '' },
        body: JSON.stringify(newUser)
    };
    fetch('http://localhost:8080/api/v1/user',requestOptions)
    .then(resp => {
      if (resp.ok) console.log('data send correctly')
      else throw resp
    }).then(()=>{
      fetch('http://localhost:8080/api/v1/user')
      .then(resp => {
        if (resp.ok) return resp.json()
        else throw resp
      })
      .then( data => setListUsers(data))
    })
    }
  },[newUser])
  // Pagination Function 
  const [currentPage, setCurrentPage] = useState(1)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return listUsers?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, listUsers])
  // Delete Utilisateur
  useEffect(()=>{
    console.log(deleteUserId)
    console.log("You are in useEffect Delete")
    if (deleteUserId !== 0){
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json','Authorization': '' }
    };
    fetch('http://localhost:8080/api/v1/user/'+deleteUserId,requestOptions)
    .then(resp => {
      if (resp.ok) {console.log('data send correctly');setDeleteUserId(0)}
      else throw resp
    }).then(()=>{
      fetch('http://localhost:8080/api/v1/user')
      .then(resp => {
        if (resp.ok) return resp.json()
        else throw resp
      })
      .then( data => setListUsers(data))
    })
    if(currentTableData.length === 1 && currentPage !== 1 ){
      setCurrentPage(currentP => currentP-1)
    }
    }
  },[deleteUserId])
  return (
    <>
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <GestionUtilisateurHeader newUser={newUser} setNewUser={setNewUser}  />
          </div>
          <GestionUtilisateurTable users={currentTableData} setDeleteUserId={setDeleteUserId} />
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={listUsers?.length}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  )
}

export default GestionUtilisateur
