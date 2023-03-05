import React, { useMemo, useState } from 'react'
import GestionUtilisateurHeader from './GestionUtilisateurHeader'
import GestionUtilisateurTable from './GestionUtilisateurTable'
import { useGetAllUsersQuery } from '@/services/gestionUtilisateurApi'
import Pagination from '@/components/PaginationCom';
// import { Pagination } from 'react-bootstrap'

const GestionUtilisateur = () => {
  let PageSize = 3;
  const { data, error, isLoading } = useGetAllUsersQuery('');
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // console.log(data)
  return (
    <>
        <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <GestionUtilisateurHeader />
          </div>
          <GestionUtilisateurTable users={currentTableData} />
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data?.length}
            pageSize={PageSize}
            onPageChange={(page:number) => setCurrentPage(page)}
          />

        </div>
      </div>
    </>
  )
}

export default GestionUtilisateur