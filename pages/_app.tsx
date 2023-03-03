import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserLayout from '@/layouts/UserLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from 'react-redux'
import { store } from '@/store/configureStore'
config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter()
  const [layout, setLayout] = useState(<Component {...pageProps} />)
  const pathList = ['/404', '/login','/login','/signup','/app','/count']
  useEffect(() => {
    for (let i = 0; i < pathList.length; i++) {
      if (route.pathname === pathList[i]) {
        setLayout(<Component {...pageProps} />)
        break
      } else {
        setLayout(
          <UserLayout>
            <Component {...pageProps} />
          </UserLayout>,
        )
      }
    }
  }, [route])
  return <Provider  store={store}>
          {layout}
          </Provider>
}
