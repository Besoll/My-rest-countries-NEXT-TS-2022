import { FC } from 'react'
import { Header, Footer } from '@components/index'
import s from "./Layout.module.css"


const Layout: FC = ({children}: any) => {

  return (
    <div className={s.root}>
        <Header />
        <main className="fit">
            { children }
        </main>
        <Footer />
    </div>
  )
}

export default Layout