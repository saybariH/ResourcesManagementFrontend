import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function UserLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default UserLayout
