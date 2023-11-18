import './globals.css'
import { Edu_TAS_Beginner } from 'next/font/google'
import { StateContext } from './context/StateContext'

const inter = Edu_TAS_Beginner({ subsets: ['latin'] })

export const metadata = {
  title: 'Two4Line outfit',
  description: 'Clothes brand',
  icons: {
    icon: '/app/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* {isOpen && <SideMenu />} */}
          {/* <SideMenu/> */}
          {/* <header className={styles.header}>
            <Navbar/>
          </header> */}
          {/* <main className={styles.main}> */}
          <main>
            <StateContext>
              {children}
            </StateContext>
          </main>
          {/* <footer> */}
            {/* <Footer/> */}
          {/* </footer> */}
      </body>
    </html>
  )
}
