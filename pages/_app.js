import ViewTransition from '@/view-transition'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <ViewTransition>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </ViewTransition>
  )
}
