import React from 'react'

function PaginationDocs() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <a className="page-link" href="#" style={{color:'#15a362'}}  aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" style={{color:'#15a362'}} href="#">1</a></li>
          <li className="page-item"><a className="page-link" style={{color:'#15a362'}} href="#">2</a></li>
          <li className="page-item"><a className="page-link" style={{color:'#15a362'}} href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" style={{color:'#15a362'}}>Next</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PaginationDocs
