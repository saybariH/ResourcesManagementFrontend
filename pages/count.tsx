import React, { useState, useMemo } from 'react'
import Pagination from '@/components/PaginationCom'
import AjouterUtilisateur from '@/components/GestionUtilisateur/AjouterUtilisateur'
// import './style.scss';

let PageSize = 10

export default function App() {
  return (
    <>
      <AjouterUtilisateur />
    </>
  )
}
