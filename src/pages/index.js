import { Inter } from 'next/font/google'
import Articles from '@/components/articles'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Articles/>
    </>
  )
}
