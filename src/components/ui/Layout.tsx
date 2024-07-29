import { FC, ReactNode } from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

interface Props {
  children: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="layout-container container-xxl p-4">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
