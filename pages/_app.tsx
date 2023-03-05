
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import UserLayout from '@/layouts/UserLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/configureStore'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter()
  const [layout, setLayout] = useState(<Component {...pageProps} />)
  const pathList = ['/404', '/login', '/login', '/signup', '/app', '/count']
  useEffect(() => {
    setLayout(
      pathList.includes(route.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      ),
    )
  }, [route])
  return <Provider store={store}>{layout}</Provider>
}
