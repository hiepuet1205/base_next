import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './GlobalRedux/Providers';
import { Provider } from 'react-redux';
import {store} from './GlobalRedux/store';

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
        <Provider store={store}>
          {children}
        </Provider>
        </body>
    </html>
  )
}
