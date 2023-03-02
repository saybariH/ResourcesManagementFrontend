import HeadBarDocs from '@/components/HeadBarDocs'
import HeadBar from '@/components/HeadBarDocs'
import OneDocs, { OneDocsProps } from '@/components/OneDocs'
import PaginationDocs from '@/components/PaginationDocs'
import React from 'react'

function docs() {

    const obj:OneDocsProps[] = [{
        image : '/background/background-1.jpg',
        titre : 'Document nummero 1',
        text : 'Text',
        size : '5 mb',
        uploaded:'3 min ago',
        isItNew : true

    }]

  return (
    <>
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
           <HeadBarDocs />
            {/*<!--//row-->*/}

            <div className="row g-4">
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
                <OneDocs {...obj[0]}  />
              
            </div>
            {/*<!--//row-->*/}
            <PaginationDocs />
            {/*<!--//app-pagination-->*/}
          </div>
          {/*<!--//container-fluid-->*/}
        </div>
        {/*<!--//app-content-->*/}
      </div>
    </>
  )
}

export default docs
