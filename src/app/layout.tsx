import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <nav className="navbar navbar-expand-lg p-2 navbar-light bg-secondary">
            <a className="navbar-brand" href="https://front-end-210z.onrender.com/">ArkusNexus</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="navbar-brand" href="https://front-end-210z.onrender.com/Vacant">Vacant</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="https://front-end-210z.onrender.com/Consult">Consult</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {children}
        
        </body>
    </html>
  )
}
