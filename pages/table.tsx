import HeadBarTable from '@/components/HeadBarTable'
import Pagination from '@/components/PaginationCom'
import Table from '@/components/Table'
import React from 'react'

function table() {
  return (
    <>
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <HeadBarTable />
          </div>
          {/*<!--//tab-pane-->*/}

          <Table />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default table
